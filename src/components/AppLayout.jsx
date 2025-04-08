import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { auth } from "../utils/firebase";
import { login, logout } from "../store/userSlice";
import Header from "./Header";

const AppLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // ✅ To prevent redirect loop

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(login({ uid, email, displayName, photoURL }));

        // ✅ Navigate only if not already on /browse
        if (location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        dispatch(logout());

        // ✅ Navigate only if not already on /
        if (location.pathname !== "/") {
          navigate("/");
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate, location]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;

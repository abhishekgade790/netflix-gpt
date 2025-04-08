import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();

  return (
    <div>
      <h1>Something went wrong.</h1>
      {err ? (
        <>
          <h2>{err.statusText || err.message}</h2>
          <h2>{err.status}</h2>
        </>
      ) : (
        <h2>Unknown Error</h2>
      )}
    </div>
  );
}


export default Error;

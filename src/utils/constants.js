export const LOGO =
  "https://github.com/abhishekgade790/netflix-gpt/blob/main/src/assets/cinenestLOGO.png?raw=true";

export const AVATAR_PHOTO =
  "";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BACKGROUND_IMG_URL =
  "https://github.com/abhishekgade790/netflix-gpt/blob/main/src/assets/background.jpg?raw=true";

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

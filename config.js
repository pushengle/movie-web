window.__CONFIG__ = {
  // The URL for the CORS proxy, the URL must NOT end with a slash!
  VITE_CORS_PROXY_URL: "https://dash.cloudflare.com/354c3ca37933652ea7d09b6e3b33a06d/workers/services/view/simple-proxy/production",

  // The READ API key to access TMDB
  VITE_TMDB_READ_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmY3NTNjODMxYzc0MDJhZjI5NWU4MDUzOTk5YzRkYyIsInN1YiI6IjY1YTNlOGZlNWIzNzBkMDEyMjM4NGU2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HQatilxcbaD5W1OKooiJEnmxXMj5Upip0jQm_OwpGCk",

  // The DMCA email displayed in the footer, null to hide the DMCA link
  VITE_DMCA_EMAIL: null,

  // Whether to disable hash-based routing, leave this as false if you don't know what this is
  VITE_NORMAL_ROUTER: false,

  // The backend URL to communicate with, defaults to the movie-web hosted one at backend.movie-web.app
  VITE_BACKEND_URL: null,

  // A comma separated list of disallowed IDs in the case of a DMCA claim - in the format "series-<id>" and "movie-<id>"
  VITE_DISALLOWED_IDS: ""
};

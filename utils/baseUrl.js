const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://webxkart.com"
    : "http://localhost:3000";

export default baseUrl;

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Set `base` to your repository name when deploying as a project page, e.g. "/pianist-gastronomist-site/".
// For a user/organization site (username.github.io), you can leave it as "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});



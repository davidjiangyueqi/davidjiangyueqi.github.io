import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// Update `base` to your GitHub Pages repo path if using a project page, e.g. "/my-repo/"
export default defineConfig({
  plugins: [react()],
  base: "/",
});



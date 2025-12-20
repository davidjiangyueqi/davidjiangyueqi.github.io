import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { writeFileSync } from "fs";
import { resolve } from "path";

// Set `base` to your repository name when deploying as a project page, e.g. "/pianist-gastronomist-site/".
// For a user/organization site (username.github.io), you can leave it as "/".
export default defineConfig({
  plugins: [
    react(),
    (() => {
      let outDir = "dist"; // Default fallback
      return {
        name: "github-pages",
        apply: "build", // Only run during build, not during dev server
        configResolved(config) {
          // Capture the resolved output directory from Vite config
          outDir = config.build.outDir;
        },
        closeBundle() {
          // Create .nojekyll file to disable Jekyll processing on GitHub Pages
          // Use the resolved output directory from config
          const distPath = resolve(process.cwd(), outDir, ".nojekyll");
          writeFileSync(distPath, "");
        },
      };
    })(),
  ],
  base: "/",
});



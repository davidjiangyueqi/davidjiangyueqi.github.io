import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { writeFileSync, copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from "fs";
import { resolve, join } from "path";

// Set `base` to your repository name when deploying as a project page, e.g. "/pianist-gastronomist-site/".
// For a user/organization site (username.github.io), you can leave it as "/".
export default defineConfig({
  plugins: [
    react(),
    (() => {
      let outDir = "docs"; // Default fallback, kept in sync with build.outDir below
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
    // Copy photos from docs/photos to public/photos during dev and build
    (() => {
      const copyPhotos = () => {
        const docsPhotosPath = resolve(process.cwd(), "docs", "photos");
        const publicPhotosPath = resolve(process.cwd(), "public", "photos");
        
        if (!existsSync(docsPhotosPath)) return;
        
        const copyRecursive = (src: string, dest: string) => {
          if (!existsSync(dest)) {
            mkdirSync(dest, { recursive: true });
          }
          
          const entries = readdirSync(src, { withFileTypes: true });
          
          for (const entry of entries) {
            const srcPath = join(src, entry.name);
            const destPath = join(dest, entry.name);
            
            if (entry.isDirectory()) {
              copyRecursive(srcPath, destPath);
            } else {
              copyFileSync(srcPath, destPath);
            }
          }
        };
        
        copyRecursive(docsPhotosPath, publicPhotosPath);
      };
      
      return {
        name: "copy-photos",
        buildStart() {
          copyPhotos();
        },
        configureServer(server) {
          // Copy photos on dev server start
          copyPhotos();
        },
      };
    })(),
  ],
  base: "/",
  // Build directly into "docs" so GitHub Pages can serve from
  // the /docs folder on the main branch.
  build: {
    outDir: "docs",
  },
});



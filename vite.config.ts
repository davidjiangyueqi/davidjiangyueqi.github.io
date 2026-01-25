import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { writeFileSync } from "fs";
import { resolve, join } from "path";
import { createReadStream, statSync } from "fs";

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
    // Serve photos directly from docs/photos during development
    (() => {
      return {
        name: "serve-docs-photos",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            // If request is for /photos/, serve from docs/photos/
            if (req.url?.startsWith("/photos/")) {
              try {
                // Decode URL-encoded characters (e.g., %20 -> space)
                const decodedUrl = decodeURIComponent(req.url);
                // Remove leading slash and join with docs directory
                // Using join() instead of resolve() to avoid absolute path issues
                const relativePath = decodedUrl.startsWith("/") 
                  ? decodedUrl.slice(1) 
                  : decodedUrl;
                const filePath = join(process.cwd(), "docs", relativePath);
                
                const stats = statSync(filePath);
                if (stats.isFile()) {
                  // Simple MIME type detection based on file extension
                  const ext = filePath.split('.').pop()?.toLowerCase();
                  const mimeTypes: Record<string, string> = {
                    'jpg': 'image/jpeg',
                    'jpeg': 'image/jpeg',
                    'png': 'image/png',
                    'gif': 'image/gif',
                    'webp': 'image/webp',
                    'heic': 'image/heic',
                  };
                  const mimeType = mimeTypes[ext || ''] || 'application/octet-stream';
                  res.setHeader("Content-Type", mimeType);
                  res.setHeader("Content-Length", stats.size);
                  createReadStream(filePath).pipe(res);
                  return;
                }
              } catch (err) {
                // File doesn't exist, continue to next middleware
              }
            }
            next();
          });
        },
      };
    })(),
  ],
  base: "/",
  // Build directly into "docs" so GitHub Pages can serve from
  // the /docs folder on the main branch.
  build: {
    outDir: "docs",
    // Photos are already in docs/photos, so they'll be in the build output
    copyPublicDir: false, // Don't copy public dir since we're using docs/photos directly
  },
});



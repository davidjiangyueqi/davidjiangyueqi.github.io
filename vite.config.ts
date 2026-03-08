import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { copyFileSync } from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-pdf-worker',
      apply: 'build',
      generateBundle() {
        copyFileSync(
          'node_modules/pdfjs-dist/build/pdf.worker.min.mjs',
          'dist/pdf.worker.min.mjs'
        )
      }
    }
  ],
  server: {
    fs: {
      strict: false,
    },
  },
})

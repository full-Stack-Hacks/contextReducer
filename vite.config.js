// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [react(), visualizer()],
  test: {
    globals: true,
    environment: "node", // or 'node' if you're testing Node.js specific code
  },
});

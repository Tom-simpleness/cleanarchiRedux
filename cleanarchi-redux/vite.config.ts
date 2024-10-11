import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@trainingsapp/domain": path.resolve("./src/domain"),
      "@trainingsapp/components": path.resolve(
        "./src/userinterface/components"
      ),
      "@trainingsapp/pages": path.resolve("./src/userinterface/pages"),
      "@trainingsapp/infrastructure": path.resolve("./src/infrastructure"),
      "@trainingsapp/di": path.resolve("./src/di"),
      "@trainingsapp/store": path.resolve("./src/store"),
      "@trainingsapp/utils": path.resolve("./src/utils"),
    },
  },
});

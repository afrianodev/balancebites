import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Allow access from any IP address
    port: 5173,       // Default port (can be changed if needed)
    strictPort: true, // Ensure Vite uses this port exactly
  },
});

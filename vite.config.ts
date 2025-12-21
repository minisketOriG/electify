import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'



export default defineConfig(() => {

  const config = {
    plugins: [
      react(),
      tailwindcss()
    ],
    resolve: {
      alias: {
        '@': path.resolve(path.dirname(new URL(import.meta.url).pathname), 'src'),
        '@assets': path.resolve(path.dirname(new URL(import.meta.url).pathname), 'src/assets'),
        '@components': path.resolve(path.dirname(new URL(import.meta.url).pathname), 'src/components'),
      },
    }
  };

  

  return config;
  
})

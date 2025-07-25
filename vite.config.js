// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // 👇 eta add koro
// export default defineConfig({
//   base: "/travel-website/", // repo name ta base hisebe diba
//   plugins: [react()],
// });
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/travel-website/",
  plugins: [react()],
});

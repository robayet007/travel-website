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
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path'

// export default defineConfig({
//   base: "/travel-website/",
//   plugins: [react()],
// });


// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// })


import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  base: "/travel-website/",
  plugins: [react()],
  resolve: {
    alias: {
      '@': `${__dirname}/src`,
    },
  },
})


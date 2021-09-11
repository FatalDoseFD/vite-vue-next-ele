import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
export default ({ mode }) => {
  require('dotenv').config({ path: './.env' });
  require('dotenv').config({ path: `./.env.${mode}` });
  return defineConfig({
      plugins: [vue()],
      server:{
        port:process.env.VITE_DEV_PORT,
        open:process.env.VITE_DEV_OPEN == 'true'?true:false,
        alias: {
          '/@/': path.resolve(__dirname, './src'),
        },
        proxy: {
          '^/v1': {
            target: 'http://cangdu.org:8001',
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace('/v1/', '/v1/')
          },
          '^/v2': {
            target: 'http://cangdu.org:8001',
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace('/v2/', '/v2/')
          }
        }
      }
  })
}
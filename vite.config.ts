import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel/Cloudflare Pages 같은 루트 도메인 배포 기준
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    reportCompressedSize: false,
  },
  define: {
    // 브라우저 환경에서 process.env 참조 시 에러 방지 (빈 객체로 대체)
    // 실제 배포 시 API 키는 .env 파일을 생성하여 VITE_API_KEY로 관리하는 것을 권장합니다.
    'process.env': {}
  }
});

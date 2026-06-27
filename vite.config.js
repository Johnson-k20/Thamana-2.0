import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
var __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    server: {
        port: 5173,
        host: true,
        allowedHosts: [
            '.manuspre.computer',
            '.manus.computer',
            '.manus-asia.computer',
            '.manuscomputer.ai',
            '.manusvm.computer',
            'localhost',
            '127.0.0.1',
        ],
    },
    build: {
        outDir: 'dist/public',
        sourcemap: false,
        minify: 'terser',
    },
});

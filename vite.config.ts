import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/react-project/',
	plugins: [react()],
	build: {
		sourcemap: false,  // Désactive la génération des fichiers .map
	},
})

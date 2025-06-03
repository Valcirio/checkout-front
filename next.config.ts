import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	env: {
		BACKEND_DIR: process.env.BACKEND_DIR,
		NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
	},
	async redirects() {
		return [{ source: '/admin', destination: '/admin/order', permanent: true }]
	},
}

export default nextConfig

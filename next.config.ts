import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	env: {
		BACKEND_DIR: process.env.BACKEND_DIR,
		NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
	},
}

export default nextConfig

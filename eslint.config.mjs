import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const eslintConfig = [
	...compat.config({
		extends: ['next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'],
		rules: {
			'no-unused-vars': 'off',
			'no-console': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/strict-boolean-expressions': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-vars': 'error',
			'prettier/prettier': 'warn',
		},
		settings: { react: { version: 'detect' } },
	}),
]

export default eslintConfig

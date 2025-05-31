import ProductSession from '@/components/productSession'
import { ThemeSwitcher } from '@/components/themeSwitcher'
import instance from '@/services/axios'
import axios from 'axios'

export default async function PageHome() {
	try {
		const result = await instance.get('/product')
		console.log(result.data.products)
		return (
			<section className="flex h-screen w-full flex-col items-center justify-center overflow-hidden">
				<main>
					<ProductSession data={result.data.products} />
				</main>
			</section>
		)
	} catch (err) {
		if (axios.isAxiosError(err)) {
			console.log(err)
			throw new Error(err.code, { cause: err.status })
		}
		throw new Error('Erro desconhecido', { cause: 500 })
	}
}

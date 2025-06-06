import ProductSession from '@/components/productSession'
import instance from '@/services/axios'
import axios from 'axios'

export default async function PageProduct() {
	try {
		const result = await instance.get('/product')
		return (
			<section className="flex min-h-screen w-full flex-col items-center justify-center">
				<ProductSession data={result.data.products} />
			</section>
		)
	} catch (err) {
		if (axios.isAxiosError(err)) {
			throw new Error(err.code, { cause: err.status })
		}
		throw new Error('Erro desconhecido', { cause: 500 })
	}
}

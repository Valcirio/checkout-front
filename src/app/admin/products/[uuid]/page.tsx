import ProductUpdateSession from '@/components/productUpdateSession'
import instance from '@/services/axios'
import getCookieData from '@/services/cookie'
import { TRequestProduct } from '@/validators/product'
import axios from 'axios'

export default async function UpdateProductPage({ params }: { params: Promise<{ uuid: string }> }) {
	try {
		const cookieData = await getCookieData()
		const { uuid } = await params
		const { data }: { data: { product: TRequestProduct } } = await instance.get(
			`/product/admin/${uuid}`,
			{ headers: { Authorization: `Bearer ${cookieData}` } }
		)

		return <ProductUpdateSession product={data.product} />
	} catch (err) {
		if (axios.isAxiosError(err)) {
			throw new Error(`Erro ${err.status}`)
		}
		throw new Error('Erro desconhecido')
	}
}

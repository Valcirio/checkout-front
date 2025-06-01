import instance from '@/services/axios'
import getCookieData from '@/services/cookie'
import axios from 'axios'
import TableProducts from '../components/table/products'

export default async function AdminProductsPage() {
	try {
		const cookieData = await getCookieData()
		const result = await instance.get('/product/admin', {
			headers: { Authorization: `Bearer ${cookieData}` },
		})
		return <TableProducts data={result.data.products} />
	} catch (err) {
		if (axios.isAxiosError(err)) {
			throw new Error(`Erro ${err.status}`)
		}
		throw new Error('Erro desconhecido')
	}
}

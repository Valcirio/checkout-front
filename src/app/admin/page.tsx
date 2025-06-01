import instance from '@/services/axios'
import TableOrder from './components/table/orders'
import { TRegisterOrder } from '@/validators/order'
import getCookieData from '@/services/cookie'
import axios from 'axios'

export default async function AdminPage() {
	try {
		const cookieData = await getCookieData()
		const { data }: { data: { orders: TRegisterOrder[] } } = await instance.get('/order/admin', {
			headers: { Authorization: `Bearer ${cookieData}` },
		})
		return (
			<article className="flex h-full w-full max-w-xl flex-col items-center justify-center">
				<TableOrder data={data.orders} />
			</article>
		)
	} catch (err) {
		if (axios.isAxiosError(err)) {
			throw new Error(`Erro ${err.status}`)
		}
		throw new Error('Erro desconhecido')
	}
}

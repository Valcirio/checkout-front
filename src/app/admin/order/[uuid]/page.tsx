import OrderSession from '@/components/orderSession'
import instance from '@/services/axios'
import getCookieData from '@/services/cookie'
import { TRequestOrderSession } from '@/validators/order'
import axios from 'axios'

export default async function UpdateProductPage({ params }: { params: Promise<{ uuid: string }> }) {
	try {
		const cookieData = await getCookieData()
		const { uuid } = await params
		const { data }: { data: { result: TRequestOrderSession } } = await instance.get(
			`/order/${uuid}`,
			{ headers: { Authorization: `Bearer ${cookieData}` } }
		)

		return <OrderSession data={data.result} />
	} catch (err) {
		if (axios.isAxiosError(err)) {
			throw new Error(`Erro ${err.status}`)
		}
		throw new Error('Erro desconhecido')
	}
}

import OrderSession from '@/components/orderSession'
import instance from '@/services/axios'
import getCookieData from '@/services/cookie'
import { TParams } from '@/types/params'
import { TRequestOrderSession } from '@/validators/order'
import axios from 'axios'

export const dynamic = 'force-dynamic'

export default async function UpdateProductPage({ params }: { params: TParams }) {
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

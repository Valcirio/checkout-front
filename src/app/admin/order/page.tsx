import instance from '@/services/axios'
import TableOrder from './components/table'
import { TRequestOrder } from '@/validators/order'
import getCookieData from '@/services/cookie'
import axios from 'axios'
import { EOrderSelect } from '@/types/table'

export default async function AdminPage({
	searchParams,
}: {
	searchParams: Promise<Record<string, string>>
}) {
	const { page, ordination, desc } = await searchParams
	try {
		const cookieData = await getCookieData()
		const { data }: { data: { orders: TRequestOrder[]; hasNext: boolean } } = await instance.get(
			'/order',
			{
				params: {
					page: page ? page : 1,
					ordination: ordination ? ordination : EOrderSelect.DATE,
					desc: desc ? desc : false,
				},
				headers: { Authorization: `Bearer ${cookieData}` },
			}
		)
		return (
			<article className="flex h-full w-full max-w-3xl flex-col items-center justify-start pt-40">
				<TableOrder
					data={data.orders}
					filters={{
						page: { number: page ? Number(page) : 1, hasNext: data.hasNext },
						ordination: ordination ? ordination : EOrderSelect.DATE,
						desc: desc === 'true' ? true : false,
					}}
				/>
			</article>
		)
	} catch (err) {
		if (axios.isAxiosError(err)) {
			throw new Error(`Erro ${err.status}`)
		}
		throw new Error('Erro desconhecido')
	}
}

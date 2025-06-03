import instance from '@/services/axios'
import getCookieData from '@/services/cookie'
import axios from 'axios'
import TableProducts from './components/table'
import { TListProduct } from '@/validators/product'
import { EProductSelect } from '@/types/table'

export default async function AdminProductsPage({
	searchParams,
}: {
	searchParams: Promise<Record<string, string>>
}) {
	const { page, ordination, desc } = await searchParams
	try {
		const cookieData = await getCookieData()
		const { data }: { data: { products: TListProduct[]; hasNext: boolean } } = await instance.get(
			'/product/admin',
			{
				params: {
					page: page ? page : 1,
					ordination: ordination ? ordination : EProductSelect.ALPHABETICAL,
					desc: desc ? desc : false,
				},
				headers: { Authorization: `Bearer ${cookieData}` },
			}
		)
		return (
			<article className="flex h-full w-full max-w-3xl flex-col items-center justify-start pt-40">
				<TableProducts
					data={data.products}
					filters={{
						page: { number: page ? Number(page) : 1, hasNext: data.hasNext },
						ordination: ordination ? ordination : EProductSelect.ALPHABETICAL,
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

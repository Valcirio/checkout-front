import instance from '@/services/axios'
import { TListProduct } from '@/validators/product'
import axios from 'axios'
import { AlterForm } from './components/alterForm'
import BuyProvider from '@/context/buyContext'
import Slide from './components/slide'

export default async function ProductPage({ params }: { params: Promise<{ uuid: string }> }) {
	const { uuid } = await params
	try {
		const result = await instance.get(`/product/${uuid}`)
		return (
			<section className="flex min-h-screen w-full flex-col bg-background md:flex-row">
				<Slide product={result.data.product as TListProduct} />
				<BuyProvider>
					<AlterForm product={result.data.product as TListProduct} />
				</BuyProvider>
			</section>
		)
	} catch (err) {
		if (axios.isAxiosError(err)) {
			throw new Error(`Erro ${err.status}`)
		}
		throw new Error('Erro desconhecido')
	}
}

// export default async function ProductPage({ params }: { params: Promise<{ uuid: string }> }) {
// 	const { uuid } = await params
// 	try {
// 		const secretClient = await instance.get(`/order/${uuid}`)
// 		return (
// 			<section>
// 				<StripeProvider secret={secretClient.data.secret as string}>
// 					<CheckoutSession product={secretClient.data.product as TListProduct} />
// 				</StripeProvider>
// 			</section>
// 		)
// 	} catch (err) {
// 		if (axios.isAxiosError(err)) {
// 			throw new Error(`Erro ${err.status}`)
// 		}
// 		throw new Error('Erro desconhecido')
// 	}
// }

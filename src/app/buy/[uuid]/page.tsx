import CheckoutSession from '@/components/checkoutSession'
import StripeProvider from '@/providers/stripe'
import instance from '@/services/axios'
import { TListProduct } from '@/validators/product'
import axios from 'axios'

export default async function ProductPage({ params }: { params: { uuid: string } }) {
	try {
		const secretClient = await instance.get(`/order/${params.uuid}`)
		return (
			<section>
				<StripeProvider secret={secretClient.data.secret as string}>
					<CheckoutSession product={secretClient.data.product as TListProduct} />
				</StripeProvider>
			</section>
		)
	} catch (err) {
		if (axios.isAxiosError(err)) {
			throw new Error(`Erro ${err.status}`)
		}
		throw new Error('Erro desconhecido')
	}
}

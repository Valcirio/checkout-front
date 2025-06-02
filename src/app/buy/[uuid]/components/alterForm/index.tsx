'use client'

import * as Form from '../forms'
import StripeProvider from '@/providers/stripe'
import { TListProduct } from '@/validators/product'
import { useContext } from 'react'
import { BuyContext } from '@/context/buyContext'

export function AlterForm({ product }: { product: TListProduct }) {
	const { secret } = useContext(BuyContext)
	return (
		<section className="w-full overflow-y-auto p-8 sm:p-12 md:p-16 lg:w-1/2 lg:p-20">
			{!!secret ? (
				<StripeProvider secret={secret}>
					<Form.Payment product={product} />
				</StripeProvider>
			) : (
				<Form.Client id={product.id} value={product.price} />
			)}
		</section>
	)
}

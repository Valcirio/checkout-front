import { TSearchParams } from '@/types/params'
import ConfirmationCard from './components/card'
import { isNativeError } from 'util/types'

export const dynamic = 'force-dynamic'

export default async function ConfirmationPage({ searchParams }: { searchParams: TSearchParams }) {
	try {
		const { redirect_status } = await searchParams

		if (!redirect_status) {
			throw new Error('Página de status não permitida.')
		}

		return <ConfirmationCard status={redirect_status as string} />
	} catch (err) {
		if (isNativeError(err)) {
			throw new Error(err.message)
		}
		throw new Error('unknown')
	}
}

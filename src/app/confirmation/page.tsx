import ConfirmationCard from './components/card'
import { isNativeError } from 'util/types'

export default async function ConfirmationPage({
	searchParams,
}: {
	searchParams: Promise<{ redirect_status: string }>
}) {
	try {
		const { redirect_status } = await searchParams

		if (!redirect_status) {
			throw new Error('Página de status não permitida.')
		}

		return <ConfirmationCard status={redirect_status} />
	} catch (err) {
		if (isNativeError(err)) {
			throw new Error(err.message)
		}
		throw new Error('unknown')
	}
}

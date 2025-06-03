export const utcToDate = (utc: string) => {
	const date = new Date(utc)
	return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

export const utcToDateTime = (utc: string) => {
	const date = new Date(utc)
	return date.toLocaleDateString('pt-BR', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	})
}

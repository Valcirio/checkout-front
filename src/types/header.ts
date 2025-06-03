import { NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export type TEmptyParams = () => void

export type TRouteParams = (href: string, options?: NavigateOptions) => void

export type TRecoruses<T> = {
	title: string
	item: { content: string; color?: string }
	short: React.ElementType
	url?: string
	handleClick?: T
}

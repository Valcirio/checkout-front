export type TPaginationProps = { pageNumber: number; hasPrev: boolean; hasNext: boolean }

export type TPaginationClientProps = {
	setOrder: React.Dispatch<React.SetStateAction<number | null>>
} & TPaginationProps

export enum ESelect {
	ALPHABETICAL = 'alpha',
	PRICE = 'price',
	DATE = 'date',
}

export type TSelectProps = { order: ESelect }

export type TSelectClientProps = {
	setOrder: React.Dispatch<React.SetStateAction<ESelect>>
} & TSelectProps

export type TSortingProps = { isUp: boolean }

export type TSortingClientProps = {
	setOrder: React.Dispatch<React.SetStateAction<boolean>>
} & TSortingProps

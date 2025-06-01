import { cn } from '@/lib/utils'
import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

type TLoadingProps = VariantProps<typeof sizeCircle> & { info?: string }

const sizeCircle = tv({
	slots: {
		i_class:
			'absolute w-full h-full rounded-full border-t-transparent border-l-transparent border-r-transparent',
		label_class: 'relative flex',
	},
	variants: {
		size: {
			sm: { i_class: 'border-[0.2rem] border-b-primary-foreground', label_class: 'w-7 h-7' },
			md: { i_class: 'border-[0.3rem] border-b-primary-foreground', label_class: 'w-9 h-9' },
			lg: { i_class: 'border-[0.45rem] border-b-primary', label_class: 'w-20 h-20' },
		},
	},
	defaultVariants: { size: 'md' },
})

export const Loading = ({ info, size, ...props }: TLoadingProps) => {
	const { i_class, label_class } = sizeCircle({ size })
	return (
		<div className="flex h-fit w-fit flex-row-reverse items-center justify-center gap-2">
			{info && <p className="text-base">{info}</p>}
			<label {...props} aria-label="loading..." className={label_class()}>
				<i className={cn('animate-[spin_0.8s_linear_infinite] border-dotted', i_class())} />
				<i className={cn('animate-[spin_0.8s_ease_infinite] border-solid', i_class())} />
			</label>
		</div>
	)
}

'use client'

import { TRegisterProduct, TRequestProduct, ZRegisterProduct } from '@/validators/product'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import instance from '@/services/axios'
import { getCookie } from 'cookies-next/client'
import { STATUS_CODE } from '@/types/httpStatus'
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '../ui/textarea'
import { Minus, Plus } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Loading } from '../loading'
import fileToBase from '@/utils/fileToBase'
import axios from 'axios'

interface ProductUpdateFormProps {
	product: TRequestProduct
}

export default function ProductUpdateSession({ product }: ProductUpdateFormProps) {
	const router = useRouter()
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting, dirtyFields },
	} = useForm<TRegisterProduct>({
		resolver: zodResolver(ZRegisterProduct),
		criteriaMode: 'all',
		mode: 'onSubmit',
		defaultValues: {
			title: product.title,
			description: product.description,
			picture: product.picture,
			price: product.price,
			quantity: product.quantity,
		},
	})
	async function handleProduct(data: TRegisterProduct) {
		const dataChanged = Object.fromEntries(
			Object.entries(data).filter(([key]) => Object.keys(dirtyFields).includes(key))
		)
		try {
			const result = await instance.put(
				'/product',
				Object.assign({ id: product.id }, dataChanged),
				{ headers: { Authorization: `Bearer ${getCookie('access-token')}` } }
			)
			if (result.status === STATUS_CODE.OK) {
				toast.success('Produto atualizado com sucesso!')
				setTimeout(() => {
					router.push('/admin/products')
				}, 2000)
			}
		} catch (err) {
			if (axios.isAxiosError(err) && err.response?.data?.message) {
				toast.error(err.response.data.message)
			}
			toast.error('Erro ao criar o produto.')
		}
	}
	return (
		<section className="flex h-screen w-full flex-col items-center justify-start px-4 pt-24">
			<Card className="w-full max-w-xl">
				<CardHeader className="gap-1">
					<CardTitle className="text-lg font-semibold text-primary sm:text-2xl">
						Atualizar Produto
					</CardTitle>
					<CardDescription className="text-sm sm:text-lg">
						Altere e inove, de maineira simples.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						noValidate
						onSubmit={handleSubmit(handleProduct)}
						className="flex h-auto w-full flex-col items-center justify-center gap-6 px-6 sm:px-1"
					>
						<label className="flex w-full flex-col items-start justify-center gap-2">
							<span className="text-sm sm:text-base">Nome do Produto</span>
							<Input
								className="h-8 text-sm sm:text-base"
								data-invalid={errors.title?.message && true}
								type="text"
								{...register('title')}
							/>
							{errors.title?.message && (
								<p className="text-sm text-destructive">{errors.title?.message}</p>
							)}
						</label>
						<label className="flex w-full flex-col items-start justify-center gap-2">
							<span className="text-sm sm:text-base">Descrição</span>
							<Textarea
								className="text-sm sm:text-base"
								rows={4}
								data-invalid={errors.description?.message && true}
								{...register('description')}
							/>
							{errors.description?.message && (
								<p className="text-sm text-destructive">{errors.description?.message}</p>
							)}
						</label>
						<div className="flex w-full flex-col items-start justify-center gap-2 sm:flex-row">
							<label className="flex w-full flex-row items-center justify-center gap-2 sm:flex-col sm:items-start">
								<span className="px-1 text-sm sm:text-base">Valor do Produto</span>
								<div className="w-fit grow">
									<Input
										className="h-8 text-sm sm:h-10 sm:text-base"
										data-invalid={errors.price?.message && true}
										type="number"
										{...register('price', { valueAsNumber: true })}
									/>
									{errors.price?.message && (
										<p className="text-sm text-destructive">{errors.price?.message}</p>
									)}
								</div>
							</label>
							<label className="flex w-full flex-col items-start justify-center gap-2 sm:items-end">
								<span className="text-sm sm:text-base">Quantidade do Produto</span>
								<Controller
									control={control}
									name="quantity"
									render={({ field }) => (
										<div className="flex flex-col items-center justify-center">
											<article className="flex w-full flex-row items-center justify-center">
												<button
													disabled={field.value <= 1}
													type="button"
													onClick={() => field.onChange(Math.max(1, field.value - 1))}
													className="flex h-9 rounded-l-md border border-input bg-background px-1 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[invalid=true]:ring-destructive sm:h-10 md:text-sm"
												>
													<Minus className="h-5 w-5 sm:h-6 sm:w-6" />
												</button>
												<span className="flex h-9 w-12 items-center justify-center border-b border-t border-input bg-background text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[invalid=true]:ring-destructive sm:h-10 md:text-lg">
													{field.value}
												</span>
												<button
													type="button"
													onClick={() => field.onChange(field.value + 1)}
													className="flex h-9 rounded-r-md border border-input bg-background px-1 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[invalid=true]:ring-destructive sm:h-10 md:text-sm"
												>
													<Plus className="h-5 w-5 sm:h-6 sm:w-6" />
												</button>
											</article>
											{errors.quantity?.message && (
												<p className="text-sm text-destructive">{errors.quantity?.message}</p>
											)}
										</div>
									)}
								/>
							</label>
						</div>
						<Controller
							name="picture"
							control={control}
							render={({ field, fieldState, formState: {} }) => (
								<label className="flex w-full flex-col items-center justify-center gap-2">
									<span className="self-start text-sm sm:text-base">Foto do Produto</span>
									<article className="relative flex h-[7.5rem] w-[15rem] items-center justify-center rounded-md border-2 border-dashed border-input text-sm data-[invalid=true]:border-destructive sm:h-40 sm:w-[20rem]">
										{!field.value && <span>Preview da Imagem</span>}
										{field.value && (
											<img
												className="absolute inset-0 h-full w-full object-contain"
												src={field.value}
												alt="create-img"
											/>
										)}
										<Input
											name={field.name}
											title=""
											ref={field.ref}
											onBlur={field.onBlur}
											data-invalid={errors.picture?.message && true}
											accept="image/jpeg,image/png,image/jpg,image/webp"
											className="absolute inset-0 h-full w-full opacity-0"
											type="file"
											onChange={async (e) => {
												const baseFile = await fileToBase(e)
												if (baseFile) {
													field.onChange(baseFile)
												} else field.onChange(product.picture)
											}}
										/>
									</article>
									{fieldState.error?.message && (
										<p className="text-sm text-destructive">{fieldState.error?.message}</p>
									)}
								</label>
							)}
						/>
						<Button type="submit" disabled={isSubmitting} className="h-8 w-full sm:h-10">
							{isSubmitting ? <Loading info="Carregando..." size="sm" /> : 'Cadastrar'}
						</Button>
					</form>
				</CardContent>
			</Card>
		</section>
	)
}

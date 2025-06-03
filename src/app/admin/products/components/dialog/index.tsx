import {
	AlertDialogHeader,
	AlertDialog,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogCancel,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import instance from '@/services/axios'
import { STATUS_CODE } from '@/types/httpStatus'
import { getCookie } from 'cookies-next/client'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

type TDeleteDialogProps = { id: string; setOpen: (open: boolean) => void; open: boolean }

export default function DeleteDialog({ id, open, setOpen }: TDeleteDialogProps) {
	const router = useRouter()
	async function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		try {
			const result = await instance.delete(`/product/${id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${getCookie('access-token')}`,
				},
			})
			if (result.data.status === STATUS_CODE.OK) {
				setTimeout(() => {
					toast.success('Produto deletado com sucesso!')
					router.refresh()
				}, 1000)
			}
		} catch {
			setTimeout(() => {
				toast.error('Não foi possível deletar o produto.')
				setOpen(!open)
			}, 1000)
		}
	}

	return (
		<AlertDialog onOpenChange={setOpen} open={open}>
			<AlertDialogContent className="rounded-md">
				<AlertDialogHeader>
					<AlertDialogTitle>Tem certeza que deseja excluir esse produto?</AlertDialogTitle>
					<AlertDialogDescription>
						Após confirmar, os dados desse produto serão apagados permanentemente.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancelar</AlertDialogCancel>
					<Button
						variant="destructive"
						onClick={(el) => {
							handleClick(el)
						}}
					>
						Continuar
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}

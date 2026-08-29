'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const IMAGE_WIDTH = 1683
const IMAGE_HEIGHT = 1190

const guiaSadtSchema = z.object({
	registroANS: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{6}$/.test(value),
			'O Registro ANS deve conter exatamente 6 dígitos.',
		),
})

type GuiaSadtForm = z.infer<typeof guiaSadtSchema>

export default function Home() {
	const {
		watch,
		setValue,
		formState: { errors },
	} = useForm<GuiaSadtForm>({
		resolver: zodResolver(guiaSadtSchema),
		mode: 'onChange',
		defaultValues: {
			registroANS: '',
		},
	})

	const registroANS = watch('registroANS')

	const registroANSPreenchido = registroANS.trim() !== ''
	const registroANSErro = registroANSPreenchido && !!errors.registroANS
	const registroANSValido = registroANSPreenchido && !errors.registroANS

	return (
		<main className="flex h-screen flex-col overflow-hidden">
			<header className="flex h-14 shrink-0 items-center justify-between border-b bg-background px-4">
				<div className="flex items-center gap-2">
					<h1 className="text-sm font-semibold">Guia SADT</h1>
				</div>

				<div className="flex items-center gap-2">
					<ModeToggle />
					<Button>Limpar</Button> <Button>Salvar PDF</Button>
					<Button>Imprimir</Button>
				</div>
			</header>

			<section className="flex min-h-0 flex-1">
				<aside className="w-80 shrink-0 overflow-y-auto border-r bg-background p-4">
					<div className="space-y-4">
						<div>
							<h2 className="text-sm font-semibold">Dados da guia</h2>
							<p className="text-xs text-muted-foreground">
								Preencha os campos da ficha.
							</p>
						</div>

						<form id="guia-sadt-form" className="space-y-4">
							<div className="space-y-1">
								<Label htmlFor="registroANS">1. Registro ANS</Label>

								<Input
									id="registroANS"
									name="registroANS"
									inputMode="numeric"
									maxLength={6}
									placeholder="000000"
									value={registroANS}
									onChange={(event) => {
										const value = event.target.value
											.replace(/\D/g, '')
											.slice(0, 6)

										setValue('registroANS', value, {
											shouldValidate: true,
											shouldDirty: true,
											shouldTouch: true,
										})
									}}
									className={
										registroANSErro
											? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500'
											: registroANSValido
												? 'border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500'
												: ''
									}
								/>

								{registroANSErro && (
									<p className="text-xs font-medium text-red-500">
										{errors.registroANS?.message}
									</p>
								)}
							</div>
						</form>
					</div>
				</aside>

				<section className="min-w-0 flex-1 overflow-auto bg-zinc-100 p-6">
					<div
						className="relative mx-auto w-full max-w-[1683px]"
						style={{
							aspectRatio: `${IMAGE_WIDTH} / ${IMAGE_HEIGHT}`,
						}}
					>
						<Image
							src="/assets/images/fichas/sadt/guia-sadt-original.jpg"
							alt="Guia SADT Oficial"
							width={IMAGE_WIDTH}
							height={IMAGE_HEIGHT}
							priority
							className="absolute inset-0 block h-full w-full"
						/>
					</div>
				</section>
			</section>
		</main>
	)
}

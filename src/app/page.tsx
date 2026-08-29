'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { ModeToggle } from '@/components/mode-toggle'
import { SadtField, type SadtFieldConfig } from '@/components/sadt-field'
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
	numeroGuiaPrincipal: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{20}$/.test(value),
			'O Número da guia principal deve conter exatamente 20 dígitos.',
		),
	dataAutorizacao: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{8}$/.test(value),
			'A Data da Autorização deve conter 8 dígitos no formato DDMMAAAA.',
		),
})

type GuiaSadtForm = z.infer<typeof guiaSadtSchema>

const sadtFields: SadtFieldConfig[] = [
	{
		id: 'registroANS',
		x: 53,
		y: 115,
		width: 120,
		height: 21,
		length: 6,
		gap: 0,
		fontSize: 14,
		fontWeight: 500,
		align: 'center',
		type: 'number',
	},
	{
		id: 'numeroGuiaPrincipal',
		x: 198,
		y: 115,
		width: 400,
		height: 21,
		length: 20,
		gap: 0,
		fontSize: 14,
		fontWeight: 500,
		align: 'center',
		type: 'number',
	},
	{
		id: 'dataAutorizacaoDia',
		x: 53,
		y: 158,
		width: 40,
		height: 21,
		length: 2,
		gap: 0,
		fontSize: 14,
		fontWeight: 500,
		align: 'center',
		type: 'number',
	},
	{
		id: 'dataAutorizacaoMes',
		x: 99,
		y: 158,
		width: 40,
		height: 21,
		length: 2,
		gap: 0,
		fontSize: 14,
		fontWeight: 500,
		align: 'center',
		type: 'number',
	},
	{
		id: 'dataAutorizacaoAno',
		x: 145,
		y: 158,
		width: 80,
		height: 21,
		length: 4,
		gap: 0,
		fontSize: 14,
		fontWeight: 500,
		align: 'center',
		type: 'number',
	},
]

export default function Home() {
	const [debugEnabled, setDebugEnabled] = useState(false)
	const {
		watch,
		setValue,
		reset,
		formState: { errors },
	} = useForm<GuiaSadtForm>({
		resolver: zodResolver(guiaSadtSchema),
		mode: 'onChange',
		defaultValues: {
			registroANS: '',
			numeroGuiaPrincipal: '',
			dataAutorizacao: '',
		},
	})

	const registroANS = watch('registroANS')
	const numeroGuiaPrincipal = watch('numeroGuiaPrincipal')
	const dataAutorizacao = watch('dataAutorizacao')
	const formValues = watch()

	const registroANSPreenchido = registroANS.trim() !== ''
	const registroANSErro = registroANSPreenchido && !!errors.registroANS
	const registroANSValido = registroANSPreenchido && !errors.registroANS
	const numeroGuiaPrincipalPreenchido = numeroGuiaPrincipal.trim() !== ''
	const numeroGuiaPrincipalErro =
		numeroGuiaPrincipalPreenchido && !!errors.numeroGuiaPrincipal
	const numeroGuiaPrincipalValido =
		numeroGuiaPrincipalPreenchido && !errors.numeroGuiaPrincipal
	const dataAutorizacaoPreenchida = dataAutorizacao.trim() !== ''
	const dataAutorizacaoErro =
		dataAutorizacaoPreenchida && !!errors.dataAutorizacao
	const dataAutorizacaoValida =
		dataAutorizacaoPreenchida && !errors.dataAutorizacao

	const fieldsWithValues = sadtFields.map((field) => {
		const value =
			field.id === 'dataAutorizacaoDia'
				? dataAutorizacao.slice(0, 2)
				: field.id === 'dataAutorizacaoMes'
					? dataAutorizacao.slice(2, 4)
					: field.id === 'dataAutorizacaoAno'
						? dataAutorizacao.slice(4, 8)
						: String(formValues[field.id as keyof GuiaSadtForm] ?? '')

		return { ...field, value }
	})

	return (
		<main className="flex h-screen flex-col overflow-hidden">
			<header className="flex h-14 shrink-0 items-center justify-between border-b bg-background px-4">
				<div className="flex items-center gap-2">
					<h1 className="text-sm font-semibold">Guia SADT</h1>
				</div>

				<div className="flex items-center gap-2">
					<ModeToggle />
					<Button
						variant={debugEnabled ? 'secondary' : 'outline'}
						type="button"
						aria-pressed={debugEnabled}
						onClick={() => setDebugEnabled((enabled) => !enabled)}
					>
						Debug: {debugEnabled ? 'ativo' : 'inativo'}
					</Button>
					<Button type="button" variant="outline" onClick={() => reset()}>
						Limpar
					</Button>
					<Button type="button">Salvar PDF</Button>
					<Button type="button">Imprimir</Button>
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

						<form
							id="guia-sadt-form"
							className="space-y-4"
							onSubmit={(event) => event.preventDefault()}
						>
							<div className="space-y-1">
								<Label htmlFor="registroANS">1. Registro ANS</Label>

								<Input
									id="registroANS"
									name="registroANS"
									inputMode="numeric"
									maxLength={6}
									placeholder="000000"
									value={registroANS}
									aria-describedby={
										registroANSErro ? 'registroANS-error' : undefined
									}
									aria-invalid={registroANSErro}
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
									<p
										id="registroANS-error"
										className="text-xs font-medium text-red-500"
									>
										{errors.registroANS?.message}
									</p>
								)}
							</div>

							<div className="space-y-1">
								<Label htmlFor="numeroGuiaPrincipal">
									3. Número da guia principal
								</Label>

								<Input
									id="numeroGuiaPrincipal"
									name="numeroGuiaPrincipal"
									inputMode="numeric"
									maxLength={20}
									placeholder="00000000000000000000"
									value={numeroGuiaPrincipal}
									aria-describedby={
										numeroGuiaPrincipalErro
											? 'numeroGuiaPrincipal-error'
											: undefined
									}
									aria-invalid={numeroGuiaPrincipalErro}
									onChange={(event) => {
										const value = event.target.value
											.replace(/\D/g, '')
											.slice(0, 20)

										setValue('numeroGuiaPrincipal', value, {
											shouldValidate: true,
											shouldDirty: true,
											shouldTouch: true,
										})
									}}
									className={
										numeroGuiaPrincipalErro
											? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500'
											: numeroGuiaPrincipalValido
												? 'border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500'
												: ''
									}
								/>

								{numeroGuiaPrincipalErro && (
									<p
										id="numeroGuiaPrincipal-error"
										className="text-xs font-medium text-red-500"
									>
										{errors.numeroGuiaPrincipal?.message}
									</p>
								)}
							</div>

							<div className="space-y-1">
								<Label htmlFor="dataAutorizacao">4. Data da Autorização</Label>

								<Input
									id="dataAutorizacao"
									name="dataAutorizacao"
									inputMode="numeric"
									maxLength={8}
									placeholder="DDMMAAAA"
									value={dataAutorizacao}
									aria-describedby={
										dataAutorizacaoErro ? 'dataAutorizacao-error' : undefined
									}
									aria-invalid={dataAutorizacaoErro}
									onChange={(event) => {
										const value = event.target.value
											.replace(/\D/g, '')
											.slice(0, 8)

										setValue('dataAutorizacao', value, {
											shouldValidate: true,
											shouldDirty: true,
											shouldTouch: true,
										})
									}}
									className={
										dataAutorizacaoErro
											? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500'
											: dataAutorizacaoValida
												? 'border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500'
												: ''
									}
								/>

								{dataAutorizacaoErro && (
									<p
										id="dataAutorizacao-error"
										className="text-xs font-medium text-red-500"
									>
										{errors.dataAutorizacao?.message}
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
							containerType: 'size',
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

						{fieldsWithValues.map((field) => (
							<SadtField
								key={field.id}
								field={field}
								imageWidth={IMAGE_WIDTH}
								imageHeight={IMAGE_HEIGHT}
								debug={debugEnabled}
							/>
						))}
					</div>
				</section>
			</section>
		</main>
	)
}

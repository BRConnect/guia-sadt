'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
	AlertCircle,
	ChevronDown,
	Dices,
	FileDown,
	Layers3,
	LoaderCircle,
	Printer,
	RotateCcw,
	Search,
	SlidersHorizontal,
	X,
} from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { createRandomGuiaSadtValues } from '@/components/guia-sadt/development-samples'
import {
	type GuiaSadtForm,
	guiaSadtFields,
	guiaSadtSchema,
} from '@/components/guia-sadt/fields'
import { GuiaSadtFieldInput } from '@/components/guia-sadt/guia-sadt-field-input'
import { ModeToggle } from '@/components/mode-toggle'
import { SadtField } from '@/components/sadt-field'
import { Button } from '@/components/ui/button'

const IMAGE_WIDTH = 1683
const IMAGE_HEIGHT = 1190

type FieldStatus = 'all' | 'empty' | 'filled' | 'errors'
type PrintAction = 'pdf' | 'print' | null

type FieldGroup = {
	id: string
	label: string
	description: string
	start: number
	end: number
}

const FIELD_GROUPS: FieldGroup[] = [
	{
		id: 'identificacao',
		label: 'Identificação da guia',
		description: 'Registro, autorização e senhas',
		start: 1,
		end: 7,
	},
	{
		id: 'beneficiario',
		label: 'Dados do beneficiário',
		description: 'Carteira, nome e cartão SUS',
		start: 8,
		end: 12,
	},
	{
		id: 'solicitante',
		label: 'Dados do solicitante',
		description: 'Operadora e profissional solicitante',
		start: 13,
		end: 20,
	},
	{
		id: 'solicitacao',
		label: 'Solicitação e procedimentos',
		description: 'Indicação clínica e quantidades solicitadas',
		start: 21,
		end: 28,
	},
	{
		id: 'executante',
		label: 'Contratado executante',
		description: 'Código, nome e CNES',
		start: 29,
		end: 31,
	},
	{
		id: 'atendimento',
		label: 'Dados do atendimento',
		description: 'Tipo, acidente e encerramento',
		start: 32,
		end: 35,
	},
	{
		id: 'realizados',
		label: 'Procedimentos realizados',
		description: 'Datas, códigos, valores e totais por linha',
		start: 36,
		end: 47,
	},
	{
		id: 'profissionais',
		label: 'Profissionais executantes',
		description: 'Participação, conselho e assinaturas',
		start: 48,
		end: 57,
	},
	{
		id: 'totais',
		label: 'Observações e totais',
		description: 'Justificativas e valores consolidados',
		start: 58,
		end: 65,
	},
	{
		id: 'assinaturas',
		label: 'Assinaturas finais',
		description: 'Responsáveis pela autorização e execução',
		start: 66,
		end: 68,
	},
]

const defaultValues: GuiaSadtForm = {
	registroANS: '',
	numeroGuiaPrincipal: '',
	dataAutorizacao: '',
	senha: '',
	dataValidadeSenha: '',
	numeroGuiaOperadora: '',
	numeroCarteira: '',
	validadeCarteira: '',
	nome: '',
	cartaoSUS: '',
	atendimentoRN: '',
	codigoOperadora: '',
	nomeContratado: '',
	nomeProfissionalSolicitante: '',
	conselhoProfissional: '',
	numeroConselho: '',
	uf: '',
	codigoCBO: '',
	assinaturaProfissionalSolicitante: '',
	caraterAtendimento: '',
	dataSolicitacao: '',
	indicacaoClinica: '',
	tabela: '',
	codigoProcedimento: '',
	descricao: '',
	quantidadeSolicitada: '',
	quantidadeAutorizada: '',
	codigoOperadoraExecutante: '',
	nomeContratadoExecutante: '',
	codigoCNES: '',
	tipoAtendimento: '',
	indicacaoAcidente: '',
	tipoConsulta: '',
	motivoEncerramentoAtendimento: '',
	dataExecucao: '',
	horaInicial: '',
	horaFinal: '',
	tabelaExecutada: '',
	codigoProcedimentoExecutado: '',
	descricaoProcedimento: '',
	quantidadeExecutada: '',
	viaAcesso: '',
	tecnica: '',
	fatorReducaoAcrescimo: '',
	valorUnitario: '',
	valorTotal: '',
	grauParticipacao: '',
	sequencialReferencia: '',
	codigoOperadoraCPF: '',
	nomeProfissional: '',
	conselhoProfissionalExecutante: '',
	numeroConselhoExecutante: '',
	ufExecutante: '',
	codigoCBOExecutante: '',
	dataRealizacaoProcedimentos: '',
	assinaturaBeneficiarioResponsavel: '',
	observacaoJustificativa: '',
	totalProcedimentos: '',
	totalTaxasAlugueis: '',
	totalMateriais: '',
	totalOPME: '',
	totalMedicamentos: '',
	totalGasesMedicinais: '',
	totalGeral: '',
	assinaturaResponsavelAutorizacao: '',
	assinaturaBeneficiarioResponsavelFinal: '',
	assinaturaContratado: '',
}

function getFieldNumber(label: string) {
	return Number(label.match(/^\d+/)?.[0] ?? 0)
}

function getFieldGroup(fieldNumber: number) {
	return (
		FIELD_GROUPS.find(
			(group) => fieldNumber >= group.start && fieldNumber <= group.end,
		) ?? FIELD_GROUPS[0]
	)
}

export default function Home() {
	const [debugEnabled, setDebugEnabled] = useState(false)
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedGroup, setSelectedGroup] = useState('all')
	const [statusFilter, setStatusFilter] = useState<FieldStatus>('all')
	const [pendingAction, setPendingAction] = useState<PrintAction>(null)
	const [actionFeedback, setActionFeedback] = useState('')
	const {
		control,
		watch,
		reset,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<GuiaSadtForm>({
		resolver: zodResolver(guiaSadtSchema),
		mode: 'onChange',
		criteriaMode: 'firstError',
		shouldFocusError: true,
		defaultValues,
	})

	const formValues = watch()
	const filledCount = guiaSadtFields.filter(
		(field) => (formValues[field.name] ?? '').trim() !== '',
	).length
	const errorCount = Object.keys(errors).length

	const filteredFields = useMemo(() => {
		const normalizedSearch = searchTerm.trim().toLocaleLowerCase('pt-BR')

		return guiaSadtFields.filter((field) => {
			const fieldNumber = getFieldNumber(field.label)
			const group = getFieldGroup(fieldNumber)
			const value = formValues[field.name] ?? ''
			const isFilled = value.trim() !== ''
			const hasError = Boolean(errors[field.name])
			const matchesSearch =
				!normalizedSearch ||
				[field.label, field.name, field.placeholder].some((text) =>
					text.toLocaleLowerCase('pt-BR').includes(normalizedSearch),
				)
			const matchesGroup = selectedGroup === 'all' || group.id === selectedGroup
			const matchesStatus =
				statusFilter === 'all' ||
				(statusFilter === 'filled' && isFilled) ||
				(statusFilter === 'empty' && !isFilled) ||
				(statusFilter === 'errors' && hasError)

			return matchesSearch && matchesGroup && matchesStatus
		})
	}, [errors, formValues, searchTerm, selectedGroup, statusFilter])

	const fieldsWithValues = guiaSadtFields.flatMap((field) => {
		const fieldValue = formValues[field.name] ?? ''

		return field.overlayFields.map((overlayField) => ({
			...overlayField,
			value: field.getOverlayValue(overlayField.id, fieldValue),
		}))
	})

	const handleFillRandom = () => {
		const randomValues = createRandomGuiaSadtValues(guiaSadtFields)
		reset(randomValues)
		for (const field of guiaSadtFields) {
			setValue(field.name, randomValues[field.name], {
				shouldDirty: true,
				shouldValidate: true,
			})
		}
		setActionFeedback('Ficha preenchida com dados válidos de teste.')
		window.setTimeout(() => setActionFeedback(''), 2600)
	}

	const handleClear = () => {
		reset(defaultValues)
		setActionFeedback('Formulário limpo com sucesso.')
		window.setTimeout(() => setActionFeedback(''), 2200)
	}

	const handlePrint = (action: Exclude<PrintAction, null>) => {
		setPendingAction(action)
		window.setTimeout(() => {
			window.print()
			setPendingAction(null)
		}, 120)
	}

	const handleValidSubmit = () => {
		setActionFeedback(
			'Validação concluída: os dados preenchidos estão corretos.',
		)
		window.setTimeout(() => setActionFeedback(''), 2600)
	}

	const handleInvalidSubmit = () => {
		setActionFeedback('Revise os campos destacados antes de continuar.')
		window.setTimeout(() => setActionFeedback(''), 2600)
	}

	return (
		<div className="flex h-screen flex-col overflow-hidden bg-background print:block print:h-auto">
			<a
				href="#conteudo-principal"
				className="sr-only z-50 rounded-md bg-background px-3 py-2 text-sm font-medium focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus-visible:ring-2 focus-visible:ring-ring"
			>
				Ir para o conteúdo principal
			</a>
			<header className="flex h-16 shrink-0 items-center justify-between border-b bg-background/95 px-4 shadow-sm backdrop-blur print:hidden md:px-6">
				<div className="flex min-w-0 items-center gap-3">
					<div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
						<Layers3 className="size-4" aria-hidden="true" />
					</div>
					<div className="min-w-0">
						<h1 className="truncate text-sm font-semibold tracking-tight">
							Guia SADT
						</h1>
						<p className="hidden text-[11px] text-muted-foreground sm:block">
							Preenchimento digital da ficha SP/SADT
						</p>
					</div>
				</div>

				<nav
					aria-label="Ações da ficha"
					className="flex items-center gap-1.5 md:gap-2"
				>
					<ModeToggle />
					{process.env.NODE_ENV !== 'production' && (
						<Button
							variant={debugEnabled ? 'secondary' : 'outline'}
							type="button"
							aria-pressed={debugEnabled}
							onClick={() => setDebugEnabled((enabled) => !enabled)}
							className="hidden transition-transform duration-150 hover:-translate-y-px active:scale-[0.97] sm:inline-flex"
						>
							Debug: {debugEnabled ? 'ativo' : 'inativo'}
						</Button>
					)}
					{process.env.NODE_ENV !== 'production' && (
						<Button
							variant="outline"
							type="button"
							onClick={handleFillRandom}
							className="group transition-transform duration-150 hover:-translate-y-px active:scale-[0.97]"
							aria-label="Preencher a ficha com dados aleatórios válidos"
						>
							<Dices
								className="transition-transform duration-200 group-hover:rotate-12"
								aria-hidden="true"
							/>
							<span className="hidden md:inline">Preencher teste</span>
						</Button>
					)}

					<Button
						variant="outline"
						type="button"
						onClick={handleClear}
						className="group transition-transform duration-150 hover:-translate-y-px active:scale-[0.97]"
						aria-label="Limpar todos os campos"
					>
						<RotateCcw
							className="transition-transform duration-200 group-hover:rotate-[-35deg]"
							aria-hidden="true"
						/>
						<span className="hidden md:inline">Limpar</span>
					</Button>
					<Button
						type="button"
						onClick={() => handlePrint('pdf')}
						disabled={pendingAction !== null}
						className="group bg-primary shadow-sm transition-transform duration-150 hover:-translate-y-px hover:bg-primary/90 active:scale-[0.97]"
						aria-label="Salvar como PDF"
					>
						{pendingAction === 'pdf' ? (
							<LoaderCircle
								className="motion-safe:animate-spin"
								aria-hidden="true"
							/>
						) : (
							<FileDown
								className="transition-transform duration-200 group-hover:-translate-y-0.5"
								aria-hidden="true"
							/>
						)}
						<span className="hidden md:inline">
							{pendingAction === 'pdf' ? 'Preparando...' : 'Salvar PDF'}
						</span>
					</Button>
					<Button
						variant="outline"
						type="button"
						onClick={() => handlePrint('print')}
						disabled={pendingAction !== null}
						className="group transition-transform duration-150 hover:-translate-y-px active:scale-[0.97]"
						aria-label="Imprimir ficha"
					>
						{pendingAction === 'print' ? (
							<LoaderCircle
								className="motion-safe:animate-spin"
								aria-hidden="true"
							/>
						) : (
							<Printer
								className="transition-transform duration-200 group-hover:scale-110"
								aria-hidden="true"
							/>
						)}
						<span className="hidden md:inline">
							{pendingAction === 'print' ? 'Preparando...' : 'Imprimir'}
						</span>
					</Button>
				</nav>
			</header>

			<main
				id="conteudo-principal"
				className="flex min-h-0 flex-1 print:block print:min-h-0"
			>
				<section
					className="flex min-h-0 flex-1 flex-col print:block print:min-h-0 md:flex-row"
					aria-label="Editor da ficha SADT"
				>
					<aside className="flex h-[60vh] w-full shrink-0 flex-col border-r bg-background print:hidden md:h-auto md:w-[23rem]">
						<div className="border-b px-4 pb-3 pt-4 md:px-5">
							<div className="mb-3 flex items-start justify-between gap-3">
								<div>
									<h2 className="text-sm font-semibold">Dados da guia</h2>
									<p className="mt-0.5 text-xs text-muted-foreground">
										{filledCount} de {guiaSadtFields.length} campos preenchidos
									</p>
								</div>
								<div className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">
									{Math.round((filledCount / guiaSadtFields.length) * 100)}%
								</div>
							</div>
							<div
								className="h-1.5 overflow-hidden rounded-full bg-muted"
								role="progressbar"
								aria-label="Progresso do formulário"
								aria-valuemin={0}
								aria-valuemax={guiaSadtFields.length}
								aria-valuenow={filledCount}
							>
								<div
									className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
									style={{
										width: `${(filledCount / guiaSadtFields.length) * 100}%`,
									}}
								/>
							</div>
						</div>

						<div className="space-y-2 border-b px-4 py-3 md:px-5">
							<div className="relative">
								<Search
									className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
									aria-hidden="true"
								/>
								<input
									value={searchTerm}
									onChange={(event) => setSearchTerm(event.target.value)}
									placeholder="Pesquisar campo..."
									aria-label="Pesquisar campos da guia"
									className="h-8 w-full rounded-md border bg-background pl-8 pr-8 text-xs outline-none transition-shadow placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
								/>
								{searchTerm && (
									<button
										type="button"
										aria-label="Limpar pesquisa"
										onClick={() => setSearchTerm('')}
										className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
									>
										<X className="size-3.5" aria-hidden="true" />
									</button>
								)}
							</div>
							<div className="grid grid-cols-2 gap-2">
								<label className="relative">
									<span className="sr-only">Filtrar por grupo</span>
									<Layers3
										className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
										aria-hidden="true"
									/>
									<select
										value={selectedGroup}
										onChange={(event) => setSelectedGroup(event.target.value)}
										aria-label="Filtrar por grupo"
										className="h-8 w-full appearance-none rounded-md border bg-background pl-8 pr-6 text-[11px] outline-none transition-shadow focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
									>
										<option value="all">Todos os grupos</option>
										{FIELD_GROUPS.map((group) => (
											<option key={group.id} value={group.id}>
												{group.label}
											</option>
										))}
									</select>
									<ChevronDown
										className="pointer-events-none absolute right-2 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
										aria-hidden="true"
									/>
								</label>
								<label className="relative">
									<span className="sr-only">Filtrar por status</span>
									<SlidersHorizontal
										className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
										aria-hidden="true"
									/>
									<select
										value={statusFilter}
										onChange={(event) =>
											setStatusFilter(event.target.value as FieldStatus)
										}
										aria-label="Filtrar por status"
										className="h-8 w-full appearance-none rounded-md border bg-background pl-8 pr-6 text-[11px] outline-none transition-shadow focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
									>
										<option value="all">Todos os status</option>
										<option value="empty">Não preenchidos</option>
										<option value="filled">Preenchidos</option>
										<option value="errors">Com erro</option>
									</select>
									<ChevronDown
										className="pointer-events-none absolute right-2 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
										aria-hidden="true"
									/>
								</label>
							</div>
							<div className="flex items-center justify-between text-[10px] text-muted-foreground">
								<span>{filteredFields.length} campo(s) visível(is)</span>
								{errorCount > 0 && (
									<span className="inline-flex items-center gap-1 text-red-600 dark:text-red-400">
										<AlertCircle className="size-3" aria-hidden="true" />
										{errorCount} com erro
									</span>
								)}
							</div>
						</div>

						<div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 md:px-5">
							<form
								id="guia-sadt-form"
								className="space-y-5"
								onSubmit={handleSubmit(handleValidSubmit, handleInvalidSubmit)}
							>
								{FIELD_GROUPS.map((group) => {
									const groupFields = filteredFields.filter((field) => {
										const fieldNumber = getFieldNumber(field.label)
										return (
											fieldNumber >= group.start && fieldNumber <= group.end
										)
									})

									if (groupFields.length === 0) return null

									return (
										<section key={group.id} className="space-y-3">
											<div className="flex items-center justify-between gap-2 border-b pb-2">
												<div className="min-w-0">
													<h3 className="truncate text-xs font-semibold text-foreground">
														{group.label}
													</h3>
													<p className="truncate text-[10px] text-muted-foreground">
														{group.description}
													</p>
												</div>
												<span className="shrink-0 rounded-full bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
													{groupFields.length}
												</span>
											</div>
											<div className="space-y-3">
												{groupFields.map((field) => (
													<Controller
														key={field.name}
														control={control}
														name={field.name}
														render={({
															field: controllerField,
															fieldState,
														}) => (
															<GuiaSadtFieldInput
																field={field}
																value={controllerField.value ?? ''}
																error={fieldState.error?.message}
																onChange={(value) =>
																	controllerField.onChange(value)
																}
																onBlur={controllerField.onBlur}
																inputRef={controllerField.ref}
															/>
														)}
													/>
												))}
											</div>
										</section>
									)
								})}
								{filteredFields.length === 0 && (
									<div className="rounded-xl border border-dashed p-5 text-center">
										<Search
											className="mx-auto mb-2 size-5 text-muted-foreground"
											aria-hidden="true"
										/>
										<p className="text-xs font-medium">
											Nenhum campo encontrado
										</p>
										<p className="mt-1 text-[11px] text-muted-foreground">
											Ajuste a pesquisa ou os filtros para continuar.
										</p>
									</div>
								)}
							</form>
						</div>
					</aside>

					<article
						className="min-w-0 flex-1 overflow-auto bg-zinc-100 p-4 print:overflow-visible print:bg-white print:p-0 md:p-6"
						aria-labelledby="visualizacao-ficha-titulo"
					>
						<h2 id="visualizacao-ficha-titulo" className="sr-only">
							Visualização da ficha SADT
						</h2>
						<figure className="m-0">
							<div
								className="relative mx-auto w-full max-w-[1683px] print:max-w-none"
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
									className="absolute inset-0 block h-full w-full rounded-sm shadow-md print:rounded-none print:shadow-none"
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
							<figcaption className="sr-only">
								Ficha de Serviço Profissional e Serviço Auxiliar de Diagnóstico
								e Terapia (SP/SADT).
							</figcaption>
						</figure>
					</article>
				</section>
			</main>

			<footer className="sr-only">
				<p>Guia SADT: preenchimento digital de ficha SP/SADT.</p>
			</footer>

			<div className="sr-only" aria-live="polite">
				{actionFeedback}
			</div>
		</div>
	)
}

import type { ZodString } from 'zod'

import type { SadtFieldConfig, SadtFieldType } from '@/components/sadt-field'

export type GuiaSadtForm = {
	registroANS: string
	numeroGuiaPrincipal: string
	dataAutorizacao: string
	senha: string
	dataValidadeSenha: string
	numeroGuiaOperadora: string
	numeroCarteira: string
	validadeCarteira: string
	nome: string
	cartaoSUS: string
	atendimentoRN: string
	codigoOperadora: string
	nomeContratado: string
	nomeProfissionalSolicitante: string
	conselhoProfissional: string
	numeroConselho: string
	uf: string
	codigoCBO: string
	assinaturaProfissionalSolicitante: string
	caraterAtendimento: string
	dataSolicitacao: string
	indicacaoClinica: string
	tabela: string
	codigoProcedimento: string
	descricao: string
	quantidadeSolicitada: string
	quantidadeAutorizada: string
	codigoOperadoraExecutante: string
	nomeContratadoExecutante: string
	codigoCNES: string
	tipoAtendimento: string
	indicacaoAcidente: string
	tipoConsulta: string
	motivoEncerramentoAtendimento: string
	dataExecucao: string
	horaInicial: string
	horaFinal: string
	tabelaExecutada: string
	codigoProcedimentoExecutado: string
	descricaoProcedimento: string
	quantidadeExecutada: string
	viaAcesso: string
	tecnica: string
	fatorReducaoAcrescimo: string
	valorUnitario: string
	valorTotal: string
	grauParticipacao: string
	sequencialReferencia: string
	codigoOperadoraCPF: string
	nomeProfissional: string
	conselhoProfissionalExecutante: string
	numeroConselhoExecutante: string
	ufExecutante: string
	codigoCBOExecutante: string
	dataRealizacaoProcedimentos: string
	assinaturaBeneficiarioResponsavel: string
	observacaoJustificativa: string
	totalProcedimentos: string
	totalTaxasAlugueis: string
	totalMateriais: string
	totalOPME: string
	totalMedicamentos: string
	totalGasesMedicinais: string
	totalGeral: string
	assinaturaResponsavelAutorizacao: string
	assinaturaBeneficiarioResponsavelFinal: string
	assinaturaContratado: string
}

export type GuiaSadtFieldName = keyof GuiaSadtForm

export interface GuiaSadtFieldDefinition {
	name: GuiaSadtFieldName
	label: string
	placeholder: string
	maxLength: number
	rows?: number
	lineMaxLength?: number
	inputType?: SadtFieldType
	normalizeValue?: (value: string) => string
	schema: ZodString
	overlayFields: SadtFieldConfig[]
	getOverlayValue: (overlayId: string, value: string) => string
}

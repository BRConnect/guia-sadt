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
}

export type GuiaSadtFieldName = keyof GuiaSadtForm

export interface GuiaSadtFieldDefinition {
	name: GuiaSadtFieldName
	label: string
	placeholder: string
	maxLength: number
	inputType?: SadtFieldType
	normalizeValue?: (value: string) => string
	schema: ZodString
	overlayFields: SadtFieldConfig[]
	getOverlayValue: (overlayId: string, value: string) => string
}

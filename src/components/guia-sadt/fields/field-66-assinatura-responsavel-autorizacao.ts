import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const assinaturaResponsavelAutorizacaoField: GuiaSadtFieldDefinition = {
	name: 'assinaturaResponsavelAutorizacao',
	label: '66. Assinatura do Responsável pela Autorização',
	placeholder: 'Nome para assinatura',
	maxLength: 74,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 74),
	schema: z
		.string()
		.trim()
		.max(74, 'O campo 66 deve conter no máximo 74 caracteres.'),
	overlayFields: [
		{
			id: 'assinaturaResponsavelAutorizacao',
			x: 58,
			y: 1142,
			width: 520,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
	],
	getOverlayValue: (_overlayId, value) => {
		return value
	},
}

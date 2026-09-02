import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const assinaturaContratadoField: GuiaSadtFieldDefinition = {
	name: 'assinaturaContratado',
	label: '68. Assinatura do Contratado',
	placeholder: 'Nome para assinatura',
	maxLength: 74,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 74),
	schema: z
		.string()
		.trim()
		.max(74, 'O campo 68 deve conter no máximo 74 caracteres.'),
	overlayFields: [
		{
			id: 'assinaturaContratado',
			x: 1125,
			y: 1142,
			width: 505,
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

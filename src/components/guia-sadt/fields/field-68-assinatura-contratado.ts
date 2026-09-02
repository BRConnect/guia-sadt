import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const assinaturaContratadoField: GuiaSadtFieldDefinition = {
	name: 'assinaturaContratado',
	label: '68. Assinatura do Contratado',
	placeholder: 'Nome para assinatura',
	maxLength: 67,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 67),
	schema: z
		.string()
		.trim()
		.max(67, 'O campo 68 deve conter no máximo 67 caracteres.'),
	overlayFields: [
		{
			id: 'assinaturaContratado',
			x: 1125,
			y: 1105,
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

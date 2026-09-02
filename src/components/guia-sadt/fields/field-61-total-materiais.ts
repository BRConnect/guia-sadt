import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const totalMateriaisField: GuiaSadtFieldDefinition = {
	name: 'totalMateriais',
	label: '61. Total de Materiais (R$)',
	placeholder: '000000000',
	maxLength: 10,
	schema: z
		.string()
		.trim()
		.max(10, 'O campo 61 deve conter no máximo 10 caracteres.'),
	overlayFields: [
		{
			id: 'totalMateriais',
			x: 505,
			y: 1100,
			width: 208,
			height: 21,
			length: 10,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
	],
	getOverlayValue: (_overlayId, value) => {
		return value
	},
}

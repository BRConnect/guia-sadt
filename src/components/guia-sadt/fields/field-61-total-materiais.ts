import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const totalMateriaisField: GuiaSadtFieldDefinition = {
	name: 'totalMateriais',
	label: '61. Total de Materiais (R$)',
	placeholder: '000000000',
	maxLength: 9,
	schema: z
		.string()
		.trim()
		.max(9, 'O campo 61 deve conter no máximo 9 caracteres.'),
	overlayFields: [
		{
			id: 'totalMateriais',
			x: 517,
			y: 1058,
			width: 215,
			height: 21,
			length: 9,
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

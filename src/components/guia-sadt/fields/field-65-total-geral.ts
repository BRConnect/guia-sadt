import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const totalGeralField: GuiaSadtFieldDefinition = {
	name: 'totalGeral',
	label: '65. Total Geral (R$)',
	placeholder: '000000000',
	maxLength: 10,
	schema: z
		.string()
		.trim()
		.max(10, 'O campo 65 deve conter no máximo 10 caracteres.'),
	overlayFields: [
		{
			id: 'totalGeral',
			x: 1416,
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

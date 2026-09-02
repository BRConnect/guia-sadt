import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const totalGasesMedicinaisField: GuiaSadtFieldDefinition = {
	name: 'totalGasesMedicinais',
	label: '64. Total de Gases Medicinais (R$)',
	placeholder: '000000000',
	maxLength: 10,
	schema: z
		.string()
		.trim()
		.max(10, 'O campo 64 deve conter no máximo 10 caracteres.'),
	overlayFields: [
		{
			id: 'totalGasesMedicinais',
			x: 1188,
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

import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const totalGeralField: GuiaSadtFieldDefinition = {
	name: 'totalGeral',
	label: '65. Total Geral (R$)',
	placeholder: '000000000',
	maxLength: 9,
	schema: z
		.string()
		.trim()
		.max(9, 'O campo 65 deve conter no máximo 9 caracteres.'),
	overlayFields: [
		{
			id: 'totalGeral',
			x: 1445,
			y: 1058,
			width: 185,
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

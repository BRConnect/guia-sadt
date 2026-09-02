import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const totalTaxasAlugueisField: GuiaSadtFieldDefinition = {
	name: 'totalTaxasAlugueis',
	label: '60. Total de Taxas e Aluguéis (R$)',
	placeholder: '000000000',
	maxLength: 9,
	schema: z
		.string()
		.trim()
		.max(9, 'O campo 60 deve conter no máximo 9 caracteres.'),
	overlayFields: [
		{
			id: 'totalTaxasAlugueis',
			x: 285,
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

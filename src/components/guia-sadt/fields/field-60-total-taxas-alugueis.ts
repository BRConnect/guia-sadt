import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const totalTaxasAlugueisField: GuiaSadtFieldDefinition = {
	name: 'totalTaxasAlugueis',
	label: '60. Total de Taxas e Aluguéis (R$)',
	placeholder: '000000000',
	maxLength: 10,
	schema: z
		.string()
		.trim()
		.max(10, 'O campo 60 deve conter no máximo 10 caracteres.'),
	overlayFields: [
		{
			id: 'totalTaxasAlugueis',
			x: 278,
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

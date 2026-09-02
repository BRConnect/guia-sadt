import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const totalProcedimentosField: GuiaSadtFieldDefinition = {
	name: 'totalProcedimentos',
	label: '59. Total de Procedimentos (R$)',
	placeholder: '000000000',
	maxLength: 9,
	schema: z
		.string()
		.trim()
		.max(9, 'O campo 59 deve conter no máximo 9 caracteres.'),
	overlayFields: [
		{
			id: 'totalProcedimentos',
			x: 53,
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

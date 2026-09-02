import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const totalProcedimentosField: GuiaSadtFieldDefinition = {
	name: 'totalProcedimentos',
	label: '59. Total de Procedimentos (R$)',
	placeholder: '000000000',
	maxLength: 10,
	schema: z
		.string()
		.trim()
		.max(10, 'O campo 59 deve conter no máximo 10 caracteres.'),
	overlayFields: [
		{
			id: 'totalProcedimentos',
			x: 51,
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

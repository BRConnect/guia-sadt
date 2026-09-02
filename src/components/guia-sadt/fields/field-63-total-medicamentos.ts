import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const totalMedicamentosField: GuiaSadtFieldDefinition = {
	name: 'totalMedicamentos',
	label: '63. Total de Medicamentos (R$)',
	placeholder: '000000000',
	maxLength: 10,
	schema: z
		.string()
		.trim()
		.max(10, 'O campo 63 deve conter no máximo 10 caracteres.'),
	overlayFields: [
		{
			id: 'totalMedicamentos',
			x: 960,
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

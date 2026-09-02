import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const totalMedicamentosField: GuiaSadtFieldDefinition = {
	name: 'totalMedicamentos',
	label: '63. Total de Medicamentos (R$)',
	placeholder: '000000000',
	maxLength: 9,
	schema: z
		.string()
		.trim()
		.max(9, 'O campo 63 deve conter no máximo 9 caracteres.'),
	overlayFields: [
		{
			id: 'totalMedicamentos',
			x: 981,
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

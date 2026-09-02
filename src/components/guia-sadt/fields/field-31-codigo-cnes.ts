import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const codigoCNESField: GuiaSadtFieldDefinition = {
	name: 'codigoCNES',
	label: '31. Código CNES',
	placeholder: '0000000',
	maxLength: 7,
	schema: z
		.string()
		.trim()
		.max(7, 'O campo 31 deve conter no máximo 7 caracteres.'),
	overlayFields: [
		{
			id: 'codigoCNES',
			x: 1488,
			y: 598,
			width: 140,
			height: 21,
			length: 7,
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

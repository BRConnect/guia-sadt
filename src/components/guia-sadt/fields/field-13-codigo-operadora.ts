import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const codigoOperadoraField: GuiaSadtFieldDefinition = {
	name: 'codigoOperadora',
	label: '13. Código na Operadora',
	placeholder: '00000000000000',
	maxLength: 14,
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{14}$/.test(value),
			'O Código na Operadora deve conter exatamente 14 dígitos.',
		),
	overlayFields: [
		{
			id: 'codigoOperadora',
			x: 53,
			y: 290,
			width: 280,
			height: 21,
			length: 14,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
	],
	getOverlayValue: (_overlayId, value) => value,
}

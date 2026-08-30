import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const codigoCBOField: GuiaSadtFieldDefinition = {
	name: 'codigoCBO',
	label: '19. Código CBO',
	placeholder: '000000',
	maxLength: 6,
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{6}$/.test(value),
			'O Código CBO deve conter exatamente 6 dígitos.',
		),
	overlayFields: [
		{
			id: 'codigoCBO',
			x: 1028,
			y: 343,
			width: 120,
			height: 21,
			length: 6,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
	],
	getOverlayValue: (_overlayId, value) => value,
}

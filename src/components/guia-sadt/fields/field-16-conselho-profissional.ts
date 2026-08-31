import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const conselhoProfissionalField: GuiaSadtFieldDefinition = {
	name: 'conselhoProfissional',
	label: '16. Conselho Profissional',
	placeholder: '00',
	maxLength: 2,
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{2}$/.test(value),
			'O Conselho Profissional deve conter exatamente 2 dígitos.',
		),
	overlayFields: [
		{
			id: 'conselhoProfissional',
			x: 564,
			y: 336,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
	],
	getOverlayValue: (_overlayId, value) => value,
}

import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const numeroConselhoField: GuiaSadtFieldDefinition = {
	name: 'numeroConselho',
	label: '17. Número no Conselho',
	placeholder: '000000000000000',
	maxLength: 15,
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{15}$/.test(value),
			'O Número no Conselho deve conter exatamente 15 dígitos.',
		),
	overlayFields: [
		{
			id: 'numeroConselho',
			x: 640,
			y: 343,
			width: 300,
			height: 21,
			length: 15,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
	],
	getOverlayValue: (_overlayId, value) => value,
}

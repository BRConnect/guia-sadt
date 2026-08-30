import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const ufField: GuiaSadtFieldDefinition = {
	name: 'uf',
	label: '18. UF',
	placeholder: 'UF',
	maxLength: 2,
	inputType: 'text',
	normalizeValue: (value) =>
		value
			.toUpperCase()
			.replace(/[^A-Z]/g, '')
			.slice(0, 2),
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^[A-Za-z]{2}$/.test(value),
			'A UF deve conter exatamente 2 letras.',
		),
	overlayFields: [
		{
			id: 'uf',
			x: 964,
			y: 343,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'text',
		},
	],
	getOverlayValue: (_overlayId, value) => value.toUpperCase(),
}

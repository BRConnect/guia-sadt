import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const ufExecutanteField: GuiaSadtFieldDefinition = {
	name: 'ufExecutante',
	label: '54. UF',
	placeholder: 'UF',
	maxLength: 14,
	rows: 4,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 2),
	schema: z
		.string()
		.trim()
		.max(14, 'O campo 54 deve conter no máximo 14 caracteres.'),
	overlayFields: [
		{
			id: 'ufExecutante-1',
			x: 1454,
			y: 883,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'ufExecutante-2',
			x: 1454,
			y: 903,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'ufExecutante-3',
			x: 1454,
			y: 924,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'ufExecutante-4',
			x: 1454,
			y: 943,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
	],
	getOverlayValue: (overlayId, value) => {
		const index = Number(overlayId.split('-').pop()) - 1
		return value.split('|')[index] ?? ''
	},
}

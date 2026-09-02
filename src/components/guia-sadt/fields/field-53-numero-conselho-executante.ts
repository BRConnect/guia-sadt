import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const numeroConselhoExecutanteField: GuiaSadtFieldDefinition = {
	name: 'numeroConselhoExecutante',
	label: '53. Número no Conselho',
	placeholder: '000000000000000',
	maxLength: 79,
	rows: 4,
	schema: z
		.string()
		.trim()
		.max(79, 'O campo 53 deve conter no máximo 79 caracteres.'),
	overlayFields: [
		{
			id: 'numeroConselhoExecutante-1',
			x: 1145,
			y: 883,
			width: 300,
			height: 21,
			length: 15,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'numeroConselhoExecutante-2',
			x: 1145,
			y: 903,
			width: 300,
			height: 21,
			length: 15,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'numeroConselhoExecutante-3',
			x: 1145,
			y: 924,
			width: 300,
			height: 21,
			length: 15,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'numeroConselhoExecutante-4',
			x: 1145,
			y: 943,
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
	getOverlayValue: (overlayId, value) => {
		const index = Number(overlayId.split('-').pop()) - 1
		return value.split('|')[index] ?? ''
	},
}

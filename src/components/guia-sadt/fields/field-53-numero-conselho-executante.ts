import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const numeroConselhoExecutanteField: GuiaSadtFieldDefinition = {
	name: 'numeroConselhoExecutante',
	label: '53. Número no Conselho',
	placeholder: '000000000000000',
	maxLength: 79,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(79, 'O campo 53 deve conter no máximo 79 caracteres.'),
	overlayFields: [
		{
			id: 'numeroConselhoExecutante-1',
			x: 1125,
			y: 803,
			width: 250,
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
			x: 1125,
			y: 824,
			width: 250,
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
			x: 1125,
			y: 845,
			width: 250,
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
			x: 1125,
			y: 866,
			width: 250,
			height: 21,
			length: 15,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'numeroConselhoExecutante-5',
			x: 1125,
			y: 887,
			width: 250,
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

import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const valorTotalField: GuiaSadtFieldDefinition = {
	name: 'valorTotal',
	label: '47. Valor Total (R$)',
	placeholder: '000000000',
	maxLength: 49,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(49, 'O campo 47 deve conter no máximo 49 caracteres.'),
	overlayFields: [
		{
			id: 'valorTotal-1',
			x: 1456,
			y: 725,
			width: 170,
			height: 21,
			length: 8,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'valorTotal-2',
			x: 1456,
			y: 746,
			width: 170,
			height: 21,
			length: 8,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'valorTotal-3',
			x: 1456,
			y: 766,
			width: 170,
			height: 21,
			length: 8,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'valorTotal-4',
			x: 1456,
			y: 788,
			width: 170,
			height: 21,
			length: 8,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'valorTotal-5',
			x: 1456,
			y: 808,
			width: 170,
			height: 21,
			length: 8,
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

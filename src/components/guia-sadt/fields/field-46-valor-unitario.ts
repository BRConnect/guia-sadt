import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const valorUnitarioField: GuiaSadtFieldDefinition = {
	name: 'valorUnitario',
	label: '46. Valor Unitário (R$)',
	placeholder: '000000000',
	maxLength: 49,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(49, 'O campo 46 deve conter no máximo 49 caracteres.'),
	overlayFields: [
		{
			id: 'valorUnitario-1',
			x: 1280,
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
			id: 'valorUnitario-2',
			x: 1280,
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
			id: 'valorUnitario-3',
			x: 1280,
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
			id: 'valorUnitario-4',
			x: 1280,
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
			id: 'valorUnitario-5',
			x: 1280,
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

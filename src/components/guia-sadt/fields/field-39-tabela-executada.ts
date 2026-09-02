import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const tabelaExecutadaField: GuiaSadtFieldDefinition = {
	name: 'tabelaExecutada',
	label: '39. Tabela',
	placeholder: '00',
	maxLength: 14,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(14, 'O campo 39 deve conter no máximo 14 caracteres.'),
	overlayFields: [
		{
			id: 'tabelaExecutada-1',
			x: 460,
			y: 725,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'tabelaExecutada-2',
			x: 460,
			y: 746,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'tabelaExecutada-3',
			x: 460,
			y: 766,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'tabelaExecutada-4',
			x: 460,
			y: 788,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'tabelaExecutada-5',
			x: 460,
			y: 808,
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
	getOverlayValue: (overlayId, value) => {
		const index = Number(overlayId.split('-').pop()) - 1
		return value.split('|')[index] ?? ''
	},
}

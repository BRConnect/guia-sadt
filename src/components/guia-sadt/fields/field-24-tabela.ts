import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const tabelaField: GuiaSadtFieldDefinition = {
	name: 'tabela',
	label: '24. Tabela',
	placeholder: '00',
	maxLength: 14,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(14, 'O campo 24 deve conter no máximo 14 caracteres.'),
	overlayFields: [
		{
			id: 'tabela-1',
			x: 68,
			y: 452,
			width: 45,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'tabela-2',
			x: 68,
			y: 474,
			width: 45,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'tabela-3',
			x: 68,
			y: 494,
			width: 45,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'tabela-4',
			x: 68,
			y: 514,
			width: 45,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'tabela-5',
			x: 68,
			y: 535,
			width: 45,
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

import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const quantidadeAutorizadaField: GuiaSadtFieldDefinition = {
	name: 'quantidadeAutorizada',
	label: '28. Qtde. Aut.',
	placeholder: '000',
	maxLength: 19,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(19, 'O campo 28 deve conter no máximo 19 caracteres.'),
	overlayFields: [
		{
			id: 'quantidadeAutorizada-1',
			x: 1546,
			y: 452,
			width: 60,
			height: 21,
			length: 3,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'quantidadeAutorizada-2',
			x: 1546,
			y: 474,
			width: 60,
			height: 21,
			length: 3,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'quantidadeAutorizada-3',
			x: 1546,
			y: 494,
			width: 60,
			height: 21,
			length: 3,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'quantidadeAutorizada-4',
			x: 1546,
			y: 514,
			width: 60,
			height: 21,
			length: 3,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'quantidadeAutorizada-5',
			x: 1546,
			y: 535,
			width: 60,
			height: 21,
			length: 3,
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

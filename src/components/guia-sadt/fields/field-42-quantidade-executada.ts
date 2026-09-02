import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const quantidadeExecutadaField: GuiaSadtFieldDefinition = {
	name: 'quantidadeExecutada',
	label: '42. Qtde.',
	placeholder: '000',
	maxLength: 19,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(19, 'O campo 42 deve conter no máximo 19 caracteres.'),
	overlayFields: [
		{
			id: 'quantidadeExecutada-1',
			x: 1035,
			y: 663,
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
			id: 'quantidadeExecutada-2',
			x: 1035,
			y: 684,
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
			id: 'quantidadeExecutada-3',
			x: 1035,
			y: 705,
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
			id: 'quantidadeExecutada-4',
			x: 1035,
			y: 726,
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
			id: 'quantidadeExecutada-5',
			x: 1035,
			y: 747,
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

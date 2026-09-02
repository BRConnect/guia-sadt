import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const tecnicaField: GuiaSadtFieldDefinition = {
	name: 'tecnica',
	label: '44. Tec.',
	placeholder: '00',
	maxLength: 14,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(14, 'O campo 44 deve conter no máximo 14 caracteres.'),
	overlayFields: [
		{
			id: 'tecnica-1',
			x: 1170,
			y: 663,
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
			id: 'tecnica-2',
			x: 1170,
			y: 684,
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
			id: 'tecnica-3',
			x: 1170,
			y: 705,
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
			id: 'tecnica-4',
			x: 1170,
			y: 726,
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
			id: 'tecnica-5',
			x: 1170,
			y: 747,
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

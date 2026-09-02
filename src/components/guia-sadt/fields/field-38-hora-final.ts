import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const horaFinalField: GuiaSadtFieldDefinition = {
	name: 'horaFinal',
	label: '38. Hora Final',
	placeholder: 'HHMM',
	maxLength: 24,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(24, 'O campo 38 deve conter no máximo 24 caracteres.'),
	overlayFields: [
		{
			id: 'horaFinal-1',
			x: 355,
			y: 663,
			width: 95,
			height: 21,
			length: 4,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'horaFinal-2',
			x: 355,
			y: 684,
			width: 95,
			height: 21,
			length: 4,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'horaFinal-3',
			x: 355,
			y: 705,
			width: 95,
			height: 21,
			length: 4,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'horaFinal-4',
			x: 355,
			y: 726,
			width: 95,
			height: 21,
			length: 4,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'horaFinal-5',
			x: 355,
			y: 747,
			width: 95,
			height: 21,
			length: 4,
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

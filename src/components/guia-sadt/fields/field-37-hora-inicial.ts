import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const horaInicialField: GuiaSadtFieldDefinition = {
	name: 'horaInicial',
	label: '37. Hora Inicial',
	placeholder: 'HHMM',
	maxLength: 24,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(24, 'O campo 37 deve conter no máximo 24 caracteres.'),
	overlayFields: [
		{
			id: 'horaInicial-1',
			x: 250,
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
			id: 'horaInicial-2',
			x: 250,
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
			id: 'horaInicial-3',
			x: 250,
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
			id: 'horaInicial-4',
			x: 250,
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
			id: 'horaInicial-5',
			x: 250,
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

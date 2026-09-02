import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const fatorReducaoAcrescimoField: GuiaSadtFieldDefinition = {
	name: 'fatorReducaoAcrescimo',
	label: '45. Fator Red./Acresc.',
	placeholder: '000',
	maxLength: 19,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(19, 'O campo 45 deve conter no máximo 19 caracteres.'),
	overlayFields: [
		{
			id: 'fatorReducaoAcrescimo-1',
			x: 1230,
			y: 663,
			width: 70,
			height: 21,
			length: 3,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'fatorReducaoAcrescimo-2',
			x: 1230,
			y: 684,
			width: 70,
			height: 21,
			length: 3,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'fatorReducaoAcrescimo-3',
			x: 1230,
			y: 705,
			width: 70,
			height: 21,
			length: 3,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'fatorReducaoAcrescimo-4',
			x: 1230,
			y: 726,
			width: 70,
			height: 21,
			length: 3,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'fatorReducaoAcrescimo-5',
			x: 1230,
			y: 747,
			width: 70,
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

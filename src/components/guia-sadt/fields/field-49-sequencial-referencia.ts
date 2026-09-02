import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const sequencialReferenciaField: GuiaSadtFieldDefinition = {
	name: 'sequencialReferencia',
	label: '49. Grau Part',
	placeholder: '00',
	maxLength: 14,
	rows: 4,
	schema: z
		.string()
		.trim()
		.max(14, 'O campo 49 deve conter no máximo 14 caracteres.'),
	overlayFields: [
		{
			id: 'sequencialReferencia-1',
			x: 123,
			y: 883,
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
			id: 'sequencialReferencia-2',
			x: 123,
			y: 903,
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
			id: 'sequencialReferencia-3',
			x: 123,
			y: 924,
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
			id: 'sequencialReferencia-4',
			x: 123,
			y: 943,
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

import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const sequencialReferenciaField: GuiaSadtFieldDefinition = {
	name: 'sequencialReferencia',
	label: '49. Grau Part',
	placeholder: '00',
	maxLength: 14,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(14, 'O campo 49 deve conter no máximo 14 caracteres.'),
	overlayFields: [
		{
			id: 'sequencialReferencia-1',
			x: 120,
			y: 803,
			width: 55,
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
			x: 120,
			y: 824,
			width: 55,
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
			x: 120,
			y: 845,
			width: 55,
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
			x: 120,
			y: 866,
			width: 55,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'sequencialReferencia-5',
			x: 120,
			y: 887,
			width: 55,
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

import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const codigoCBOExecutanteField: GuiaSadtFieldDefinition = {
	name: 'codigoCBOExecutante',
	label: '55. Código CBO',
	placeholder: '000000',
	maxLength: 34,
	rows: 4,
	schema: z
		.string()
		.trim()
		.max(34, 'O campo 55 deve conter no máximo 34 caracteres.'),
	overlayFields: [
		{
			id: 'codigoCBOExecutante-1',
			x: 1504,
			y: 883,
			width: 120,
			height: 21,
			length: 6,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoCBOExecutante-2',
			x: 1504,
			y: 903,
			width: 120,
			height: 21,
			length: 6,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoCBOExecutante-3',
			x: 1504,
			y: 924,
			width: 120,
			height: 21,
			length: 6,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoCBOExecutante-4',
			x: 1504,
			y: 943,
			width: 120,
			height: 21,
			length: 6,
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

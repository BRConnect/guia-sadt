import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const conselhoProfissionalExecutanteField: GuiaSadtFieldDefinition = {
	name: 'conselhoProfissionalExecutante',
	label: '52. Conselho Profissional',
	placeholder: '00',
	maxLength: 14,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(14, 'O campo 52 deve conter no máximo 14 caracteres.'),
	overlayFields: [
		{
			id: 'conselhoProfissionalExecutante-1',
			x: 1060,
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
			id: 'conselhoProfissionalExecutante-2',
			x: 1060,
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
			id: 'conselhoProfissionalExecutante-3',
			x: 1060,
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
			id: 'conselhoProfissionalExecutante-4',
			x: 1060,
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
			id: 'conselhoProfissionalExecutante-5',
			x: 1060,
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

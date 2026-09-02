import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const codigoProcedimentoExecutadoField: GuiaSadtFieldDefinition = {
	name: 'codigoProcedimentoExecutado',
	label: '40. Código do Procedimento',
	placeholder: '000000',
	maxLength: 34,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(34, 'O campo 40 deve conter no máximo 34 caracteres.'),
	overlayFields: [
		{
			id: 'codigoProcedimentoExecutado-1',
			x: 535,
			y: 663,
			width: 205,
			height: 21,
			length: 6,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoProcedimentoExecutado-2',
			x: 535,
			y: 684,
			width: 205,
			height: 21,
			length: 6,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoProcedimentoExecutado-3',
			x: 535,
			y: 705,
			width: 205,
			height: 21,
			length: 6,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoProcedimentoExecutado-4',
			x: 535,
			y: 726,
			width: 205,
			height: 21,
			length: 6,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoProcedimentoExecutado-5',
			x: 535,
			y: 747,
			width: 205,
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

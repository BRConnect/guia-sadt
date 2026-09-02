import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const codigoProcedimentoExecutadoField: GuiaSadtFieldDefinition = {
	name: 'codigoProcedimentoExecutado',
	label: '40. Código do Procedimento',
	placeholder: '000000',
	maxLength: 54,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(54, 'O campo 40 deve conter no máximo 54 caracteres.'),
	overlayFields: [
		{
			id: 'codigoProcedimentoExecutado-1',
			x: 520,
			y: 725,
			width: 200,
			height: 21,
			length: 10,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoProcedimentoExecutado-2',
			x: 520,
			y: 746,
			width: 200,
			height: 21,
			length: 10,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoProcedimentoExecutado-3',
			x: 520,
			y: 766,
			width: 200,
			height: 21,
			length: 10,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoProcedimentoExecutado-4',
			x: 520,
			y: 788,
			width: 200,
			height: 21,
			length: 10,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoProcedimentoExecutado-5',
			x: 520,
			y: 808,
			width: 200,
			height: 21,
			length: 10,
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

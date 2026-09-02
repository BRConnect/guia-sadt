import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const codigoProcedimentoField: GuiaSadtFieldDefinition = {
	name: 'codigoProcedimento',
	label: '25. Código do Procedimento',
	placeholder: '000000',
	maxLength: 54,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(54, 'O campo 25 deve conter no máximo 54 caracteres.'),
	overlayFields: [
		{
			id: 'codigoProcedimento-1',
			x: 121,
			y: 452,
			width: 200,
			height: 21,
			length: 10,
			gap: 0,
			fontSize: 14,
			fontWeight: 540,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoProcedimento-2',
			x: 121,
			y: 474,
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
			id: 'codigoProcedimento-3',
			x: 121,
			y: 494,
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
			id: 'codigoProcedimento-4',
			x: 121,
			y: 514,
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
			id: 'codigoProcedimento-5',
			x: 121,
			y: 535,
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

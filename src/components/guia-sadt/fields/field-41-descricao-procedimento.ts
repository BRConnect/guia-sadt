import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const descricaoProcedimentoField: GuiaSadtFieldDefinition = {
	name: 'descricaoProcedimento',
	label: '41. Descrição',
	placeholder: 'Descrição do procedimento',
	maxLength: 354,
	rows: 5,
	lineMaxLength: 70,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 70),
	schema: z
		.string()
		.trim()
		.max(354, 'O campo 41 deve conter no máximo 354 caracteres.'),
	overlayFields: [
		{
			id: 'descricaoProcedimento-1',
			x: 745,
			y: 663,
			width: 275,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'descricaoProcedimento-2',
			x: 745,
			y: 684,
			width: 275,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'descricaoProcedimento-3',
			x: 745,
			y: 705,
			width: 275,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'descricaoProcedimento-4',
			x: 745,
			y: 726,
			width: 275,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'descricaoProcedimento-5',
			x: 745,
			y: 747,
			width: 275,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
	],
	getOverlayValue: (overlayId, value) => {
		const index = Number(overlayId.split('-').pop()) - 1
		return value.split('|')[index] ?? ''
	},
}

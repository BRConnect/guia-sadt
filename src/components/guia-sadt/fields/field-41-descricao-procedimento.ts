import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const descricaoProcedimentoField: GuiaSadtFieldDefinition = {
	name: 'descricaoProcedimento',
	label: '41. Descrição',
	placeholder: 'Descrição do procedimento',
	maxLength: 170,
	rows: 5,
	lineMaxLength: 34,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 34),
	schema: z
		.string()
		.trim()
		.max(354, 'O campo 41 deve conter no máximo 354 caracteres.'),
	overlayFields: [
		{
			id: 'descricaoProcedimento-1',
			x: 733,
			y: 725,
			width: 275,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'descricaoProcedimento-2',
			x: 733,
			y: 746,
			width: 275,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'descricaoProcedimento-3',
			x: 733,
			y: 766,
			width: 275,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'descricaoProcedimento-4',
			x: 733,
			y: 788,
			width: 275,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'descricaoProcedimento-5',
			x: 733,
			y: 808,
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

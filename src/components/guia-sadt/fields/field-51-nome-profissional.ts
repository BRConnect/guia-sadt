import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const nomeProfissionalField: GuiaSadtFieldDefinition = {
	name: 'nomeProfissional',
	label: '51. Nome do Profissional',
	placeholder: 'Nome do profissional',
	maxLength: 354,
	rows: 5,
	lineMaxLength: 70,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 70),
	schema: z
		.string()
		.trim()
		.max(354, 'O campo 51 deve conter no máximo 354 caracteres.'),
	overlayFields: [
		{
			id: 'nomeProfissional-1',
			x: 490,
			y: 803,
			width: 555,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'nomeProfissional-2',
			x: 490,
			y: 824,
			width: 555,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'nomeProfissional-3',
			x: 490,
			y: 845,
			width: 555,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'nomeProfissional-4',
			x: 490,
			y: 866,
			width: 555,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'nomeProfissional-5',
			x: 490,
			y: 887,
			width: 555,
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

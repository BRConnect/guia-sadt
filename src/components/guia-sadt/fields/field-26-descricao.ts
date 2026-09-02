import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const descricaoField: GuiaSadtFieldDefinition = {
	name: 'descricao',
	label: '26. Descrição',
	placeholder: 'Descrição do procedimento',
	maxLength: 704,
	rows: 5,
	lineMaxLength: 140,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 140),
	schema: z
		.string()
		.trim()
		.max(704, 'O campo 26 deve conter no máximo 704 caracteres.'),
	overlayFields: [
		{
			id: 'descricao-1',
			x: 335,
			y: 452,
			width: 1095,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'descricao-2',
			x: 335,
			y: 474,
			width: 1095,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'descricao-3',
			x: 335,
			y: 494,
			width: 1095,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'descricao-4',
			x: 335,
			y: 514,
			width: 1095,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
		{
			id: 'descricao-5',
			x: 335,
			y: 535,
			width: 1095,
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

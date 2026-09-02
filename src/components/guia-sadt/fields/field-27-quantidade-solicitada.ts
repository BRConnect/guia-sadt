import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const quantidadeSolicitadaField: GuiaSadtFieldDefinition = {
	name: 'quantidadeSolicitada',
	label: '27. Qtde. Solic.',
	placeholder: '000',
	maxLength: 19,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(19, 'O campo 27 deve conter no máximo 19 caracteres.'),
	overlayFields: [
		{
			id: 'quantidadeSolicitada-1',
			x: 1444,
			y: 452,
			width: 60,
			height: 21,
			length: 3,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'quantidadeSolicitada-2',
			x: 1444,
			y: 474,
			width: 60,
			height: 21,
			length: 3,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'quantidadeSolicitada-3',
			x: 1444,
			y: 494,
			width: 60,
			height: 21,
			length: 3,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'quantidadeSolicitada-4',
			x: 1444,
			y: 514,
			width: 60,
			height: 21,
			length: 3,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'quantidadeSolicitada-5',
			x: 1444,
			y: 535,
			width: 60,
			height: 21,
			length: 3,
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

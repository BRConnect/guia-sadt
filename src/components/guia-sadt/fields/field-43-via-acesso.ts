import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const viaAcessoField: GuiaSadtFieldDefinition = {
	name: 'viaAcesso',
	label: '43. Via',
	placeholder: '00',
	maxLength: 14,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(14, 'O campo 43 deve conter no máximo 14 caracteres.'),
	overlayFields: [
		{
			id: 'viaAcesso-1',
			x: 1072,
			y: 725,
			width: 45,
			height: 21,
			length: 1,
			gap: 28,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'viaAcesso-2',
			x: 1072,
			y: 746,
			width: 45,
			height: 21,
			length: 1,
			gap: 28,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'viaAcesso-3',
			x: 1072,
			y: 766,
			width: 45,
			height: 21,
			length: 1,
			gap: 28,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'viaAcesso-4',
			x: 1072,
			y: 788,
			width: 45,
			height: 21,
			length: 1,
			gap: 28,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'viaAcesso-5',
			x: 1072,
			y: 808,
			width: 45,
			height: 21,
			length: 1,
			gap: 28,
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

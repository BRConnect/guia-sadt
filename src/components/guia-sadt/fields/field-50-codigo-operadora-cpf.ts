import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const codigoOperadoraCPFField: GuiaSadtFieldDefinition = {
	name: 'codigoOperadoraCPF',
	label: '50. Código na Operadora/CPF',
	placeholder: '00000000000000000000',
	maxLength: 104,
	rows: 4,
	schema: z
		.string()
		.trim()
		.max(104, 'O campo 50 deve conter no máximo 104 caracteres.'),
	overlayFields: [
		{
			id: 'codigoOperadoraCPF-1',
			x: 184,
			y: 883,
			width: 280,
			height: 21,
			length: 14,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoOperadoraCPF-2',
			x: 184,
			y: 903,
			width: 280,
			height: 21,
			length: 14,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoOperadoraCPF-3',
			x: 184,
			y: 924,
			width: 280,
			height: 21,
			length: 14,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'codigoOperadoraCPF-4',
			x: 184,
			y: 943,
			width: 280,
			height: 21,
			length: 14,
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

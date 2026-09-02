import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const grauParticipacaoField: GuiaSadtFieldDefinition = {
	name: 'grauParticipacao',
	label: '48. Seq.Ref.',
	placeholder: '00',
	maxLength: 14,
	rows: 5,
	schema: z
		.string()
		.trim()
		.max(14, 'O campo 48 deve conter no máximo 14 caracteres.'),
	overlayFields: [
		{
			id: 'grauParticipacao-1',
			x: 50,
			y: 803,
			width: 46,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'grauParticipacao-2',
			x: 50,
			y: 824,
			width: 46,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'grauParticipacao-3',
			x: 50,
			y: 845,
			width: 46,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'grauParticipacao-4',
			x: 50,
			y: 866,
			width: 46,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'grauParticipacao-5',
			x: 50,
			y: 943,
			width: 46,
			height: 21,
			length: 2,
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

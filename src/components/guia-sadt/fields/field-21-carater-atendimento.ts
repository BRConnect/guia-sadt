import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const caraterAtendimentoField: GuiaSadtFieldDefinition = {
	name: 'caraterAtendimento',
	label: '21. Caráter do Atendimento',
	placeholder: 'Eletivo/Urgência',
	maxLength: 1,
	schema: z
		.string()
		.trim()
		.max(1, 'O campo 21 deve conter no máximo 1 caracteres.'),
	overlayFields: [
		{
			id: 'caraterAtendimento',
			x: 64,
			y: 410,
			width: 65,
			height: 21,
			length: 1,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
	],
	getOverlayValue: (_overlayId, value) => {
		return value
	},
}

import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const tipoAtendimentoField: GuiaSadtFieldDefinition = {
	name: 'tipoAtendimento',
	label: '32. Tipo de Atendimento',
	placeholder: '00',
	maxLength: 2,
	schema: z
		.string()
		.trim()
		.max(2, 'O campo 32 deve conter no máximo 2 caracteres.'),
	overlayFields: [
		{
			id: 'tipoAtendimento',
			x: 100,
			y: 660,
			width: 44,
			height: 21,
			length: 2,
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

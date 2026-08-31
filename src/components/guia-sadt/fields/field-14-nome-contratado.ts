import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const nomeContratadoField: GuiaSadtFieldDefinition = {
	name: 'nomeContratado',
	label: '14. Nome do Contratado',
	placeholder: 'Nome do contratado',
	maxLength: 188,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 188),
	schema: z
		.string()
		.trim()
		.max(188, 'O Nome do Contratado deve conter no máximo 188 caracteres.'),
	overlayFields: [
		{
			id: 'nomeContratado',
			x: 358,
			y: 286,
			width: 1270,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
	],
	getOverlayValue: (_overlayId, value) => value,
}

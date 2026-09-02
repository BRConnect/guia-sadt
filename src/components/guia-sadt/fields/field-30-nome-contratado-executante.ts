import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const nomeContratadoExecutanteField: GuiaSadtFieldDefinition = {
	name: 'nomeContratadoExecutante',
	label: '30. Nome do Contratado',
	placeholder: 'Nome do contratado executante',
	maxLength: 164,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 164),
	schema: z
		.string()
		.trim()
		.max(164, 'O campo 30 deve conter no máximo 164 caracteres.'),
	overlayFields: [
		{
			id: 'nomeContratadoExecutante',
			x: 358,
			y: 598,
			width: 1100,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
	],
	getOverlayValue: (_overlayId, value) => {
		return value
	},
}

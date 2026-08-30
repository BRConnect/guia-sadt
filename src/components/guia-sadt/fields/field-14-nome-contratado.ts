import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const nomeContratadoField: GuiaSadtFieldDefinition = {
	name: 'nomeContratado',
	label: '14. Nome do Contratado',
	placeholder: 'Nome do contratado',
	maxLength: 150,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 150),
	schema: z
		.string()
		.trim()
		.max(150, 'O Nome do Contratado deve conter no máximo 150 caracteres.'),
	overlayFields: [
		{
			id: 'nomeContratado',
			x: 478,
			y: 290,
			width: 1151,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
	],
	getOverlayValue: (_overlayId, value) => value,
}

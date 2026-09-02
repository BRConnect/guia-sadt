import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const nomeField: GuiaSadtFieldDefinition = {
	name: 'nome',
	label: '10. Nome',
	placeholder: 'Nome completo',
	maxLength: 62,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 62),
	schema: z
		.string()
		.trim()
		.max(62, 'O Nome deve conter no máximo 62 caracteres.'),
	overlayFields: [
		{
			id: 'nome',
			x: 676,
			y: 221,
			width: 481,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
	],
	getOverlayValue: (_overlayId, value) => value,
}

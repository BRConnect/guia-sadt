import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const observacaoJustificativaField: GuiaSadtFieldDefinition = {
	name: 'observacaoJustificativa',
	label: '58. Observação / Justificativa',
	placeholder: 'Observação ou justificativa',
	maxLength: 234,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 234),
	schema: z
		.string()
		.trim()
		.max(234, 'O campo 58 deve conter no máximo 234 caracteres.'),
	overlayFields: [
		{
			id: 'observacaoJustificativa',
			x: 53,
			y: 1045,
			width: 1575,
			height: 40,
			fontSize: 12,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
	],
	getOverlayValue: (_overlayId, value) => {
		return value
	},
}

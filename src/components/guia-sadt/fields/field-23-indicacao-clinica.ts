import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const indicacaoClinicaField: GuiaSadtFieldDefinition = {
	name: 'indicacaoClinica',
	label: '23. Indicação Clínica',
	placeholder: 'Indicação clínica',
	maxLength: 188,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 188),
	schema: z
		.string()
		.trim()
		.max(188, 'O campo 23 deve conter no máximo 188 caracteres.'),
	overlayFields: [
		{
			id: 'indicacaoClinica',
			x: 354,
			y: 410,
			width: 1265,
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

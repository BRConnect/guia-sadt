import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const tipoConsultaField: GuiaSadtFieldDefinition = {
	name: 'tipoConsulta',
	label: '34. Tipo de Consulta',
	placeholder: '00',
	maxLength: 2,
	schema: z
		.string()
		.trim()
		.max(2, 'O campo 34 deve conter no máximo 2 caracteres.'),
	overlayFields: [
		{
			id: 'tipoConsulta',
			x: 586,
			y: 660,
			width: 65,
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

import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const codigoOperadoraExecutanteField: GuiaSadtFieldDefinition = {
	name: 'codigoOperadoraExecutante',
	label: '29. Código na Operadora',
	placeholder: '00000000000000',
	maxLength: 14,
	schema: z
		.string()
		.trim()
		.max(14, 'O campo 29 deve conter no máximo 14 caracteres.'),
	overlayFields: [
		{
			id: 'codigoOperadoraExecutante',
			x: 53,
			y: 598,
			width: 280,
			height: 21,
			length: 14,
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

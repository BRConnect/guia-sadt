import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const indicacaoAcidenteField: GuiaSadtFieldDefinition = {
	name: 'indicacaoAcidente',
	label: '33. Indicação de Acidente',
	placeholder: 'S/N',
	maxLength: 1,
	schema: z
		.string()
		.trim()
		.max(1, 'O campo 33 deve conter no máximo 1 caracteres.'),
	overlayFields: [
		{
			id: 'indicacaoAcidente',
			x: 334,
			y: 660,
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

import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const assinaturaProfissionalField: GuiaSadtFieldDefinition = {
	name: 'assinaturaProfissionalSolicitante',
	label: '20. Assinatura do Profissional Solicitante',
	placeholder: 'Nome para assinatura',
	maxLength: 67,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 67),
	schema: z
		.string()
		.trim()
		.max(67, 'A Assinatura deve conter no máximo 67 caracteres.'),
	overlayFields: [
		{
			id: 'assinaturaProfissionalSolicitante',
			x: 1173,
			y: 336,
			width: 457,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
	],
	getOverlayValue: (_overlayId, value) => value,
}

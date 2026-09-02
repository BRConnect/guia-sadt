import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const nomeProfissionalSolicitanteField: GuiaSadtFieldDefinition = {
	name: 'nomeProfissionalSolicitante',
	label: '15. Nome do Profissional Solicitante',
	placeholder: 'Nome do profissional solicitante',
	maxLength: 59,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 59),
	schema: z
		.string()
		.trim()
		.max(
			59,
			'O Nome do Profissional Solicitante deve conter no máximo 59 caracteres.',
		),
	overlayFields: [
		{
			id: 'nomeProfissionalSolicitante',
			x: 55,
			y: 336,
			width: 465,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
	],
	getOverlayValue: (_overlayId, value) => value,
}

import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const motivoEncerramentoAtendimentoField: GuiaSadtFieldDefinition = {
	name: 'motivoEncerramentoAtendimento',
	label: '35. Motivo de Encerramento do Atendimento',
	placeholder: '00',
	maxLength: 2,
	schema: z
		.string()
		.trim()
		.max(2, 'O campo 35 deve conter no máximo 2 caracteres.'),
	overlayFields: [
		{
			id: 'motivoEncerramentoAtendimento',
			x: 776,
			y: 660,
			width: 42,
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

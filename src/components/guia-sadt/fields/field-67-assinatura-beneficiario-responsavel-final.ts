import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const assinaturaBeneficiarioResponsavelFinalField: GuiaSadtFieldDefinition =
	{
		name: 'assinaturaBeneficiarioResponsavelFinal',
		label: '67. Assinatura do Beneficiário ou Responsável',
		placeholder: 'Nome para assinatura',
		maxLength: 67,
		inputType: 'text',
		normalizeValue: (value) => value.slice(0, 67),
		schema: z
			.string()
			.trim()
			.max(67, 'O campo 67 deve conter no máximo 67 caracteres.'),
		overlayFields: [
			{
				id: 'assinaturaBeneficiarioResponsavelFinal',
				x: 590,
				y: 1105,
				width: 520,
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

import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const assinaturaBeneficiarioResponsavelFinalField: GuiaSadtFieldDefinition =
	{
		name: 'assinaturaBeneficiarioResponsavelFinal',
		label: '67. Assinatura do Beneficiário ou Responsável',
		placeholder: 'Nome para assinatura',
		maxLength: 74,
		inputType: 'text',
		normalizeValue: (value) => value.slice(0, 74),
		schema: z
			.string()
			.trim()
			.max(74, 'O campo 74 deve conter no máximo 74 caracteres.'),
		overlayFields: [
			{
				id: 'assinaturaBeneficiarioResponsavelFinal',
				x: 590,
				y: 1142,
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

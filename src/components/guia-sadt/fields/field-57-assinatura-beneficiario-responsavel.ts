import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

const SIGNATURE_COLUMN_X = [260, 580, 900, 1220, 1540]
const ROW_Y = [923, 944]

export const assinaturaBeneficiarioResponsavelField: GuiaSadtFieldDefinition = {
	name: 'assinaturaBeneficiarioResponsavel',
	label: '57. Assinatura do Beneficiário ou Responsável',
	placeholder: 'Nome para assinatura',
	maxLength: 67,
	rows: 10,
	lineMaxLength: 67,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 679),
	schema: z
		.string()
		.trim()
		.max(679, 'O campo 57 deve conter no máximo 679 caracteres.'),
	overlayFields: SIGNATURE_COLUMN_X.flatMap((x, columnIndex) =>
		ROW_Y.map((y, rowIndex) => ({
			id: `assinaturaBeneficiarioResponsavel-${columnIndex * 2 + rowIndex + 1}`,
			x,
			y,
			width: columnIndex === 4 ? 115 : 300,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left' as const,
			type: 'text' as const,
		})),
	),
	getOverlayValue: (overlayId, value) => {
		const index = Number(overlayId.split('-').pop()) - 1
		return value.split('|')[index] ?? ''
	},
}

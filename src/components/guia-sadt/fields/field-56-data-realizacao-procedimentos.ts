import { createDateSchema } from './date-schema'
import type { GuiaSadtFieldDefinition } from './types'

const DATA_COLUMN_X = [64, 380, 697, 1013, 1329]
const ROW_Y = [988, 1008]

export const dataRealizacaoProcedimentosField: GuiaSadtFieldDefinition = {
	name: 'dataRealizacaoProcedimentos',
	label: '56. Data de Realização de Procedimentos em Série',
	placeholder: 'DDMMAAAA',
	maxLength: 8,
	rows: 10,
	lineMaxLength: 8,
	schema: createDateSchema(
		'A Data de Realização de Procedimentos em Série',
		true,
	),
	overlayFields: DATA_COLUMN_X.flatMap((x, columnIndex) =>
		ROW_Y.map((y, rowIndex) => ({
			id: `dataRealizacaoProcedimentos-${columnIndex * 2 + rowIndex + 1}`,
			x,
			y,
			width: 180,
			height: 21,
			length: 8,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center' as const,
			type: 'number' as const,
		})),
	),
	getOverlayValue: (overlayId, value) => {
		const index = Number(overlayId.split('-').pop()) - 1
		return value.split('|')[index] ?? ''
	},
}

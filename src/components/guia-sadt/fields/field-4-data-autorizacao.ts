import { createDateSchema } from './date-schema'
import type { GuiaSadtFieldDefinition } from './types'

export const dataAutorizacaoField: GuiaSadtFieldDefinition = {
	name: 'dataAutorizacao',
	label: '4. Data da Autorização',
	placeholder: 'DDMMAAAA',
	maxLength: 8,
	schema: createDateSchema('A Data da Autorização'),
	overlayFields: [
		{
			id: 'dataAutorizacaoDia',
			x: 53,
			y: 158,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'dataAutorizacaoMes',
			x: 99,
			y: 158,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'dataAutorizacaoAno',
			x: 145,
			y: 158,
			width: 80,
			height: 21,
			length: 4,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
	],
	getOverlayValue: (overlayId, value) => {
		if (overlayId.endsWith('Dia')) return value.slice(0, 2)
		if (overlayId.endsWith('Mes')) return value.slice(2, 4)
		return value.slice(4, 8)
	},
}

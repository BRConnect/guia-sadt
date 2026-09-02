import { createDateSchema } from './date-schema'
import type { GuiaSadtFieldDefinition } from './types'

export const dataValidadeSenhaField: GuiaSadtFieldDefinition = {
	name: 'dataValidadeSenha',
	label: '6. Data de Validade da Senha',
	placeholder: 'DDMMAAAA',
	maxLength: 8,
	schema: createDateSchema('A Data de Validade da Senha'),
	overlayFields: [
		{
			id: 'dataValidadeSenhaDia',
			x: 671,
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
			id: 'dataValidadeSenhaMes',
			x: 718,
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
			id: 'dataValidadeSenhaAno',
			x: 764,
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

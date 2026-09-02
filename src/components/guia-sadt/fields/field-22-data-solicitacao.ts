import { createDateSchema } from './date-schema'
import type { GuiaSadtFieldDefinition } from './types'

export const dataSolicitacaoField: GuiaSadtFieldDefinition = {
	name: 'dataSolicitacao',
	label: '22. Data da Solicitação',
	placeholder: 'DDMMAAAA',
	maxLength: 8,
	schema: createDateSchema('A Data da Solicitação'),
	overlayFields: [
		{
			id: 'dataSolicitacao',
			x: 155,
			y: 410,
			width: 177,
			height: 21,
			length: 8,
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

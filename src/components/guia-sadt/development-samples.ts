import type { GuiaSadtFieldDefinition, GuiaSadtForm } from './fields/types'

const TEXT_SAMPLES = [
	'Exame de rotina',
	'Paciente em acompanhamento clínico',
	'Procedimento realizado conforme solicitação',
	'Clínica Demonstrativa',
	'Dr. Ana Martins',
]

function randomDigits(length: number) {
	return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('')
}

function randomText(index: number) {
	return TEXT_SAMPLES[index % TEXT_SAMPLES.length]
}

function valueForField(field: GuiaSadtFieldDefinition, fieldIndex: number) {
	const name = field.name
	const isDate =
		name.toLocaleLowerCase().includes('data') || name === 'validadeCarteira'
	const isHour = name === 'horaInicial' || name === 'horaFinal'
	const isUf = name === 'uf' || name === 'ufExecutante'
	const isYesNo = name === 'atendimentoRN' || name === 'indicacaoAcidente'
	const isText =
		field.inputType === 'text' ||
		name.includes('nome') ||
		name.includes('assinatura') ||
		name.includes('observacao') ||
		name.includes('descricao') ||
		name === 'indicacaoClinica'

	const lineValue = (lineIndex: number) => {
		if (isDate) return `${String((lineIndex % 28) + 1).padStart(2, '0')}012026`

		if (isHour) return lineIndex % 2 === 0 ? '0800' : '1000'
		if (isUf) return lineIndex % 2 === 0 ? 'SP' : 'RJ'
		if (isYesNo) return lineIndex % 2 === 0 ? 'S' : 'N'
		if (isText) return randomText(fieldIndex + lineIndex)
		const length =
			field.overlayFields[0]?.length ?? Math.min(field.maxLength, 6)
		return randomDigits(Math.max(1, Math.min(length, 20)))
	}

	if (field.rows) {
		return Array.from({ length: field.rows }, (_, index) =>
			lineValue(index),
		).join('|')
	}

	if (isDate) return '01012026'
	if (isHour) return name === 'horaInicial' ? '0800' : '1000'
	if (isUf) return 'SP'
	if (isYesNo) return name === 'atendimentoRN' ? 'N' : 'S'
	if (name === 'caraterAtendimento') return 'E'
	if (isText) return randomText(fieldIndex)

	const length = field.overlayFields[0]?.length ?? Math.min(field.maxLength, 6)
	return randomDigits(Math.max(1, Math.min(length, 20)))
}

export function createRandomGuiaSadtValues(
	fields: GuiaSadtFieldDefinition[],
): GuiaSadtForm {
	return Object.fromEntries(
		fields.map((field, index) => [field.name, valueForField(field, index)]),
	) as GuiaSadtForm
}

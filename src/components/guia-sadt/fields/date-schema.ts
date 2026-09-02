import { z } from 'zod'

export function createDateSchema(label: string, repeated = false) {
	return z
		.string()
		.trim()
		.refine((value) => {
			if (value === '') return true
			const dates = repeated ? value.split('|') : [value]
			return dates.every((date) => date === '' || /^\d{8}$/.test(date))
		}, `${label} deve conter 8 dígitos no formato DDMMAAAA.`)
}

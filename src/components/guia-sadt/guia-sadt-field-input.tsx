'use client'

import type { ChangeEvent, Ref } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import type { GuiaSadtFieldDefinition } from './fields'

interface GuiaSadtFieldInputProps {
	field: GuiaSadtFieldDefinition
	value: string
	error?: string
	onChange: (value: string) => void
	onBlur: () => void
	inputRef: Ref<HTMLInputElement>
}

export function GuiaSadtFieldInput({
	field,
	value,
	error,
	onChange,
	onBlur,
	inputRef,
}: GuiaSadtFieldInputProps) {
	const rowCount = field.rows ?? 1
	const values = value.split('|').slice(0, rowCount)
	const isFilled = values.some((rowValue) => rowValue.trim() !== '')
	const hasError = isFilled && Boolean(error)
	const isValid = isFilled && !error
	const lineMaxLength =
		field.lineMaxLength ?? field.overlayFields[0]?.length ?? field.maxLength

	const normalizeValue = (rawValue: string) => {
		const normalized = field.normalizeValue
			? field.normalizeValue(rawValue)
			: field.inputType === 'text'
				? rawValue
				: rawValue.replace(/\D/g, '')

		return normalized.slice(0, rowCount > 1 ? lineMaxLength : field.maxLength)
	}

	const handleChange = (
		index: number,
		event: ChangeEvent<HTMLInputElement>,
	) => {
		const nextValues = Array.from(
			{ length: rowCount },
			(_, rowIndex) => values[rowIndex] ?? '',
		)
		nextValues[index] = normalizeValue(event.target.value)
		onChange(nextValues.join('|'))
	}

	const inputClassName = hasError
		? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500'
		: isValid
			? 'border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500'
			: ''

	return (
		<div className="space-y-1">
			<Label htmlFor={`${field.name}-1`}>{field.label}</Label>

			{rowCount > 1 ? (
				<fieldset className="space-y-1.5">
					<legend className="sr-only">{field.label}, cinco linhas</legend>
					{Array.from({ length: rowCount }, (_, index) => (
						<div
							key={`${field.name}-${index + 1}`}
							className="flex items-center gap-2"
						>
							<span className="w-4 shrink-0 text-right text-[10px] font-medium text-muted-foreground">
								{index + 1}
							</span>
							<Input
								id={`${field.name}-${index + 1}`}
								name={`${field.name}-${index + 1}`}
								ref={index === 0 ? inputRef : undefined}
								type="text"
								inputMode={field.inputType === 'text' ? 'text' : 'numeric'}
								autoComplete="off"
								maxLength={lineMaxLength}
								placeholder={field.placeholder}
								value={values[index] ?? ''}
								aria-label={`${field.label}, linha ${index + 1}`}
								aria-describedby={hasError ? `${field.name}-error` : undefined}
								aria-errormessage={hasError ? `${field.name}-error` : undefined}
								aria-invalid={hasError}
								onChange={(event) => handleChange(index, event)}
								onBlur={onBlur}
								className={inputClassName}
							/>
						</div>
					))}
				</fieldset>
			) : (
				<Input
					id={field.name}
					name={field.name}
					ref={inputRef}
					type="text"
					inputMode={field.inputType === 'text' ? 'text' : 'numeric'}
					autoComplete={field.name === 'nome' ? 'name' : 'off'}
					maxLength={field.maxLength}
					placeholder={field.placeholder}
					value={value}
					aria-describedby={hasError ? `${field.name}-error` : undefined}
					aria-errormessage={hasError ? `${field.name}-error` : undefined}
					aria-invalid={hasError}
					onChange={(event) => handleChange(0, event)}
					onBlur={onBlur}
					className={inputClassName}
				/>
			)}

			{hasError && (
				<p
					id={`${field.name}-error`}
					className="text-xs font-medium text-red-500"
					role="alert"
				>
					{error}
				</p>
			)}
		</div>
	)
}

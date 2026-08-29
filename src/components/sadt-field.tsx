import type { CSSProperties } from 'react'

export type SadtFieldType = 'text' | 'number'

export interface SadtFieldConfig {
	id: string
	x: number
	y: number
	width: number
	height: number
	gap?: number
	length?: number
	fontSize?: number
	fontWeight?: CSSProperties['fontWeight']
	align?: CSSProperties['textAlign']
	type?: SadtFieldType
	value?: string
}

interface SadtFieldProps {
	field: SadtFieldConfig
	imageWidth: number
	imageHeight: number
	debug?: boolean
}

function toPercentage(value: number, total: number) {
	return `${(value / total) * 100}%`
}

function toJustifyContent(align: CSSProperties['textAlign']) {
	if (align === 'right' || align === 'end') return 'flex-end'
	if (align === 'center') return 'center'
	return 'flex-start'
}

export function SadtField({
	field,
	imageWidth,
	imageHeight,
	debug = false,
}: SadtFieldProps) {
	const hasCharacterGrid = Boolean(field.length && field.length > 0)
	const value = field.value ?? ''
	const characters = Array.from(value).slice(0, field.length)
	const align = field.align ?? 'center'
	const fontSize = field.fontSize ?? 14

	const style: CSSProperties = {
		position: 'absolute',
		left: toPercentage(field.x, imageWidth),
		top: toPercentage(field.y, imageHeight),
		width: toPercentage(field.width, imageWidth),
		height: toPercentage(field.height, imageHeight),
		display: hasCharacterGrid ? 'grid' : 'flex',
		alignItems: 'center',
		justifyContent: hasCharacterGrid ? undefined : toJustifyContent(align),
		gridTemplateColumns: hasCharacterGrid
			? `repeat(${field.length}, minmax(0, 1fr))`
			: undefined,
		columnGap: hasCharacterGrid
			? toPercentage(field.gap ?? 0, field.width)
			: undefined,
		fontFamily: 'Arial, sans-serif',
		fontSize: `${(fontSize / imageHeight) * 100}cqh`,
		fontWeight: field.fontWeight ?? 500,
		lineHeight: 1,
		textAlign: align,
		whiteSpace: 'nowrap',
		color: '#111827',
		boxSizing: 'border-box',
		border: debug ? '1px dashed #c026d3' : undefined,
		backgroundColor: debug ? 'rgb(217 70 239 / 0.08)' : undefined,
		pointerEvents: 'none',
		zIndex: 1,
	}

	return (
		<div
			aria-hidden="true"
			data-field-id={field.id}
			data-field-type={field.type ?? 'text'}
			style={style}
		>
			{hasCharacterGrid
				? Array.from({ length: field.length ?? 0 }, (_, position) => (
						<span
							key={`${field.id}-position-${position}`}
							className="flex min-w-0 items-center justify-center"
						>
							{characters[position] ?? ''}
						</span>
					))
				: value}

			{debug && (
				<span className="absolute -top-4 left-0 rounded-sm bg-fuchsia-700 px-1 py-0.5 font-mono text-[9px] leading-none font-medium text-white">
					{field.id} [{field.x},{field.y}] {field.width}x{field.height}
				</span>
			)}
		</div>
	)
}

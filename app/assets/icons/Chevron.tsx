import * as React from 'react'
import { SVGProps } from 'react'

interface SVGRProps {
	title?: string
	titleId?: string
}

const SvgChevron = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width='5'
		height='10'
		viewBox='0 0 5 10'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path d='M1 1L5 5L1 9' stroke='#E7816B' strokeWidth='2' />
	</svg>
)
export default SvgChevron

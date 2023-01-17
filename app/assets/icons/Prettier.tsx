import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
	title?: string
	titleId?: string
}
const SvgPrettier = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		viewBox='0 0 32 32'
		xmlns='http://www.w3.org/2000/svg'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M21.714 8.571h1.143a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571z'
			fill='#56b3b4'
		/>
		<path
			d='M4.571 26.857h5.714a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H4.571a.571.571 0 0 1-.571-.57.571.571 0 0 1 .571-.572z'
			fill='#ea5e5e'
		/>
		<path
			d='M18.286 17.714h3.429a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-3.429a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571z'
			fill='#bf85bf'
		/>
		<path
			d='M11.429 17.714H16a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-4.571a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571z'
			fill='#ea5e5e'
		/>
		<path
			d='M4.571 17.714h4.572a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H4.571a.571.571 0 0 1-.571-.57.571.571 0 0 1 .571-.572z'
			fill='#56b3b4'
		/>
		<path
			d='M4.571 22.286h5.714a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 22.857a.571.571 0 0 1 .571-.571zM4.571 13.143h5.714a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 13.714a.571.571 0 0 1 .571-.571z'
			fill='#bf85bf'
		/>
		<path
			d='M10.286 6.286h11.428a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H10.286a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571z'
			fill='#f7ba3e'
		/>
		<path
			d='M4.571 6.286H8a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.572H4.571A.571.571 0 0 1 4 6.857a.571.571 0 0 1 .571-.571z'
			fill='#ea5e5e'
		/>
		<path
			d='M9.143 24.571h1.143a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H9.143a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571z'
			fill='#f7ba3e'
		/>
		<path
			d='M9.143 10.857h1.143a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H9.143a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571zM4.571 24.571h2.286a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H4.571a.571.571 0 0 1-.571-.57.571.571 0 0 1 .571-.572z'
			fill='#56b3b4'
		/>
		<path
			d='M4.571 10.857h2.286a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.572H4.571A.571.571 0 0 1 4 11.429a.571.571 0 0 1 .571-.572z'
			fill='#f7ba3e'
		/>
		<path
			d='M19.429 24.571h1.143a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571zM12.571 24.571h4.571a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-4.571a.571.571 0 0 1-.571-.57.571.571 0 0 1 .571-.572zM22.857 24.571h4.571a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-4.571a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571z'
			fill='#d0d4d8'
			opacity={0.5}
		/>
		<path
			d='M13.714 15.429h9.143a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-9.143a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571z'
			fill='#56b3b4'
		/>
		<path
			d='M8 15.429h3.429A.571.571 0 0 1 12 16a.571.571 0 0 1-.571.571H8A.571.571 0 0 1 7.429 16 .571.571 0 0 1 8 15.429z'
			fill='#f7ba3e'
		/>
		<path
			d='M4.571 15.429h1.143a.571.571 0 0 1 .572.571.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 16a.571.571 0 0 1 .571-.571z'
			fill='#ea5e5e'
		/>
		<path
			d='M14.857 8.571h4.571a.571.571 0 0 1 .572.572.571.571 0 0 1-.571.571h-4.572a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.572z'
			fill='#bf85bf'
		/>
		<path
			d='M4.571 8.571h8a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-8A.571.571 0 0 1 4 9.143a.571.571 0 0 1 .571-.572z'
			fill='#56b3b4'
		/>
		<path
			d='M8 20h10.286a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H8a.571.571 0 0 1-.571-.571A.571.571 0 0 1 8 20z'
			fill='#f7ba3e'
		/>
		<path
			d='M4.571 20h1.143a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 20.571.571.571 0 0 1 4.571 20z'
			fill='#bf85bf'
		/>
		<path
			d='M18.286 10.857H24a.571.571 0 0 1 .571.571A.571.571 0 0 1 24 12h-5.714a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.572z'
			fill='#ea5e5e'
		/>
		<path
			d='M18.286 13.143H24a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-5.714a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571z'
			fill='#f7ba3e'
		/>
		<path
			d='M4.571 4h13.715a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H4.571A.571.571 0 0 1 4 4.571.571.571 0 0 1 4.571 4z'
			fill='#56b3b4'
		/>
		<g fill='#d0d4d8'>
			<path
				d='M20.571 4h6.857a.571.571 0 0 1 .572.571.571.571 0 0 1-.571.571h-6.858A.571.571 0 0 1 20 4.571.571.571 0 0 1 20.571 4zM20.571 20h2.286a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571zM25.143 20h2.286a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571zM24 17.714h3.429a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H24a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571zM24 6.286h3.429a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H24a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571zM25.143 15.429h2.286A.571.571 0 0 1 28 16a.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.572-.571.571.571 0 0 1 .572-.571zM25.143 8.571h2.286a.571.571 0 0 1 .571.572.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.572zM26.286 10.857h1.143a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571zM26.286 13.143h1.143a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-1.143a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571zM17.143 22.286h10.286a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571H17.143a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571zM12.571 22.286h2.286a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-2.286a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571zM21.714 26.857h5.714a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-5.714a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571zM12.571 26.857h6.857a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-6.857a.571.571 0 0 1-.571-.57.571.571 0 0 1 .571-.572zM12.571 10.857H16a.571.571 0 0 1 .571.571A.571.571 0 0 1 16 12h-3.429a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.572zM12.571 13.143H16a.571.571 0 0 1 .571.571.571.571 0 0 1-.571.571h-3.429a.571.571 0 0 1-.571-.571.571.571 0 0 1 .571-.571z'
				opacity={0.5}
			/>
		</g>
	</svg>
)
export default SvgPrettier
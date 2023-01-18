import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'

type HeadingProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		description?: string
	}
}

const Heading = ({ blok }: HeadingProps): JSX.Element => {
	const { heading, description } = blok

	return (
		<section
			className='grid-container mb-16 md:mb-20 bg-peach md:bg-white'
			{...storyblokEditable(blok)}
		>
			<div className='grid-container py-28 mx:py-16 md:px-0 bg-peach text-white rounded-2xl col-start-1 col-end-5 md:col-end-9 lg:col-end-13'>
				<div className='flex flex-col justify-center items-center gap-6 text-center col-start-1 col-end-5 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-10'>
					{heading && (
						<div className='[&>*]:text-heading-m md:[&>*]:text-heading-xl'>
							{render(heading)}
						</div>
					)}
					{description && <p>{description}</p>}
				</div>
			</div>
		</section>
	)
}

export default Heading

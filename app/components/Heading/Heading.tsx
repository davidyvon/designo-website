import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Background from './Background'

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
			className='grid-container px-0 md:px-10 lg:px-40 mb-16 md:mb-20 bg-peach md:bg-white'
			{...storyblokEditable(blok)}
		>
			<div className='relative overflow-hidden grid-container w-full col-span-full py-28 md:py-16 rounded-2xl bg-peach text-white'>
				<Background className='absolute -top-[40%] md:-top-[60%] right-0' />

				<div className='relative z-10 flex flex-col justify-center items-center gap-6 text-center col-start-1 col-end-5 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-10'>
					{heading && (
						<div className='text-heading-m md:text-heading-xl'>
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

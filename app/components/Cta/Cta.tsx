import React from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'

type CtaProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		description?: string
		buttons?: SbBlokData[]
	}
}

const Cta = ({ blok }: CtaProps): JSX.Element => {
	const { heading, description, buttons } = blok

	return (
		<section className='grid-container' {...storyblokEditable(blok)}>
			<div className='col-span-full grid-container lg:px-24 bg-peach rounded-2xl py-16 md:py-20'>
				<div className='flex flex-col lg:flex-row gap-8 justify-center lg:justify-between items-center col-span-full md:col-start-3 md:col-end-7 lg:col-start-1 lg:col-end-13'>
					<div className='flex flex-col lg:w-1/2 gap-4 text-white text-center lg:text-left'>
						{heading && (
							<div className='[&>*]:text-heading-m md:[&>*]:text-heading-l'>
								{render(heading)}
							</div>
						)}
						{description && <p className='text-body'>{description}</p>}
					</div>

					<div className=''>
						{buttons &&
							buttons.map((button) => (
								<StoryblokComponent key={button._uid} blok={button} />
							))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Cta

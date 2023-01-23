import React from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Background from './Background'

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
		<section className='relative mt-32 md:mt-40' {...storyblokEditable(blok)}>
			<div className='grid-container'>
				<div className='relative overflow-hidden col-span-full grid-container lg:px-24 bg-peach rounded-2xl py-16 md:py-20'>
					<Background className='absolute -top-[20%] lg:-top-[40%] right-0 object-contain' />

					<div className=' relative z-10 flex flex-col lg:flex-row gap-8 justify-center lg:justify-between items-center col-span-full md:col-start-3 md:col-end-7 lg:col-start-1 lg:col-end-13'>
						<div className='flex flex-col lg:w-1/2 gap-4 text-white text-center lg:text-left'>
							{heading && (
								<div className='text-heading-m md:text-heading-l'>
									{render(heading)}
								</div>
							)}
							{description && <p className='text-body'>{description}</p>}
						</div>

						{buttons &&
							buttons.map((button) => (
								<StoryblokComponent key={button._uid} blok={button} />
							))}
					</div>
				</div>
			</div>

			<div className='absolute bottom-0 left-0 w-full -z-10 h-1/2 md:h-1/4 bg-black' />
		</section>
	)
}

export default Cta

import React from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Image from 'next/image'

type HeroProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		description?: string
		buttons?: SbBlokData[]
		image?: {
			filename: string
			alt: '' | string
		}
	}
}

const Hero = ({ blok }: HeroProps): JSX.Element => {
	const { heading, description, buttons, image } = blok

	return (
		<section
			className='grid-container px-0 overflow-hidden'
			{...storyblokEditable(blok)}
		>
			<div className='flex flex-col align-center gap-20 col-start-1 col-end-5 px-6 pt-20 bg-peach md:col-end-9 md:rounded-2xl md:pt-16 md:mx-10 md:px-16 lg:flex-row lg:col-end-13 lg:mx-40 lg:px-24 lg:pt-0'>
				<article className='flex flex-col gap-6 items-center text-center text-white md:gap-8 lg:py-40 lg:items-start lg:justify-center lg:text-left lg:w-3/5'>
					{heading && (
						<div className='text-heading-m md:text-heading-xl'>
							{render(heading)}
						</div>
					)}
					{description && <p className='text-body'>{description}</p>}

					<div className='button'>
						{buttons &&
							buttons.map((button) => (
								<StoryblokComponent key={button._uid} blok={button} />
							))}
					</div>
				</article>

				<div className='flex justify-center -mb-40 lg:-mb-10 lg:mt-32'>
					{image && image.filename && (
						<Image
							className='w-full h-auto max-w-[284px] max-h-[573px]'
							src={image.filename}
							alt={image.alt}
							width={284}
							height={573}
						/>
					)}
				</div>
			</div>
		</section>
	)
}

export default Hero

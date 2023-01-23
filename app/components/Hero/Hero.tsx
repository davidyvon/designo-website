import React from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Image from 'next/image'
import Background from './Background'

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
			className='grid-container overflow-hidden px-0 md:px-10 lg:px-40 bg-peach md:bg-white'
			{...storyblokEditable(blok)}
		>
			<div className='relative overflow-hidden flex flex-col align-center gap-20 col-span-full pt-20 md:rounded-2xl md:pt-16 px-6 md:px-20 lg:flex-row lg:px-24 lg:pt-0 bg-peach'>
				<Background className='absolute top-[10%] -right-[20%] md:-right-[20%] lg:-right-[6.5%]' />

				<article className='relative z-10 flex flex-col gap-6 items-center text-center md:gap-8 lg:py-40 lg:items-start lg:justify-center lg:text-left lg:w-3/5 text-white'>
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
							className='w-[284px] h-auto max-w-[284px] max-h-[573px] drop-shadow-[20px_40px_40px_rgba(93,2,2,0.7)]'
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

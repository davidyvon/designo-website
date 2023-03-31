import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import NextLink from 'next/link'
import Image from 'next/image'
import RevealOnScroll from '../../animations/RevealOnScroll'

type MenuProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		image?: {
			filename: string
			alt: '' | string
		}
		heading?: string
		description?: string
		link?:
			| ''
			| {
					linktype: 'url'
					url: string
					target?: '_blank'
			  }
			| {
					linktype: 'story'
					story: { url: string }
					target?: '_blank'
			  }
	}
}

const CardsItem = ({ blok }: MenuProps): JSX.Element => {
	const { image, heading, description, link } = blok

	return (
		<RevealOnScroll>
			<article className='lg:h-full' {...storyblokEditable(blok)}>
				{link && (
					<NextLink
						className='group lg:h-full flex flex-col md:flex-row lg:flex-col justify-center lg:justify-between items-center rounded-2xl  overflow-hidden'
						target={link.target}
						href='#void'
					>
						<div className='w-full md:w-1/2 lg:w-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl lg:rounded-b-none lg:rounded-t-2xl'>
							{image && image.filename && (
								<Image
									className='w-full max-h-[320px] object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl lg:rounded-b-none lg:rounded-t-2xl'
									src={image.filename}
									alt={image.alt}
									width={350}
									height={320}
								/>
							)}
						</div>

						<div className='w-full md:w-1/2 lg:h-full lg:w-full flex flex-col justify-center items-center md:self-stretch gap-4 p-8 text-center bg-peachPale rounded-b-2xl md:rounded-r-2xl md:rounded-b-none lg:rounded-t-none lg:rounded-b-2xl group-hover:bg-peach transition duration-300 ease'>
							{heading && (
								<p className='text-heading-s uppercase text-peach group-hover:text-white transition duration-200 ease'>
									{heading}
								</p>
							)}
							{description && (
								<p className='text-body text-grayDark group-hover:text-white transition duration-200 ease'>
									{description}
								</p>
							)}
						</div>
					</NextLink>
				)}
			</article>
		</RevealOnScroll>
	)
}

export default CardsItem

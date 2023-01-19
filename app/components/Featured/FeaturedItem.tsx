import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import NextLink from 'next/link'
import Image from 'next/image'

import Icon from '../../assets/icons/Chevron'

type FeaturedItemProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		image?: {
			filename: string
			alt: '' | string
		}
		heading?: string
		label?: string
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

	index?: number
	itemsLength?: number
}

const FeaturedItem = ({
	blok,
	index,
	itemsLength = 0,
}: FeaturedItemProps): JSX.Element => {
	const { image, heading, label, link } = blok

	return (
		<div className='lg:h-full' {...storyblokEditable(blok)}>
			{link && (
				<NextLink
					className={`group relative flex flex-col justify-center items-center h-[250px] md:h-[200px] lg:h-[308px] ${
						index === 0 && itemsLength > 2 ? 'lg:min-h-full' : 'lg:h-[308px]'
					}`}
					target={link.target}
					href={`${link.linktype === 'story' ? link.story?.url : link.url}`}
				>
					<div className='opacity-0 absolute z-10 w-full h-full rounded-2xl bg-peach group-hover:opacity-80 transition duration-300 ease' />
					<div className='absolute w-full h-full top-0'>
						{image && image.filename && (
							<Image
								className={`w-full h-full max-h-[250px] md:max-h-[200px] lg:max-h-[308px] object-cover rounded-2xl ${
									index === 0 && itemsLength > 2
										? 'lg:max-h-full'
										: 'lg:max-h-[308px]'
								}`}
								src={image.filename}
								alt={image.alt}
								width={541}
								height={640}
							/>
						)}
					</div>

					<div className='relative z-10 flex flex-col justify-center items-center gap-4 md:gap-6 text-center text-white'>
						{heading && <p className='text-heading-l uppercase'>{heading}</p>}
						{label && (
							<div className='flex flex-row justify-center items-center gap-4'>
								<p className='text-label uppercase'>{label}</p>
								<Icon />
							</div>
						)}
					</div>
				</NextLink>
			)}
		</div>
	)
}

export default FeaturedItem

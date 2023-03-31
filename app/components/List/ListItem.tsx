import React from 'react'
import {
	StoryblokComponent,
	storyblokEditable,
	SbBlokData,
} from '@storyblok/react'
import Image from 'next/image'
import RevealOnScroll from '../../animations/RevealOnScroll'

type ListItemProps = {
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
		buttons?: SbBlokData[]
	}

	leftAligned?: boolean
}

const ListItem = ({ blok, leftAligned }: ListItemProps): JSX.Element => {
	const { image, heading, description, buttons } = blok

	return (
		<RevealOnScroll>
			<article
				className={`flex flex-col justify-center items-center gap-12 ${
					leftAligned && 'md:flex-row md:justify-start lg:flex-col'
				}`}
				{...storyblokEditable(blok)}
			>
				<div className='min-w-[202px] w-[202px] h-[202px]'>
					{image && image.filename && (
						<Image
							className='w-full'
							src={image.filename}
							alt={image.alt}
							width={202}
							height={202}
						/>
					)}
				</div>

				<div
					className={`flex flex-col justify-center items-center gap-8 text-grayDark text-center ${
						leftAligned &&
						'md:text-left md:items-start lg:items-center md:gap-4 lg:gap-8 lg:text-center'
					}`}
				>
					{heading && <p className='text-heading-s uppercase'>{heading}</p>}
					{description && <p className='text-body'>{description}</p>}
					<div>
						{buttons &&
							buttons.map((button) => (
								<StoryblokComponent key={button._uid} blok={button} />
							))}
					</div>
				</div>
			</article>
		</RevealOnScroll>
	)
}

export default ListItem

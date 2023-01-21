import React from 'react'
import {
	SbBlokData,
	StoryblokComponent,
	storyblokEditable,
} from '@storyblok/react'

type LocationProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		items?: SbBlokData[]
	}
}

const Location = ({ blok }: LocationProps): JSX.Element => {
	const { items } = blok

	return (
		<section
			className='grid-container px-0 md:px-10 lg:px-40 mb-32 md:mb-40'
			{...storyblokEditable(blok)}
		>
			<div className='col-span-full'>
				<div className='flex flex-col justify-center gap-10 md:gap-20 lg:gap-8'>
					{items &&
						items.map((item) => (
							<StoryblokComponent key={item._uid} blok={item} />
						))}
				</div>
			</div>
		</section>
	)
}

export default Location

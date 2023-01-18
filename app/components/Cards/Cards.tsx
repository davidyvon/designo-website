import {
	SbBlokData,
	StoryblokComponent,
	storyblokEditable,
} from '@storyblok/react'
import React from 'react'

type MenuProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		items?: SbBlokData[]
	}
}

const Cards = ({ blok }: MenuProps): JSX.Element => {
	const { items } = blok

	return (
		<section
			className='grid-container my-32 md:my-40'
			{...storyblokEditable(blok)}
		>
			<div className='col-span-full'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{items &&
						items.map((item) => (
							<div key={item._uid} className='col-span-1'>
								<StoryblokComponent blok={item} />
							</div>
						))}
				</div>
			</div>
		</section>
	)
}

export default Cards

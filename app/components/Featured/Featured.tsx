import React from 'react'
import {
	SbBlokData,
	StoryblokComponent,
	storyblokEditable,
} from '@storyblok/react'

type FeaturedProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		items?: SbBlokData[]
	}
}

const Featured = ({ blok }: FeaturedProps): JSX.Element => {
	const { items } = blok

	return (
		<section
			className='grid-container my-32 md:my-40'
			{...storyblokEditable(blok)}
		>
			<div className='col-span-full'>
				<div className='grid grid-cols-1 lg:grid-cols-2 lg:auto-rows gap-8 '>
					{items &&
						items.map((item, index) => (
							<div
								key={item._uid}
								className={`col-span-1 row-span-${
									index === 0 && items.length > 2 ? '2' : '1'
								}`}
							>
								<StoryblokComponent
									index={index}
									itemsLength={items.length}
									blok={item}
								/>
							</div>
						))}
				</div>
			</div>
		</section>
	)
}

export default Featured

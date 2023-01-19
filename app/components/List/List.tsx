import {
	SbBlokData,
	StoryblokComponent,
	storyblokEditable,
} from '@storyblok/react'
import React from 'react'

type ListProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		leftAligned?: boolean
		items?: SbBlokData[]
	}
}

const List = ({ blok }: ListProps): JSX.Element => {
	const { leftAligned, items } = blok

	return (
		<section
			className='grid-container my-32 md:my-40'
			{...storyblokEditable(blok)}
		>
			<div className='col-span-full'>
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-20'>
					{items &&
						items.map((item) => (
							<div key={item._uid} className='col-span-1'>
								<StoryblokComponent blok={item} leftAligned={leftAligned} />
							</div>
						))}
				</div>
			</div>
		</section>
	)
}

export default List

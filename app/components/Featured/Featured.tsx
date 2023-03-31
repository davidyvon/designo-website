import React from 'react'
import {
	SbBlokData,
	StoryblokComponent,
	storyblokEditable,
} from '@storyblok/react'
import RevealOnScroll from '../../animations/RevealOnScroll'

type FeaturedProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		items?: SbBlokData[]
	}
}

const Featured = ({ blok }: FeaturedProps): JSX.Element => {
	const { items = [] } = blok

	return (
		<RevealOnScroll>
			<section
				className='grid-container my-32 md:my-40'
				{...storyblokEditable(blok)}
			>
				<div className='col-span-full'>
					<div
						className={`grid grid-cols-1 lg:grid-cols-2 lg:auto-rows gap-8 ${
							items.length === 3
								? 'lg:grid-template-rows-1fr 1fr'
								: 'lg:grid-template-rows-1fr'
						}`}
					>
						{items &&
							items.map((item, index) => (
								<div
									key={item._uid}
									className={`col-span-1 ${
										index === 0 && items.length === 3
											? 'lg:row-start-1 lg:row-end-3'
											: ''
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
		</RevealOnScroll>
	)
}

export default Featured

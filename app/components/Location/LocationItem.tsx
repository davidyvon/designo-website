import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Image from 'next/image'
import classNames from 'classnames'

type LocationItemProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		imagePosition?: 'left' | 'right'
		image?: {
			filename: string
			alt: '' | string
		}
		heading?: string
		address?: string
		location?: string
		contact?: string
		phone?: string
		email?: string
	}
}

const LocationItem = ({ blok }: LocationItemProps): JSX.Element => {
	const {
		imagePosition,
		image,
		heading,
		address,
		location,
		contact,
		phone,
		email,
	} = blok

	const right = imagePosition === 'right'
	const left = imagePosition === 'left'

	return (
		<article
			className='grid-container px-0 mx-0 gap-0 md:gap-8'
			{...storyblokEditable(blok)}
		>
			<div
				className={classNames(
					'col-span-full lg:h-full md:max-h-[326px] lg:max-h-full md:mb-6 lg:mb-0 lg:row-start-1',
					{
						['lg:col-start-9 lg:col-end-13']: right,
						['lg:col-start-1 lg:col-end-5']: left,
					}
				)}
			>
				{image && image.filename && (
					<Image
						className='w-full h-full object-cover md:rounded-2xl'
						src={image.filename}
						alt={image.alt}
						width={350}
						height={326}
					/>
				)}
			</div>

			<div
				className={classNames(
					'col-span-full flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left py-20 px-6 md:px-20 md:rounded-2xl lg:px-24 bg-peachPale',
					{
						['lg:col-start-1 lg:col-end-9']: right,
						['lg:col-start-5 lg:col-end-13']: left,
					}
				)}
			>
				{heading && (
					<p className='text-heading-m md:text-heading-l text-peach'>
						{heading}
					</p>
				)}

				<div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-6 md:gap-8'>
					<address className='flex flex-col items-center md:items-start gap-1 text-label md:w-1/2 not-italic text-grayDark'>
						{address && <p className='font-bold'>{address}</p>}
						{location && <p className='text-body'>{location}</p>}
					</address>

					<address className='col-span-full flex flex-col gap-1 text-label not-italic text-grayDark'>
						{contact && <p className='font-bold'>{contact}</p>}
						{phone && (
							<a
								className='text-body transition duration-300 ease hover:text-peach'
								href={`tel:${phone}`}
							>
								P: {phone}
							</a>
						)}
						{email && (
							<a
								className='text-body  transition duration-300 ease hover:text-peach'
								href={`mailto:${email}`}
							>
								M: {email}
							</a>
						)}
					</address>
				</div>
			</div>
		</article>
	)
}

export default LocationItem

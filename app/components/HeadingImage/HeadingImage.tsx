import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Image from 'next/image'

type HeadingProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		description?: string
		imageDesktop?: {
			filename: string
			alt: '' | string
		}
		imageTablet?: {
			filename: string
			alt: '' | string
		}
		imageMobile?: {
			filename: string
			alt: '' | string
		}
	}
}

const Heading = ({ blok }: HeadingProps): JSX.Element => {
	const { heading, description, imageDesktop, imageTablet, imageMobile } = blok

	return (
		<section
			className='grid-container gap-0 px-0 md:px-10 lg:px-40 mb-16 md:mb-20 bg-peach md:bg-white'
			{...storyblokEditable(blok)}
		>
			<div className='col-span-full md:col-end-9 lg:col-start-8 lg:col-end-13 rounded-t-2xl lg:row-span-full'>
				{imageDesktop && imageDesktop.filename && (
					<Image
						className='hidden lg:block rounded-t-2xl w-full h-auto object-cover max-h-[480px] lg:rounded-r-2xl lg:rounded-l-none'
						src={imageDesktop.filename}
						alt={imageDesktop.alt}
						width={476}
						height={480}
					/>
				)}

				{imageTablet && imageTablet.filename && (
					<Image
						className='hidden md:block lg:hidden rounded-t-2xl w-full h-auto object-cover max-h-80'
						src={imageTablet.filename}
						alt={imageTablet.alt}
						width={689}
						height={320}
					/>
				)}

				{imageMobile && imageMobile.filename && (
					<Image
						className='md:hidden w-full h-auto object-cover max-h-80'
						src={imageMobile.filename}
						alt={imageMobile.alt}
						width={375}
						height={320}
					/>
				)}
			</div>

			<div className='grid-container lg:flex flex-column justify-center items-center lg:px-24 py-20 md:py-16 md:px-0 bg-peach text-white rounded-b-2xl lg:rounded-l-2xl lg:rounded-r-none col-span-full md:col-end-9 lg:col-end-8'>
				<div className='flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-left col-start-1 col-end-5 md:col-start-2 md:col-end-8 lg:col-start-2 lg:col-end-12'>
					{heading && (
						<div className='[&>*]:text-heading-m md:[&>*]:text-heading-xl'>
							{render(heading)}
						</div>
					)}
					{description && <p>{description}</p>}
				</div>
			</div>
		</section>
	)
}

export default Heading

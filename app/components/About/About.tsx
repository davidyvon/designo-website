import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import Image from 'next/image'
import RevealOnScroll from '../../animations/RevealOnScroll'
import Background from './Background'

type AboutProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		description?: string
		imagePosition?: 'left' | 'right'
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

const About = ({ blok }: AboutProps): JSX.Element => {
	const {
		heading,
		description,
		imagePosition,
		imageDesktop,
		imageTablet,
		imageMobile,
	} = blok

	const right = imagePosition === 'right'

	return (
		<RevealOnScroll>
			<section
				className='grid-container gap-0 px-0 md:px-10 lg:px-40 my-32 md:my-40 bg-peachPale md:bg-white'
				{...storyblokEditable(blok)}
			>
				<div
					className={`col-span-full md:col-end-9 rounded-t-2xl lg:row-span-full ${
						right
							? 'lg:col-start-8 lg:col-end-13'
							: 'lg:col-start-1 lg:col-end-6'
					}`}
				>
					{imageDesktop && imageDesktop.filename && (
						<Image
							className={`hidden lg:block rounded-t-2xl w-full h-auto object-cover max-h-[640px] ${
								right
									? 'lg:rounded-r-2xl lg:rounded-l-none'
									: 'lg:rounded-l-2xl lg:rounded-r-none'
							}`}
							src={imageDesktop.filename}
							alt={imageDesktop.alt}
							width={476}
							height={640}
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

				<div
					className={`relative overflow-hidden grid-container lg:flex flex-column justify-center items-center lg:px-24 py-20 md:py-16 md:px-0 rounded-b-2xl col-span-full md:col-end-9 bg-peachPale ${
						right
							? 'lg:col-start-1 lg:col-end-8 lg:rounded-l-2xl lg:rounded-r-none'
							: 'lg:col-start-6 lg:col-end-13 lg:rounded-l-none lg:rounded-r-2xl'
					}`}
				>
					<Background className='absolute bottom-0 left-0' />
					<div className='flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-left col-start-1 col-end-5 md:col-start-2 md:col-end-8 lg:col-start-2 lg:col-end-12'>
						{heading && (
							<div className='text-heading-m md:text-heading-l text-peach'>
								{render(heading)}
							</div>
						)}
						{description && (
							<div className='text-body text-grayDark'>
								{render(description)}
							</div>
						)}
					</div>
				</div>
			</section>
		</RevealOnScroll>
	)
}

export default About

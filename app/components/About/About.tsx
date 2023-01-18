import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'
import classNames from 'classnames'
import Image from 'next/image'

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
	const left = imagePosition === 'left'

	return (
		<section
			className='grid-container gap-0 px-0 md:px-10 lg:px-40 my-32 md:my-40 bg-peachPale md:bg-white'
			{...storyblokEditable(blok)}
		>
			<div
				className={classNames(
					'col-span-full md:col-end-9 rounded-t-2xl lg:row-span-full',
					{
						['lg:col-start-8 lg:col-end-13']: right,
						['lg:col-start-1 lg:col-end-6']: left,
					}
				)}
			>
				{imageDesktop && imageDesktop.filename && (
					<Image
						className={classNames(
							'hidden lg:block rounded-t-2xl w-full h-auto object-cover max-h-[640px]',
							{
								[' lg:rounded-r-2xl lg:rounded-l-none']: right,
								[' lg:rounded-l-2xl lg:rounded-r-none']: left,
							}
						)}
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
				className={classNames(
					'grid-container lg:flex flex-column justify-center items-center lg:px-24 py-20 md:py-16 md:px-0 bg-peachPale rounded-b-2xl col-span-full md:col-end-9 ',
					{
						['lg:col-start-1 lg:col-end-8 lg:rounded-l-2xl lg:rounded-r-none']:
							right,
						['lg:col-start-6 lg:col-end-13 lg:rounded-l-none lg:rounded-r-2xl']:
							left,
					}
				)}
			>
				<div className='flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-left col-start-1 col-end-5 md:col-start-2 md:col-end-8 lg:col-start-2 lg:col-end-12'>
					{heading && (
						<div className='[&>*]:text-heading-m md:[&>*]:text-heading-xl text-peach'>
							{render(heading)}
						</div>
					)}
					{description && (
						<div className='[&>*]:text-body text-grayDark'>
							{render(description)}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default About

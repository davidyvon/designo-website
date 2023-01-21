import React from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import NextLink from 'next/link'
import Image from 'next/image'

type FooterProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		logo?: {
			filename: string
			alt: '' | string
		}
		links?: SbBlokData[]
		address?: string
		location?: string
		contact?: string
		phone?: string
		email?: string
		socials?: SbBlokData[]
	}
}

const Footer = ({ blok }: FooterProps): JSX.Element => {
	const { logo, links, address, location, contact, phone, email, socials } =
		blok

	return (
		<footer className='bg-black' {...storyblokEditable(blok)}>
			<div className='grid-container gap-y-10 py-20  text-center md:text-left'>
				{logo && logo.filename && (
					<NextLink
						className='col-span-full m-auto md:m-0 md:col-start-1 md:col-end-4 lg:col-start-1 lg:col-end-5'
						href={'/'}
					>
						<Image
							className='w-52 h-8 object-contain'
							src={logo.filename}
							alt={logo.alt}
							width={143}
							height={25}
						/>
					</NextLink>
				)}

				<div className='col-span-full w-full h-[1px] bg-white opacity-10 my-4 md:row-start-2 md:row-end-2' />

				<nav className='col-span-full flex flex-col items-center md:justify-end gap-8 md:flex-row md:col-start-4 md:col-end-9 lg:col-start-5 lg:col-end-13'>
					{links &&
						links.map((link) => (
							<div key={link._uid} className='[&>*]:text-white '>
								<StoryblokComponent blok={link} />
							</div>
						))}
				</nav>

				<address className='col-span-full flex flex-col gap-1 text-label not-italic text-white opacity-50 md:col-start-1 md:col-end-3 lg:col-start-1 lg:col-end-4'>
					{address && <p className='font-bold'>{address}</p>}
					{location && <p>{location}</p>}
				</address>

				<address className='col-span-full flex flex-col gap-1 text-label not-italic text-white opacity-50 md:col-start-3 md:col-end-6 lg:col-start-5 lg:col-end-8'>
					{contact && <p className='font-bold'>{contact}</p>}
					{phone && (
						<a
							className='transition duration-300 ease hover:text-peach'
							href={`tel:${phone}`}
						>
							P: {phone}
						</a>
					)}
					{email && (
						<a
							className='transition duration-300 ease hover:text-peach'
							href={`mailto:${email}`}
						>
							M: {email}
						</a>
					)}
				</address>

				<div className='col-span-full flex justify-center gap-4 md:col-start-6 md:col-end-9 md:self-end md:justify-end lg:col-start-9 lg:col-end-13'>
					{socials &&
						socials.map((social) => (
							<StoryblokComponent key={social._uid} blok={social} />
						))}
				</div>
			</div>
		</footer>
	)
}

export default Footer

import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import NextLink from 'next/link'
import Image from 'next/image'

type LinkProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		name?: string
		link?:
			| ''
			| {
					linktype: 'url'
					url: string
					target?: '_blank'
			  }
			| {
					linktype: 'story'
					story: { url: string }
					target?: '_blank'
			  }
		logo?: {
			filename: string
			alt: '' | string
		}
	}
}

const Link = ({ blok }: LinkProps): JSX.Element => {
	const { name, link, logo } = blok

	if (name) {
		return (
			<div
				className='w-fit text-label uppercase text-grayDark hover:underline'
				{...storyblokEditable(blok)}
			>
				{name && link && (
					<NextLink
						href={`${link.linktype === 'story' ? link.story?.url : link.url}`}
						target={link.target}
					>
						{name}
					</NextLink>
				)}
			</div>
		)
	}

	return (
		<div className='w-fit' {...storyblokEditable(blok)}>
			{logo && logo.filename && link && (
				<NextLink
					href={`${link.linktype === 'story' ? link.story?.url : link.url}`}
					target={link.target}
				>
					<Image
						className='w-6 h-6 transition duration-300 ease hover:opacity-80'
						src={logo.filename}
						alt={logo.alt}
						width={24}
						height={24}
					/>
				</NextLink>
			)}
		</div>
	)
}

export default Link

import React, { useState } from 'react'
import {
	storyblokEditable,
	StoryblokComponent,
	SbBlokData,
} from '@storyblok/react'
import NextLink from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import Menu from '../Menu/Menu'

type NavigationProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		logo?: {
			filename: string
			alt: '' | string
		}
		links?: SbBlokData[]
	}

	className?: string
}

const Navigation = ({ blok, className }: NavigationProps): JSX.Element => {
	const { logo, links } = blok

	const [openMenu, setOpenMenu] = useState(false)

	const handleMenu = () => {
		setOpenMenu(!openMenu)
	}

	const setActiveStyles = classNames(className, {
		['hidden']: !openMenu,
	})

	return (
		<header className='grid-container px-0' {...storyblokEditable(blok)}>
			<nav className='col-start-1 col-end-5 bg-white md:col-end-9 lg:col-end-13'>
				<div className='flex flex-row justify-between items-center gap-10 py-8 px-6 md:py-16 md:px-10 lg:px-40'>
					{logo && logo.filename && (
						<NextLink href={'/'}>
							<Image
								className='w-52 h-8 object-contain'
								src={logo.filename}
								alt={logo.alt}
								width={143}
								height={25}
							/>
						</NextLink>
					)}

					<div className='hidden flex-row gap-10 ml-auto md:flex'>
						{links &&
							links.map((link) => (
								<StoryblokComponent key={link._uid} blok={link} />
							))}
					</div>

					<div onClick={handleMenu} className='ml-auto md:hidden'>
						<Menu />
					</div>
				</div>

				<div
					className={classNames(
						'flex flex-col gap-8 py-12 px-6 bg-black md:hidden [&>*]:text-white [&>*]:text-2xl',
						setActiveStyles
					)}
				>
					{links &&
						links.map((link) => (
							<StoryblokComponent key={link._uid} blok={link} />
						))}
				</div>
			</nav>
		</header>
	)
}

export default Navigation

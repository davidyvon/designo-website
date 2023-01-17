import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import NextLink from 'next/link'
import classNames from 'classnames'
import Icon from '../../assets/icons/Chevron'

type ButtonProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		type: 'button' | 'submit'
		style: 'primary' | 'secondary' | 'light'
		label?: string
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
	}

	onClick: () => void
}

const Button = ({ blok, onClick }: ButtonProps): JSX.Element => {
	const { type = 'button', style, label, link } = blok

	const buttonStyle = classNames(
		'inline-flex flex-row justify-center items-center gap-5 w-fit text-label uppercase text-center py-4 px-6 rounded-lg transition duration-300 ease',
		{
			['bg-white text-grayDark hover:bg-peachLight hover:text-white']:
				style === 'primary',
		},
		{ ['bg-peach text-white hover:bg-peachLight']: style === 'secondary' },
		{
			['bg-transparent text-white transition duration-300 ease hover:opacity-50']:
				style === 'light',
		}
	)

	if (type === 'submit') {
		return (
			<>
				{label && (
					<button
						type={type}
						className='w-fit p-0 m-0 border-0 bg-transparent'
						onClick={onClick}
						{...storyblokEditable(blok)}
					>
						<div className={buttonStyle}>
							{label}
							{style === 'light' && <Icon className='w-1 h-2' />}
						</div>
					</button>
				)}
			</>
		)
	}

	return (
		<>
			{label && link && (
				<div
					className='w-fit p-0 m-0 border-0 bg-transparent'
					{...storyblokEditable(blok)}
				>
					<NextLink
						href={`${link.linktype === 'story' ? link.story?.url : link.url}`}
						target={link.target}
						className={buttonStyle}
					>
						{label}
						{style === 'light' && <Icon className='w-1 h-2' />}
					</NextLink>
				</div>
			)}
		</>
	)
}

export default Button

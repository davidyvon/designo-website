import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import NextLink from 'next/link'
import styles from './Link.module.scss'

type LinkProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		name: string
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
}

const Link = ({ blok }: LinkProps): JSX.Element => {
	const { name, link } = blok

	return (
		<div className={styles.container} {...storyblokEditable(blok)}>
			{link && (
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

export default Link

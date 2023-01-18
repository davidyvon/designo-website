import React from 'react'
import type { AppProps } from 'next/app'
import '../app/styles/globals.scss'

import { storyblokInit, apiPlugin } from '@storyblok/react'
import About from '../app/components/About/About'
import Button from '../app/components/Button/Button'
import Cards from '../app/components/Cards/Cards'
import CardsItem from '../app/components/Cards/CardsItem'
import Cta from '../app/components/Cta/Cta'
import Heading from '../app/components/Heading/Heading'
import HeadingImage from '../app/components/HeadingImage/HeadingImage'
import Hero from '../app/components/Hero/Hero'
import Link from '../app/components/Link/Link'
import Navigation from '../app/components/Navigation/Navigation'
import Page from '../app/components/Page/Page'

const components = {
	about: About,
	button: Button,
	cards: Cards,
	cardsItem: CardsItem,
	cta: Cta,
	heading: Heading,
	headingImage: HeadingImage,
	hero: Hero,
	link: Link,
	navigation: Navigation,
	page: Page,
}

storyblokInit({
	accessToken: 'NewLuB5oSenFF6yij6Tm2Att',
	use: [apiPlugin],
	components,
})

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

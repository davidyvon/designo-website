import React from 'react'
import type { AppProps } from 'next/app'
import '../app/styles/globals.scss'

import { storyblokInit, apiPlugin } from '@storyblok/react'
import About from '../app/components/About/About'
import Button from '../app/components/Button/Button'
import Cards from '../app/components/Cards/Cards'
import CardsItem from '../app/components/Cards/CardsItem'
import Cta from '../app/components/Cta/Cta'
import Featured from '../app/components/Featured/Featured'
import FeaturedItem from '../app/components/Featured/FeaturedItem'
import Footer from '../app/components/Footer/Footer'
import Heading from '../app/components/Heading/Heading'
import HeadingImage from '../app/components/HeadingImage/HeadingImage'
import Hero from '../app/components/Hero/Hero'
import Link from '../app/components/Link/Link'
import List from '../app/components/List/List'
import Location from '../app/components/Location/Location'
import LocationItem from '../app/components/Location/LocationItem'
import ListItem from '../app/components/List/ListItem'
import Navigation from '../app/components/Navigation/Navigation'
import Page from '../app/components/Page/Page'

const components = {
	about: About,
	button: Button,
	cards: Cards,
	cardsItem: CardsItem,
	cta: Cta,
	featured: Featured,
	featuredItem: FeaturedItem,
	footer: Footer,
	heading: Heading,
	headingImage: HeadingImage,
	hero: Hero,
	link: Link,
	list: List,
	listItem: ListItem,
	location: Location,
	locationItem: LocationItem,
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

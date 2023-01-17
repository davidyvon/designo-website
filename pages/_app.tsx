import React from 'react'
import type { AppProps } from 'next/app'
import '../app/styles/globals.scss'

import { storyblokInit, apiPlugin } from '@storyblok/react'
import Button from '../app/components/Button/Button'
import Heading from '../app/components/Heading/Heading'
import Link from '../app/components/Link/Link'
import Page from '../app/components/Page/Page'

const components = {
	button: Button,
	heading: Heading,
	link: Link,
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

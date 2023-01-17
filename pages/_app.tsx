import React from 'react'
import type { AppProps } from 'next/app'
import '../app/styles/globals.scss'

import { storyblokInit, apiPlugin } from '@storyblok/react'
import Heading from '../app/components/Heading/Heading'
import Link from '../app/components/Link/Link'
import Page from '../app/components/Page/Page'

const components = {
	heading: Heading,
	link: Link,
	page: Page,
}

storyblokInit({
	accessToken: 'AlEInklAkzOS0whHwYUzJwtt', // Replace token with corresponding StoryBlok project
	use: [apiPlugin],
	components,
})

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

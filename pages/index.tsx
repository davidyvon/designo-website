import React from 'react'
import Head from 'next/head'
import {
	useStoryblokState,
	getStoryblokApi,
	StoryblokComponent,
	StoryData,
	SbBlokData,
} from '@storyblok/react'

type HomeProps = {
	story: StoryData & {
		content: {
			_uid: string
			body: SbBlokData[]
			component: 'page'
			name: string
			_editable: string
		}
	}
}

const Home = ({ story }: HomeProps) => {
	story = useStoryblokState(story)

	return (
		<>
			<Head>
				<title>
					{story ? `Next Starter | ${story.name}` : 'Next Starter | Home'}
				</title>
				<meta name='description' content='Next Starter Projet' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin=''
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/favicon/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon/favicon-16x16.png'
				/>
				<link rel='manifest' href='/favicon/site.webmanifest' />
			</Head>

			<StoryblokComponent blok={story.content} />
		</>
	)
}

export async function getStaticProps() {
	const slug = 'home'

	const sbParams = {
		version: 'draft',
		resolve_links: 'url',
	}

	const storyblokApi = getStoryblokApi()
	const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
		},
		revalidate: 3600,
	}
}

export default Home

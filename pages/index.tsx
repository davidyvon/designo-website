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

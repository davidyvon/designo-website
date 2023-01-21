import React from 'react'
import Head from 'next/head'
import {
	useStoryblokState,
	getStoryblokApi,
	StoryblokComponent,
	StoryData,
	SbBlokData,
} from '@storyblok/react'

type PageProps = {
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

export default function Page({ story }: PageProps) {
	story = useStoryblokState(story)

	return (
		<>
			<Head>
				<title>{story ? `Next Starter | ${story.name}` : 'Next Starter'}</title>
				<meta name='description' content='Next Starter Project' />
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

export async function getStaticProps({ params }) {
	const slug = params.slug ? params.slug.join('/') : 'home'

	const sbParams = {
		version: 'draft',
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

export async function getStaticPaths() {
	const storyblokApi = getStoryblokApi()
	const { data } = await storyblokApi.get('cdn/links/')

	const paths: { params: { slug: unknown } }[] = []
	Object.keys(data.links).forEach((linkKey) => {
		if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
			return
		}

		const slug = data.links[linkKey].slug
		const splittedSlug = slug.split('/')

		paths.push({ params: { slug: splittedSlug } })
	})

	return {
		paths: paths,
		fallback: false,
	}
}

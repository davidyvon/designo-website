import React from 'react'
import { storyblokEditable } from '@storyblok/react'
import Map from '../Map/Map'
import Background from './Background'

type LocationItemProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		imagePosition?: 'left' | 'right'
		latitude?: number
		longitude?: number
		heading?: string
		address?: string
		location?: string
		contact?: string
		phone?: string
		email?: string
	}
}

const LocationItem = ({ blok }: LocationItemProps): JSX.Element => {
	const {
		imagePosition,
		latitude,
		longitude,
		heading,
		address,
		location,
		contact,
		phone,
		email,
	} = blok

	const right = imagePosition === 'right'

	return (
		<article
			className='grid-container px-0 mx-0 gap-0 md:gap-8'
			{...storyblokEditable(blok)}
		>
			<div
				className={`col-span-full md:max-h-[326px] md:mb-1 lg:mb-0 lg:row-start-1 ${
					right ? 'lg:col-start-9 lg:col-end-13' : 'lg:col-start-1 lg:col-end-5'
				}`}
			>
				{latitude && longitude && (
					<Map
						className='w-full h-full object-cover md:rounded-2xl'
						center={[latitude, longitude]}
						zoom={12}
					>
						{({ TileLayer, Marker, Popup }) => (
							<>
								<TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
								<Marker position={[latitude, longitude]}>
									<Popup>Designo Office</Popup>
								</Marker>
							</>
						)}
					</Map>
				)}
			</div>

			<div
				className={`relative overflow-hidden col-span-full flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left py-20 px-6 md:px-20 md:rounded-2xl lg:px-24 bg-peachPale ${
					right ? 'lg:col-start-1 lg:col-end-9' : 'lg:col-start-5 lg:col-end-13'
				}`}
			>
				<Background className='absolute bottom-0 left-0' />

				{heading && (
					<p className='text-heading-m md:text-heading-l text-peach'>
						{heading}
					</p>
				)}

				<div className='relative z-10 flex flex-col md:flex-row justify-center md:justify-start items-center gap-6 md:gap-8'>
					<address className='flex flex-col items-center md:items-start gap-1 text-label md:w-1/2 not-italic text-grayDark'>
						{address && <p className='font-bold'>{address}</p>}
						{location && <p className='text-body'>{location}</p>}
					</address>

					<address className='col-span-full flex flex-col gap-1 text-label not-italic text-grayDark'>
						{contact && <p className='font-bold'>{contact}</p>}
						{phone && (
							<a
								className='text-body transition duration-300 ease hover:text-peach'
								href={`tel:${phone}`}
							>
								P: {phone}
							</a>
						)}
						{email && (
							<a
								className='text-body  transition duration-300 ease hover:text-peach'
								href={`mailto:${email}`}
							>
								M: {email}
							</a>
						)}
					</address>
				</div>
			</div>
		</article>
	)
}

export default LocationItem

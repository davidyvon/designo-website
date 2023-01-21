import React, { useState } from 'react'
import {
	SbBlokData,
	StoryblokComponent,
	storyblokEditable,
} from '@storyblok/react'
import { render } from 'storyblok-rich-text-react-renderer-ts'

type FormProps = {
	blok: {
		component: string
		_uid: string
		_editable?: string

		heading?: string
		description?: string

		name?: string
		email: string
		phone?: string
		message?: string
		buttons?: SbBlokData[]
	}
}

const Form = ({ blok }: FormProps): JSX.Element => {
	const { heading, description, name, email, phone, message, buttons } = blok

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})

	const handleChange = (
		event:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		const { name, value } = event.currentTarget
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		console.log('Form submitted successfully!')
		setFormData({ name: '', email: '', phone: '', message: '' })
	}

	return (
		<section
			className='grid-container mb-32 md:mb-40 bg-peach md:bg-white'
			{...storyblokEditable(blok)}
		>
			<div className='col-span-full flex flex-col lg:flex-row justify-center items-center gap-12 py-20 md:px-10 lg:px-24 rounded-2xl bg-peach'>
				<div className='flex flex-col gap-8 text-center md:text-left lg:w-1/2 text-white'>
					{heading && (
						<div className='text-heading-m md:text-heading-xl'>
							{render(heading)}
						</div>
					)}
					{description && (
						<p className='text-body md:w-1/2 lg:w-full'>{description}</p>
					)}
				</div>

				<form
					onSubmit={handleSubmit}
					className='w-full flex flex-col justify-center gap-6 lg:w-1/2'
				>
					<div className='group border-b hover:border-b-2 border-white'>
						<input
							required
							type='text'
							name='name'
							placeholder={name}
							value={formData.name}
							onChange={handleChange}
							className='w-full text-label p-4 outline-none cursor-pointer bg-peach text-white placeholder:text-label placeholder:text-white placeholder:opacity-50 group-hover:placeholder:opacity-100'
						/>
					</div>

					<div className='group border-b hover:border-b-2 border-white'>
						<input
							required
							type='email'
							name='email'
							placeholder={email}
							value={formData.email}
							onChange={handleChange}
							className='w-full text-label p-4 outline-none cursor-pointer bg-peach text-white placeholder:text-label placeholder:text-white placeholder:opacity-50 group-hover:placeholder:opacity-100'
						/>
					</div>

					<div className='group border-b hover:border-b-2 border-white'>
						<input
							type='tel'
							name='phone'
							placeholder={phone}
							value={formData.phone}
							onChange={handleChange}
							className='w-full text-label p-4 outline-none cursor-pointer bg-peach text-white placeholder:text-label placeholder:text-white placeholder:opacity-50 group-hover:placeholder:opacity-100'
						/>
					</div>

					<div className='group border-b hover:border-b-2 border-white'>
						<textarea
							required
							name='message'
							placeholder={message}
							value={formData.message}
							onChange={handleChange}
							className='w-full max-h-64 text-label p-4 outline-none cursor-pointer bg-peach text-white placeholder:text-label placeholder:text-white placeholder:opacity-50 group-hover:placeholder:opacity-100'
						/>
					</div>

					{buttons &&
						buttons.map((button) => (
							<div key={button._uid} className='self-center md:self-end'>
								<StoryblokComponent
									blok={button}
									type='submit'
									onSubmit={handleSubmit}
								/>
							</div>
						))}
				</form>
			</div>
		</section>
	)
}

export default Form

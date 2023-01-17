import React from 'react'

type ButtonProps = {
	label: string
	onClick?: () => void
}

const Button = ({ label, ...props }: ButtonProps) => {
	return (
		<button type='button' {...props}>
			{label}
		</button>
	)
}

export default Button

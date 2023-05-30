/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* eslint-disable indent */

const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

/** @type {import('next').NextConfig} */
module.exports = {
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'a.storyblok.com',
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		}),
			config.plugins.push(
				new CopyPlugin({
					patterns: [
						{
							from: 'node_modules/leaflet/dist/images',
							to: path.resolve(__dirname, 'public', 'leaflet', 'images'),
						},
					],
				})
			)
		return config
	},
}

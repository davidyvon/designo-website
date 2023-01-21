import React, { useEffect } from 'react'
import Leaflet, { Icon } from 'leaflet'
import * as ReactLeaflet from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const { MapContainer } = ReactLeaflet

const Map = ({ children, ...rest }) => {
	useEffect(() => {
		delete Icon.Default.prototype._getIconUrl

		Icon.Default.mergeOptions({
			iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
			iconUrl: '/leaflet/images/marker-icon.png',
			shadowUrl: '/leaflet/images/marker-shadow.png',
		})
	}, [])

	return (
		<MapContainer {...rest}>{children(ReactLeaflet, Leaflet)}</MapContainer>
	)
}

export default Map

import React, { useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl"

const Marker = ({ map, place }) => {
  const markerRef = useRef()

  useEffect(() => {
    const marker = new mapboxgl.Marker(markerRef)
      .setLngLat(place.geometry.coordinates)
      .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
      .addTo(map)

    return () => marker.remove()
  })

  return <div ref={markerRef} />
}

const Markers = ({ map, places }) => {
  return (
    <>
      {places &&
        places.map(place => (
          <Marker key={place.properties.title} map={map} place={place}/>
        ))}
    </>
  )
}

export default Markers
import PlantSale from "../components/plantsale";
import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <PlantSale />,
        document.body.appendChild(document.createElement('div')),
    )
})
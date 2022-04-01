import React, { useState, useEffect} from 'react'
import './styles.scss'

const PlantSale = () => {

    const[plants, setPlants] = useState([]);
    
    const getPlants = async () => {

        // Get the data response from API call
        try {
           const response = await fetch('/api/v1/plants');
           const data = await response.json();
           return data
        } catch(error) {    // Catch any errors 
            console.error(error)
            return null
        }
    }

    useEffect(async () => {

        const plants = await getPlants();   // Get the plants from plant API
        setPlants(plants)                   // Update the plants state
        
     }, []);

    return (
         <div className='bg-plantsale'>
            <div className='plantsale-wrapper'>
                {
                    plants && plants.map(plant => {
                        return (
                            <div className='plant-wrapper'>
                                <p>{ plant.name }</p>
                                <p>{ plant.price }</p>
                                <p>{ plant.quantity }</p>
                                <p>{ plant.description }</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

// class PlantSale extends Component {
    
//     render() {
//         return (
//             <plantsale />
//         )
//     }

// }

export default PlantSale;
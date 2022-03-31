import React, { Component, useState, useEffect} from 'react'
import './styles.scss'

const PlantSale = () => {

    const[plants, setPlants] = useState();

    function changePlantType(type) {
        let tempPlants = [];
        plants.forEach(plant => {
            if(plant.category == type) {
                tempPlants.push(plant);
            }
        })
        setPlants(tempPlants);
    }

    useEffect(async () => {
        const getPlants = async () => {
           try {
              const response = await fetch('/api/v1/plants');
              const json = await response.json();
              setPlants(json);
           }catch(error) { console.log(error); }
        }
        await getPlants();
     }, []);

    return (
        <div className='bg-plantsale'>
            <div className='plantsale-wrapper'>
                {plants.map((value) => {
                    return <div className='plant-wrapper'><p>{value}</p></div>
                })}
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
import React, { useState, useEffect} from 'react'
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

    function updatePlants(data) {
        let tempPlants = [];
        data.forEach(plant => {
            let p  = {
                name : plant.name,
                price : plant.price,
                description : plant.description,
                quantity : plant.quantity,
                category : plant.category
            };
            console.log(p)
            tempPlants.push(p);
        })
        setPlants(tempPlants);
    }

    useEffect(async () => {
        const getPlants = async () => {
           try {
              const response = await fetch('/api/v1/plants');
              const data = await response.json();
              updatePlants(data);
           }catch(error) { console.log(error); }
        }
        await getPlants();
        console.log(plants);
     }, []);

    return (
        <div className='bg-plantsale'>
            <div className='plantsale-wrapper'>
                {/* {plants.map((value) => {
                    return <div className='plant-wrapper'><p>{value}</p></div>
                })} */}
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
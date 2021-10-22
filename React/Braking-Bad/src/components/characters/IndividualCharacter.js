import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Character from "./Character"
import Spinner from "../ui/Spinner"

const IndividualCharacter = ({match}) => {

    const [isLoading2, setIsLoading2] = useState(true)
    const [item, setItem] = useState({})

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters/${match.params.id}`)
            console.log(result.data)
            setItem(result.data)
            setIsLoading2(false);
          }
          fetchItems();
    }, [])

    return (
        <div>
            {
                (isLoading2)?<Spinner/>:<section >
                    
                <Character item={item[0]}/>
            
                </section>
            }
           
        </div>
    )
}

export default IndividualCharacter

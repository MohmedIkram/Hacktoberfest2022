import React from 'react'
import CharacterItem from "./CharacterItem"
import Search from '../ui/Search'
import Spinner from "../ui/Spinner"

const CharacterGrid = ({items,isLoading,setQuery,query}) => {
    return (
        <div>
            <Search query={query} setQuery={setQuery}/>
            {
                (isLoading)?<Spinner/>:<section className="cards">
                    {items.map((item,index)=>(
                        <CharacterItem item={item} key={index}/>
                    ))}
                </section>
            }
        </div>
    )
}

export default CharacterGrid

import React from 'react'

const Search = ({setQuery,query}) => {
    

    const onChange = (q) =>{
        
        setQuery(q)
    }

    return (
        <section>
            <form>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Search Charcters" 
                value={query}
                onChange={(e)=>onChange(e.target.value)}
                autoFocus
                />
            </form>
        </section>
    )
}

export default Search

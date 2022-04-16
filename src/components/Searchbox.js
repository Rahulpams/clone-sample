import React from 'react'


const Searchbox = ({searchChange}) => {
    return (
        <div className="pa2 ">
            <input 
                className="pa3 ba b--black bg-light-gray br4  shadow-1"
                type="search" 
                placeholder="Search robots..."
                onChange={searchChange}
            />
        </div>
    )
}

export default Searchbox
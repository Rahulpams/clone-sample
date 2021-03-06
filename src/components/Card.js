import React from "react";


const Card = ({name, email, id}) => {
    return (
        <div className="bg-light-green bim dib br3 pa1 ma2 grow bw2 shadow-3">
            <img src={`https://robohash.org/${id}`} alt="robotimage" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            
        </div>
    )
}


export default Card;

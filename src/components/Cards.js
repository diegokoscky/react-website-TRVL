import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Confira esses Destinos Épicos!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-9.jpg" 
                        text="Explore a cachoeira escondida 
                        dentro da Floresta Amazônica" 
                        label="Aventura" 
                        path="/servicos" 
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Confira Esses Destinos Épicos!</h1>
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
                        <CardItem 
                        src="images/img-2.jpg" 
                        text="Viaje pelas ilhas de Bali num 
                        cruzeiro incrível" 
                        label="Paraíso" 
                        path="/produtos" 
                        />
                        <CardItem 
                        src="images/img-8.jpg" 
                        text="Conheça as dunas do deserto 
                        do Saara de uma forma mágica" 
                        label="Aventura" 
                        path="/sign-up" 
                        />
                        <CardItem 
                        src="images/img-home.jpg" 
                        text="Viaje pelas incríveis ilhas 
                        da América Central " 
                        label="Paraíso" 
                        path="/servicos" 
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

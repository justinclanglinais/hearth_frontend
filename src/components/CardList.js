import React from 'react'
import Card from './Card.js'

export default class CardList extends React.Component {
    render () {
        const allCards = [
            {name: "Potato",cost: 7,image: "imgurl",attack: 6, defense: 4},
            {name: "Potato",cost: 7,image: "imgurl",attack: 6, defense: 4},
            {name: "Potato",cost: 7,image: "imgurl",attack: 6, defense: 4},
            {name: "Potato",cost: 7,image: "imgurl",attack: 6, defense: 4},
            {name: "Potato",cost: 7,image: "imgurl",attack: 6, defense: 4},
            {name: "Potato",cost: 7,image: "imgurl",attack: 6, defense: 4}
        ]
        return (
            <div>
                {allCards.map(c => {
                    return <div><Card card={c}/></div>
                })}
            </div>
        )
    }
}
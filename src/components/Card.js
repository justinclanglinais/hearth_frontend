import React from 'react'

export default class Card extends React.Component {
    render () {
        const {name, cardtype, image, cost, attack, health} = this.props.card
        return (
            <div>
                <div>
                    {name}
                </div>
                <div>
                    {cardtype}
                </div>
                <div>
                    <img src={image} height="100" alt="hearthstone card"/>
                </div>
                <div>
                    {cost}
                </div>
                <div>
                    {attack}
                </div>
                <div>
                    {health}
                </div>
            </div>
        )
    }
}
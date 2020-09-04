import React from 'react'

export default class Card extends React.Component {
    render () {
        const {name, cost, image, attack, defense} = this.props.card
        return (
            <div>
                <div>
                    {name}
                </div>
                <div>
                    {cost}
                </div>
                <div>
                    {image}
                </div>
                <div>
                    {attack}
                </div>
                <div>
                    {defense}
                </div>
            </div>
        )
    }
}
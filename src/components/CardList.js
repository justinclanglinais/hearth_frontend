import React from 'react'
import Card from './Card.js'
import PrivacyHOC from '../HOCs/PrivacyHOC.js'
import LoadingHOC from '../HOCs/LoadingHOC.js'

class CardList extends React.Component {
    render () {
        return (
            <div>
                <div>
                    {this.props.cards.map(c => {
                        return <div><Card card={c}/></div>
                    })}
                </div>
            </div>
        )
    }
}

export default LoadingHOC(PrivacyHOC(CardList));
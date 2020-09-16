import React from 'react'

export default function PrivacyHOC(WrappedComponent) {
    return (
        class PrivacyHOC extends React.Component {
            isLoggedIn = () => {
                return this.props.loggedIn
            }
            render () {
                return this.isLoggedIn() ? <WrappedComponent {...this.props}/> : <h1>Sorry, you don't have access to this content...</h1>
            }
        }
    )
}
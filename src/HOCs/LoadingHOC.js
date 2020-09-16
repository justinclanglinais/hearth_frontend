import React from 'react'

export default function LoadingHOC(WrappedComponent) {
    return (
        class LoadingHOC extends React.Component {
            isLoaded = () => {
                return this.props.loaded
            }
            render () {
                return this.isLoaded() ? <WrappedComponent {...this.props}/> : <h1>Loading Content...</h1>
            }
        }
    )
}
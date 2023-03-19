import React from 'react'
import PropTypes from 'prop-types'
import Posts from './Posts'

const Route = ({ route, user, title, body }) => {
    const propsPosts = {
        user,
        title,
        body
    }
    let element
    switch (route) {
        case 'posts':
            element = <Posts {...propsPosts} />
            break;
            
            default:
                element = <Posts {...propsPosts} />
                break;
            }
            
            return element
}

Route.propTypes = {
    route: PropTypes.string.isRequired,
    user: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string
}

export default Route
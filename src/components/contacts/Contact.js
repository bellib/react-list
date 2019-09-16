import React, { Component } from 'react' ;
import PropTypes from 'prop-types';

export default class Contact extends Component {
    render() {
        const { name, tel } = this.props ;
        return (
            <div className="Contact">
                <h1>Contact Name: { name}</h1>
                <code>{  tel }</code>
            </div>
        )
    }
}
Contact.defaultProps = {
    name: 'habib def' ,
    tel: 'tel def'
}

Contact.propTypes = {
    name: PropTypes.string.isRequired
}

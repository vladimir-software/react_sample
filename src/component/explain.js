import React, {Component} from 'react'

class Explain extends  Component {
    render () {
        return (
            <footer>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </footer>

        );
    }
}

export default Explain;
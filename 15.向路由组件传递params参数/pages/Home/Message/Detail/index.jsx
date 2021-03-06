import React, { Component } from 'react'

export default class Detail extends Component {

    render() {
        const {id,title} = this.props.match.params;
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>Title:{title}</li>
                    <li>Message:????</li>
                </ul>
            </div>
        )
    }
}

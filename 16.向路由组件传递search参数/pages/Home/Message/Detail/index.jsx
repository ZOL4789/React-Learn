import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {

    render() {
        // 接收params参数
        // const {id,title} = this.props.match.params;

        // 接收search参数
        const {id,title} = qs.parse(this.props.location.search.split('?')[1]);
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

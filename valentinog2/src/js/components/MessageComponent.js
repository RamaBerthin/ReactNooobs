import React, { Component } from 'react';

export class MessageComponent extends Component {

    constructor() {
        super();


    }

    renderResul() {
        if (this.props.isDisplay) {
            return (<div>
                <p></p><p class="bg-danger">
                    Veuillez fournir une valeur....</p></div>)
        }
    }
    render() {
        const s = this.props.isDisplay

        return (
           <div>{this.renderResul()}</div>
        );
    }
}
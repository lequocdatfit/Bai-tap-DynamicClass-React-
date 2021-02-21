import React, { Component } from 'react';
import './TableGallery.css';
var classnames = require('classnames');

class Image extends Component{
    constructor(props) {
        super(props);
        this.state = {isClicked: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        if(this.state.isClicked === false) {
            this.setState(state => ({isClicked : true}))
        } else {
            this.setState(state => ({isClicked : false}))
        }
    }
    render() {
        
        const data = this.props.data;
        var imgClass = classnames({
            img: true,
            'img-small': this.state.isClicked
        });
        return(
            <div className={imgClass}>
                <img onClick={this.handleClick} onCl src={data.src} alt={data.alt}></img>
            </div>
        )
    }
}

export default Image;

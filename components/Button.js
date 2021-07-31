
import React from 'react'
import styles from '../styles/Button.module.css'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hovered : false};
        this.changeToMainColor = this.changeToMainColor.bind(this);
        this.changeToHoverColor = this.changeToHoverColor.bind(this);
    }

    changeToMainColor() {
        this.setState({
            hovered: false
        });      
        console.log("main color")
    }

    changeToHoverColor() {
        this.setState({
            hovered: true
        });
        console.log("hover color")     
    }

    render() {
        let btnstyle = {width:this.props.bwidth}
        btnstyle["backgroundColor"] = this.state.hovered===true ? this.props.hoverColor : this.props.bgColor
        let content = this.props['span'] === undefined ? <p> {this.props.message}</p> : <p> {this.props.message} <span style={{color:this.props.spanColor}}>{this.props.span}</span></p> 
        return (
            <div onMouseEnter={this.changeToHoverColor} onMouseLeave={this.changeToMainColor} className={styles.Button} style={btnstyle}>
                {content}
            </div>
        )
    }
}
export default Button; 

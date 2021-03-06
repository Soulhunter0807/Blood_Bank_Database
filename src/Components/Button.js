import React from 'react';

// CSS
import './../SCSS/Button.scss';

const Styles = ['btn--primary','btn--outline','btn--icon'] 

const Sizes = ['btn--medium','btn--large','btn--mobile','btn--wide']

const Color = ['primary','blue','red','green','outblue','icon--green','icon--blue']

export const Button = ({children, type, onClick, buttonStyle, buttonSize, buttonColor, buttonIcon}) => {
   
    const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0]
    const checkButtonColor = Color.includes(buttonColor) ? buttonColor : Color[0]
    const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];
    
    return (
       <button className = {`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick = {onClick} type = {type}>
            {children}
        </button>
    );
}
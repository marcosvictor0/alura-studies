import React from 'react';

class Button extends React.Component {
    render() {
        const backgroundColor = 'green';
        const styles = {
            backgroundColor
        }
        // const color = 'red';
        return (
            <button style={
                styles
                // backgroundColor: color
            }>
                Botão
            </button>
        )
    }
}

export default Button;
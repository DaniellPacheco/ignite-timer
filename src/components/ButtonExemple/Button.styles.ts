import styled, { css } from 'styled-components';

export type ButtonVariantColor = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariantColor;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    border-radius: 4px;
    border: 0;
    margin: 8px;

    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};


    // quando usamos a interpolação no styled-components ele identifica como uma função onde podemos pegar as propriedades
    /* ${props => {
        // pegamos as propriedades de maneira dinamica e inserimos no background
        // além disso, usamo css na frente para deixar colorido o código abaixo
        return css`background-color: ${buttonVariants[props.variant]}`
    }} */
`;
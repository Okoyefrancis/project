import React from 'react'
import { styled } from 'styled-components'

export const Button = () => {
  return (
    <div>
        <Container>
        
            <Text>
                Sign in
            </Text>
        </Container>
    </div>
  )
}

export default Button

const Text = styled.div`
font-weight: 600;
margin-bottom: 5px;
`

const Container = styled.div`
    padding: 5px 12px;
    background-color: black;
    color: white;
    border-radius: 30px;
    transition: all 360ms;

    &:hover{
        cursor: pointer;
        transform: scale(1.03);
        background-color: silver;
    }
`

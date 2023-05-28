import React from 'react';
import { Container } from './styleContainer.js'
export default function Content({ children }) {
    return (
        <>
            <Container>
                {children}
            </Container>
        </>

    )
}

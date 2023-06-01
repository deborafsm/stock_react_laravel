import React from 'react';
import { Container } from './styleContainer'
export default function Content({ children }) {
    return (
        <>
            <Container>
                {children}
            </Container>
        </>

    )
}

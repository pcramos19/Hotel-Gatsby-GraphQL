import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgb(0,0,0);
    width: 100%;
    color: #FFF;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

const HabitacionPreview = ({habitacion}) => {

    const { contenido, imagen, titulo, slug } = habitacion;

    return ( 
        <div
            css={css`
                border: 1px solid #e1e1e1;
                padding-top: 2rem;
                margin-bottom: 2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            `}
        >
            <Image
                fluid={imagen.fluid}
                css={css`
                    width: 100px;
                    `}
            />
            <div
                css={css`
                    padding: 3rem;
                `}
            >
                <h3
                    css={css`
                        font-size: 3rem;
                        text-align: center;
                    `}
                >{titulo}</h3>
                {/* <p>{contenido}</p> */}

                <Boton to={slug}>Más información</Boton>
            </div>
        </div>
     );
}
 
export default HabitacionPreview;
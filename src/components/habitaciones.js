import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import Layout from '../components/layout';

export const query = graphql`
    query($slug: String!) {
        allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
            nodes {
                    titulo
                    contenido
                    imagen {
                    fluid(maxWidth:600) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`

const HabitacionTemplate = ({data: { allDatoCmsHabitacion: { nodes } }}) => {

    const { titulo, contenido, imagen } = nodes[0];

    return ( 
        <Layout>
            <main
                css={css`
                    margin: 0 auto;
                    max-width: 1200px;
                    width: 95%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                `}
            >
                <h1
                    css={css`
                        text-align: center;
                        margin-top: 4rem;
                    `}
                >{titulo}</h1>
                <p>{contenido}</p>
                <Image 
                    fluid={imagen.fluid}
                    css={css`
                    width: 100px;
                    `}
                />
            </main>
        </Layout>
     );
}
 
export default HabitacionTemplate;
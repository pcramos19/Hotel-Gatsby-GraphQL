import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegacion from './nav';


const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

const Footer = ({title}) => {

    const year = new Date().getFullYear();
    return ( 
        <>
        <footer
            css={css`
                background-color: rgb(0,0,0);
                margin-top: 5rem;
                padding: 1rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Navegacion />

                {/* <EnlaceHome
                    to='/'
                ><h1>Bodega Campos de Castilla</h1> </EnlaceHome> */}
            </div>
        </footer>

        <p
            css={css`
                text-align: center;
                color: #fff;
                background-color: rgb(0,0,0);
                margin: 0;
                padding: 1rem;

            `}
        >
          &copy; {year} {title}. Todos los derechos Reservados  
        </p>
        </>
     );
}
 
export default Footer;
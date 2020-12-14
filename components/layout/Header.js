import React from 'react';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';


const Header = () => {
    return (
        <header>

            <div>
                <div>
                    <p>P</p>

                    <Buscar />

                    <Navegacion />
                </div>

                <div>
                    
                    <p> Hello: Juan </p>

                    <button type="button"> Log Out </button>

                    <Link href="/"> login </Link>
                    <Link href="/"> Create an account </Link>

                </div>

            </div>
            
        </header>
    )
}

export default Header

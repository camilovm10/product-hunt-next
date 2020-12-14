import React from 'react';
import Link from 'next/link';

const Navegacion = () => {
    return (
        <nav>
            <Link href="/"> Home </Link>
            <Link href="/populars"> Populars </Link>
            <Link href="/new"> New Products </Link>
        </nav>
    )
}

export default Navegacion;

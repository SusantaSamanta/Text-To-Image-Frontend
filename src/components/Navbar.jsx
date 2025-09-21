import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/generate'>Generate</Link>
            <Link to='/bye'>Home</Link>
        </>
    );
}

export default Navbar
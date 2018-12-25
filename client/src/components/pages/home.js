import React from 'react'
import { Logo } from '../partials/logo';
import { Link } from 'react-router-dom'


const main = {
    'height':'100vh',
    display:'flex',
    justifyContent:'center'
}

const text = {
    'textDecoration':'none',
    'fontFamily': 'Arvo',
    'fontSize':'16px',
    'textAlign':'center',
    'letterSpacing':'0.05em',
    'lineHeight': 'normal',
    'color':'#94FFCC',
    'margin':'12px 0'
}

const holder = {
    display:'inline-flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
}

const linkHolder = {
    display:'inline-flex',
    flexDirection:'column'
}

export const Home = () => {
    return(
        <div style={main}>
            <div style={holder}>

                <Logo />

                <div style={linkHolder}>
                    <Link to='/create-note' style={text}>+ New Note</Link>
                    <Link to='/create-notebook' style={text}>+ New Notebook</Link>
                    <Link to='/notebooks' style={text}>Your Notebooks</Link>
                </div>

            </div>
        </div>
    )
}

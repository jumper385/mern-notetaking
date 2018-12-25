import React, {Component} from 'react'
import { Logo } from '../partials/logo';
import { Link } from 'react-router-dom'
import { Nav } from '../partials/nav';


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

export class CreateNote extends Component{
    render() {
        return(
            <div>

                <Nav />

            </div>
        )
    }
}

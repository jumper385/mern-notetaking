import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

const main = {
    'height':'150px',
    'width':'150px',
}

const text = {
    fontFamily: 'Arvo',
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontSize: '32px',
    textAlign: 'center',
    letterSpacing: '0.1em',
    color: '#94FFCC',

}

class nav extends Component{
    render() {
        console.log(this.props)
        return(
            <div>
                <button onClick={() => this.props.history.goBack()}> <i className="fa fa-angle-left" /> Back </button>
                <Link to='/'><i className="fa fa-home"></i></Link>
            </div>
        )
    }
}

export const Nav = withRouter(nav)
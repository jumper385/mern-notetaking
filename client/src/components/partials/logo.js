import React from 'react'

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

export const Logo = () => {
    return(
        <div style={main}>
            <h1 style={{...text}}>NOTE<br/>- - -<br/>SLATE</h1>
            
        </div>
    )
}

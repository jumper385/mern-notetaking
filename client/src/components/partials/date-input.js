import React, {Component} from 'react'

const main = {
    'width':'300px',
    'marginBottom':'24px'
}

const label = {
    'fontFamily': 'Arvo',
    'fontSize':'8px',
    'letterSpacing':'0.05em',
    'fontWeight':'normal',
    'lineHeight': 'normal',
    'color':'#94FFCC',
    'height':'16px',
    'display':'flex',
    'alignItems':'center',
    'margin':'0',
    'padding':'0',
}

const input = {
    'width':'100%',
    'borderRadius':'0',
    'background':'none',
    'border':'none',
    'borderBottom':'solid #94FFCC 1px',
    'fontSize':'16px',
    'fontFamily':'Arvo',
    'letterSpacing':'0.05em',
    'color':'#94FFCC',
    'padding':'0',
    'margin':'0',
}

export class DateInput extends Component{
    render() {
        console.log(this.props.requirement)
        const requirement = this.props.requirement === 'true' ? (
            <span style={{color:'#EB4848'}}>*</span>
        ) : (
            <span style={{color:'#AAEBFF'}}>(optional)</span>
        )

        console.log(requirement)

        return(
            <div style={main}>
                <label htmlFor={this.props.labelName} style={label}>{this.props.labelName} <pre> </pre> {requirement}</label>
                <input id={this.props.labelName} placeholder={this.props.placeholder} style={input} type="date" />
            </div>
        )
    }
}

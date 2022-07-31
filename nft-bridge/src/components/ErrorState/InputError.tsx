import React from 'react'
const InputError = (props: any) => {
    return (
        <div>
            {props.state &&
                <div style={{
                    width: '322px', height: '22px', flexGrow: '0', fontFamily: 'Roboto', fontSize: '14px',
                    fontWeight: 'normal', fontStretch: 'normal', fontStyle: 'normal', lineHeight: '1.57', letterSpacing: 'normal',
                    textAlign: 'left', color: '#eb4b4f'
                }}> {props.error}</div>}
        </div>
    )
}

export default InputError
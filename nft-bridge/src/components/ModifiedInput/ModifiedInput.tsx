import React from 'react'
import styles from './ModifiedInput.module.scss'

const ModifiedInput = (props: any) => {
    return (
        <>
            {!props.state && <input className={styles.input1} placeholder='0x00000...000000'></input>
            }
            {
                props.state &&
                <div className={styles.input1}>
                    {props.value}
                </div>
            }
        </>
    )
}

export default ModifiedInput
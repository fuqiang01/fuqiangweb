import React, { useCallback } from 'react'
import styles from './index.less'

export default function Drawer(props: any) {
    const handleClick = useCallback(e => {
        if(e.currentTarget === e.target){
            
        }
    }, [])
    return (
        <div className={styles.wrapper} onClick={handleClick}>
            <div className={styles.showBox}>
                {props.children}
            </div>
        </div>
    )
}

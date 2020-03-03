import React, { PureComponent } from 'react'
import styles from './index.less'

export default class extends PureComponent {
    render() {
        return (
            <div className={styles.wrapper}>
                <p className={styles.content}>{this.props.title}</p>
                <p className={styles.origin}>--{this.props.origin}</p>
            </div>
        )
    }
}

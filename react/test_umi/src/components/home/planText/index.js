import React, { PureComponent } from 'react'
import styles from './index.less'
import DateWrap from '../dateWrap'

export default class extends PureComponent {
    render() {
        return (
            <div className={styles.wrapper}>
                <p className={styles.title}>{this.props.title}</p>
                <p className={styles.describe}>{this.props.describe}</p>
                <DateWrap />
            </div>
        )
    }
}

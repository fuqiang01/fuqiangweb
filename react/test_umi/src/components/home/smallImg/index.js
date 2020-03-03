import React, { PureComponent } from 'react'
import styles from './index.less'
import DateWrap from '../dateWrap'

export default class extends PureComponent {
    render() {
        return (
            <div className={styles.wrapper}>
                <p className={styles.title}>{this.props.title}</p>
                <div className={styles.describeWrap}>
                    <p className={styles.describe}>{this.props.describe}</p>
                    <div className={styles.imgWrap}>
                        <img src={this.props.imgSrc} alt="" />
                    </div>
                </div>
                <DateWrap />
            </div>
        )
    }
}

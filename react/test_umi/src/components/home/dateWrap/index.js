import React, { PureComponent } from 'react'
import praiseSrc from '../../../assets/icon/praise.png'
import msgSrc from '../../../assets/icon/msg.png'
import dateSrc from '../../../assets/icon/date.png'
import styles from './index.less'

export default class extends PureComponent {
    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <img src={praiseSrc} alt=""/>
                    <span>{this.props.praiseNum}</span>
                </div>
                <div className={styles.item}>
                    <img src={msgSrc} alt=""/>
                    <span>{this.props.msgNum}</span>
                </div>
                <div className={styles.item}>
                    <img src={dateSrc} alt=""/>
                    <span>{this.props.date}</span>
                </div>
            </div>
        )
    }
}

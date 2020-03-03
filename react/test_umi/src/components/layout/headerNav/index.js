import React, { PureComponent } from 'react'
import styles from './index.less'

export default class extends PureComponent {
    render() {
        return (
            <div className={styles.navWrap}>
                <a href="#">全部</a>
                <a href="#">知识点</a>
                <a href="#">文章</a>
                <a href="#">音乐</a>
                <a href="#">视屏</a>
                <a href="#">毒鸡汤</a>
            </div>
        )
    }
}

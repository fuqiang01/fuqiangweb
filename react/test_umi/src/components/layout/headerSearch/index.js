import React, { Component } from 'react'
import styles from './index.less'
import imgSrc from '../../../assets/icon/search.png'

export default class extends Component {
    state = {
        value: ''
    }
    onChange = e => { this.setState({ value: e.target.value }) }
    onSearch = _ => {
        console.log('点击搜索了')
    }
    render() {
        return (
            <div className={styles.searchWrap}>
                <input 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.onChange} 
                    placeholder="输入关键词搜索！"/>
                <div className={styles.btnWrap} onClick={this.onSearch}>
                    <img src={imgSrc} alt='' />
                    <span>搜索</span>
                </div>
            </div>
        )
    }
}

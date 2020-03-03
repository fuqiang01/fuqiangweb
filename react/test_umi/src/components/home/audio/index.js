import React, { PureComponent } from 'react'
import styles from './index.less'
import playImg from '../../../assets/icon/play.png'
import stopImg from '../../../assets/icon/stop.png'

export default class extends PureComponent {
    state = {
        isPlay: false
    }
    btnSrc = null;
    audio = React.createRef();
    onPlay = _ => {
        this.setState({ isPlay: !this.state.isPlay });
        if (this.state.isPlay) {
            this.audio.current.pause();
        } else {
            this.audio.current.play();
        }
    }
    render() {
        this.btnSrc = this.state.isPlay ? stopImg : playImg;
        return (
            <div className={styles.wrapper}>
                <div className={styles.btnWrp} onClick={this.onPlay}>
                    <img src={this.btnSrc} alt="" />
                </div>
                <div className={styles.info}>
                    <p className={styles.songName}>{this.props.songName}</p>
                    <p className={styles.singer}>{this.props.singer}</p>
                    <p className={styles.origin}>{this.props.origin}</p>
                </div>
                <audio src={this.props.audioSrc} ref={this.audio}></audio>
            </div>
        )
    }
}

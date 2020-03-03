import styles from './index.css';
import PlanText from '../components/home/planText'
import BigImg from '../components/home/bigImg'
import SmallImg from '../components/home/smallImg'
import MyVideo from '../components/home/video'
import MyAudio from '../components/home/audio'
import Talk from '../components/home/talk'

export default function () {
    return (
        <div className={styles.contentWrap}>
            <div className={styles.contentList}>
                <PlanText />
                <BigImg />
                <SmallImg />
                <MyVideo />
                <MyAudio />
                <Talk />
            </div>
        </div>
    );
}

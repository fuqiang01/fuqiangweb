import styles from './index.css';
import HeaderSearch from '../components/layout/headerSearch'
import HeaderNav from '../components/layout/headerNav'

export default function(props) {
    return (
        <div className={styles.wrapper}>
            <div className = {styles.header}>
                <HeaderSearch />
                <HeaderNav />
            </div>
            {props.children}
        </div>
    );
}


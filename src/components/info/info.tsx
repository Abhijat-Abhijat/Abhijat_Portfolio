import classNames from 'classnames';
import styles from './info.module.scss';

export interface InfoProps {
    className?: string;
}

export const Info = ({ className }: InfoProps) => {
    return (
        <div className={styles.info}>
            <a className={styles.name}>Abhijat</a>
            <p className={classNames(styles.position, styles.subheading)}>Full Stack Developer </p>
            <p className={styles.position}>
                I build accessible, inclusive products and digital experiences for the web and mobile.
            </p>
        </div>
    );
};

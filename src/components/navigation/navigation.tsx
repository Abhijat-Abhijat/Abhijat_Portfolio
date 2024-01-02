import classNames from 'classnames';
import styles from './navigation.module.scss';

export interface NavigationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navigation = ({ className }: NavigationProps) => {
    return (
        <div className={styles.navigation}>
            <ul>
                <li>
                    <a href="#home" 
                    // className={styles.active}
                    >
                        <span className={styles.indicator}></span>
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <span className={styles.indicator}></span>
                        <span>Experience</span>
                    </a>
                </li>
                <li>
                    <a href="#skills">
                        <span className={styles.indicator}></span>
                        <span>Project</span>
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        <span className={styles.indicator}></span>
                        <span>Hall of Fame</span>
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <span className={styles.indicator}></span>
                        <span>Certifications</span>
                    </a>
                </li>
                
            </ul>
        </div>
    );
};

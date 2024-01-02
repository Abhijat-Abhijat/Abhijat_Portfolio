import classNames from 'classnames';
import styles from './about.module.scss';
import information from '../../../informations.json'

export interface AboutProps {
    className?: string;
    text : string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className, text }: AboutProps) => {
    return (
        <div>
            <p className={styles.aboutme}>{text}</p>
        </div>
    );
};

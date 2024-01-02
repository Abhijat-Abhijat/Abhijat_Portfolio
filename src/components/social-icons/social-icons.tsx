import classNames from 'classnames';
import styles from './social-icons.module.scss';
import { Dribbble, Facebook, Github, Instagram, Linkedin, MessageSquareText, Twitter } from 'lucide-react';


export interface SocialIconsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SocialIcons = ({ className }: SocialIconsProps) => {
    return (
        <div className={styles.socialIcons}>
            <a href="https://github.com/Abhijat-Abhijat">
                <Github size={30} color="#C3DEEF" />
            </a>
            <a href="https://www.linkedin.com/in/abhijat-profile/">
                <Linkedin size={30} color="#C3DEEF" />
            </a>
            <a href="https://www.instagram.com/abh7917/">
                <Instagram size={30} color="#C3DEEF" />
            </a>
            <a href="https://x.com/Abhijat07?t=4RbcWehUggkKM5YahPRmSg&s=08">
                <Twitter size={30} color="#C3DEEF" />
            </a>
            <a href="https://www.facebook.com/?ref=logo">
                <Facebook size={30} color="#C3DEEF" />
            </a>
            <a href="https://">
                <Dribbble size={30} color="#C3DEEF" />
            </a>
            <a href="https://">
                <MessageSquareText size={30} color="#C3DEEF" />
            </a>
        </div>
    );
};

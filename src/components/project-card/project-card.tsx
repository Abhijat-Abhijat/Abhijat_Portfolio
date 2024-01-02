import classNames from 'classnames';
import style from './project-card.module.scss';
import styles from '../work-experience-card/work-experience-card.module.scss';
import image from '../../assets/1wallpaperflare.com_wallpaper.jpg'

export interface ProjectCardProps {
    className?: string;
    data: any;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ProjectCard = ({ className , data}: ProjectCardProps) => {
    return (
        <div className={styles.workexp}>
            <div className={styles.image}>
<img src={image} alt="" />
                {/* <img src={data.image} alt="image" /> */}
            </div>
            <div className={styles.information}>
                <a href={data.link || 'No data'}>
                    <p className={styles.heading}>
                        <span>
                            {data.name}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className={styles.icon}
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </span>
                    </p>
                    <p className={styles.description}>{data.description || 'No data'}</p>
                    {data.technologiesUsed && (
                        <div className={styles.tech}>
                            {data.technologiesUsed.map((item: any, index: any) => (
                                <p key={index} className={styles.technologies}>
                                    {item || 'No data'}
                                </p>
                            )) || 'No data'}
                        </div>
                    )}
                </a>
            </div>
        </div>
    );
};

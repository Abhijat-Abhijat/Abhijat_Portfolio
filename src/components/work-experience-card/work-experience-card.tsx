import classNames from 'classnames';
import styles from './work-experience-card.module.scss';

export interface WorkExperienceCardProps {
    className?: string;
    data: {
        duration: string;
        link: string | undefined;
        technologiesUsed: string[];
        primaryRole: string;
        companyName: string;
        role: string;
        broaderRole: string;
        description: string;
    };
}

export const WorkExperienceCard = ({ className, data }: WorkExperienceCardProps) => {
    return (
        <div className={styles.workexp}>
            <div className={styles.duration}>
                <p>{data.duration || 'No data'}</p>
            </div>
            <div className={styles.information}>
                <a href={data.link || 'No data'}>
                    <p className={styles.heading}>
                        <span>
                            {data.primaryRole || 'No data'} . {data.companyName || 'No data'}
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
                    <p aria-hidden="true" className={styles.role}>
                        {data.role || 'No data'}
                    </p>
                    <p className={styles.broaderRole}>{data.broaderRole || 'No data'}</p>
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

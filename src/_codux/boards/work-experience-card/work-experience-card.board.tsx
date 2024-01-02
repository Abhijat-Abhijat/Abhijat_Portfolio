import { createBoard } from '@wixc3/react-board';
import { WorkExperienceCard } from '../../../components/work-experience-card/work-experience-card';

export default createBoard({
    name: 'WorkExperienceCard',
    Board: () => <WorkExperienceCard />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080
    }
});

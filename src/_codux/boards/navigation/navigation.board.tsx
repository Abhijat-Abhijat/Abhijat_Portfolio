import { createBoard } from '@wixc3/react-board';
import { Navigation } from '../../../components/navigation/navigation';

export default createBoard({
    name: 'Navigation',
    Board: () => <Navigation />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasBackgroundColor: '#000000'
    }
});

import { createBoard } from '@wixc3/react-board';
import { Info } from '../../../components/info/info';

export default createBoard({
    name: 'Info',
    Board: () => <Info />,
    isSnippet: true,
});

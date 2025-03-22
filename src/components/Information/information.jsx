import { InformationLayout } from './Information-layout';
import { ACTION, PLAYER_NAME, STATUS } from '../../constants';

export const Information = ({ status, currentPlayer }) => {
  const information =
    status === STATUS.draw ? 'Ничья' : `${ACTION[status]}: ${PLAYER_NAME[currentPlayer]}`;

  return <InformationLayout information={information} />;
};

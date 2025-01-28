import { InformationLayout } from './Information-layout';
import { ACTION, PLAYER_NAME } from '../../constants';

export const Information = ({ status, currentPlayer }) => {
  const information = `${ACTION[status]}: ${PLAYER_NAME[currentPlayer]}`;

  return <InformationLayout information={information} />;
};

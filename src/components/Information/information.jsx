import { InformationLayout } from './Information-layout';
import { ACTION, PLAYER_NAME, STATUS, PLAYER } from '../../constants';
import PropTypes from 'prop-types';

export const Information = ({ status, currentPlayer }) => {
  const information =
    status === STATUS.draw ? 'Ничья' : `${ACTION[status]}: ${PLAYER_NAME[currentPlayer]}`;

  return <InformationLayout information={information} />;
};

Information.propTypes = {
	status: PropTypes.oneOf([STATUS.draw, STATUS.move, STATUS.win]),
	currentPlayer: PropTypes.oneOf([PLAYER.cross, PLAYER.nobody, PLAYER.nought]),
};

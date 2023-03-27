import { ACTIONS } from '../App';

export default function Operators({ dispatch, operation }) {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>{operation}</button>
  );
}

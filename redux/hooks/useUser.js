import { getState, actions } from '../slices/user';
import { useCommon } from './useCommon';

export const useUser = () => {
  const [state, setState] = useCommon({
    getState,
    actions,
  });
  return [state, setState];
};

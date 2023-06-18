import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

const getBindFunction = (value) =>
  typeof value === 'function'
    ? bindActionCreators
    : bindActionCreatorsRecursively;

const bindActionCreatorsRecursively = (actions, dispatch) =>
  Object.entries(actions).reduce((acc, [name, value]) => {
    const bind = getBindFunction(value);
    acc[name] = bind(value, dispatch);
    return acc;
  }, {});

export const useCommon = ({ getState, actions }) => {
  const state = useSelector(getState);
  const dispatch = useDispatch();

  const setState = useMemo(
    () => ({
      ...bindActionCreatorsRecursively(actions, dispatch),
    }),
    [dispatch, actions]
  );

  return [state, setState];
};

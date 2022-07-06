import {createAction} from 'redux-actions';
import {upperSnakeCase} from './src/utils';
import camelCase from 'lodash/camelCase';

let actionNames = normalize(
  'read hit',
  'apply filter',
  'clear filter',
  ...loadAll(
    'all launches',
  ),
  ...doAll(
  ),
);

// Create multiple load action types (get, loading and loading)
function loadAll(...names) {
  return [].concat(...names.map(load));
}

// Create multiple load action types (do, doing and done)
function doAll(...names) {
  return [].concat(...names.map(doit));
}

// Create load action type variants with do, doing and done prefixed
function doit(resourceName) {
  return [
    `do ${resourceName}`,
    `doing ${resourceName}`,
    `done ${resourceName}`,
    `error ${resourceName}`,
  ];
}

// Create load action type variants with get, loading and loading prefixed
function load(resourceName) {
  return [
    `refresh ${resourceName}`,
    `get ${resourceName}`,
    `loading ${resourceName}`,
    `loaded ${resourceName}`,
    `error loading ${resourceName}`,
  ];
}

// Uper snake case names
function normalize(...names) {
  return names.map(upperSnakeCase);
}

export const ActionTypes = actionNames.reduce((actionTypes, actionName) => {
  actionTypes[actionName] = actionName;
  return actionTypes;
}, {});

export const Actions = actionNames.reduce((actions, actionName) => {
  let actionCreatorName = camelCase(actionName);
  actions[actionCreatorName] = createAction(
    actionName,
    x => x,
    (x, y) => y,
  );
  return actions;
}, {});

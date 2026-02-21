'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let currentState = state;
  const stateHistory = [];

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];

    if (action.type === 'clear') {
      currentState = {};
    } else if (action.type === 'addProperties') {
      currentState = { ...currentState, ...action.extraData };
    } else if (action.type === 'removeProperties') {
      currentState = { ...currentState };

      for (let j = 0; j < action.keysToRemove.length; j++) {
        delete currentState[action.keysToRemove[j]];
      }
    }

    stateHistory.push(currentState);
  }

  return stateHistory;
}

module.exports = transformStateWithClones;

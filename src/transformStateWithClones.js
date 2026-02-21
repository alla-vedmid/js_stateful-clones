'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const updState = [];
  let currentState = state;

  for (const item of actions) {
    const action = item.type;

    switch (action) {
      case 'addProperties':
        currentState = { ...currentState, ...item.extraData };
        updState.push(currentState);
        break;

      case 'removeProperties':
        currentState = { ...currentState };

        for (const key of item.keysToRemove) {
          delete currentState[key];
        }

        updState.push(currentState);
        break;

      case 'clear':
        currentState = {};
        updState.push(currentState);
        break;
    }
  }

  return updState;
}



module.exports = transformStateWithClones;

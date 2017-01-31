export function initialize(appInstance) {
  const stateStore = appInstance.lookup('service:state-store');

  stateStore.initializeState({
    draftBody: ''
  });
}

export default {
  name: 'initialize-state',
  initialize
};

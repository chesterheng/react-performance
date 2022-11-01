const DOG_ACTIONS = {
  TYPED_IN_DOG_INPUT: "TYPED_IN_DOG_INPUT",
};

function dogReducer(state, action) {
  switch (action.type) {
    case DOG_ACTIONS.TYPED_IN_DOG_INPUT: {
      return { ...state, dogName: action.dogName };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export { DOG_ACTIONS, dogReducer };

const initialState = { good: 0, neutral: 0, bad: 0, total: 0, percentage: 0 };
const actionsTypes = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
  total: 'total',
  percentage: 'percentage',
};

function reducer(state, action) {
  switch (action.type) {
    case actionsTypes.good:
      return { ...state, good: state.good + 1 };
    case actionsTypes.neutral:
      return { ...state, neutral: state.neutral + 1 };
    case actionsTypes.bad:
      return { ...state, bad: state.bad + 1 };
    case actionsTypes.total:
      return {
        ...state,
        total: Object.values(state)
          .slice(0, 3)
          .reduce((total, state) => {
            return total + state;
          }, 0),
      };
    case actionsTypes.percentage:
      return {
        ...state,
        percentage: Math.round((state.good * 100) / state.total),
      };
    default:
      throw new Error();
  }
}
export { initialState, actionsTypes, reducer };

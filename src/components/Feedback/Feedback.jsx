import { useReducer, useEffect } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { Section } from './Section';
import {
  initialState,
  actionsTypes,
  reducer,
} from '../../helpers/reducerForFeedback';
export const Feedback = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { good, neutral, bad, total, percentage } = state;

  const stateKeys = Object.keys(state);
  const stateNew = stateKeys.slice(0, stateKeys.length - 2);
  console.log(stateNew);

  useEffect(() => {
    dispatch({ type: actionsTypes.total });
    dispatch({ type: actionsTypes.percentage });

    // action={type,payload}
  }, [good, neutral, bad]);

  const addFeedback = option => {
    dispatch({ type: option });
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={stateNew} onLeaveFeedback={addFeedback} />
        {/* !render */}
        {total === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={percentage}
          />
        )}
      </Section>
    </>
  );
};

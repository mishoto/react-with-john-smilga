import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'newUserInput':
      return { ...state, userInput: action.payload };
    case 'toggleColor':
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TG_COLOR: 'toggleColor',
};

const UseReducerWithDaveGray = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: '',
    color: false,
  });
  return (
    <main style={{ background: state.color ? '#FFF' : '#FFF952' }}>
      <input
        type='text'
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
        }
      />
      <br />
      <br />
      <p>{state.count}</p>
      <section>
        <button className='btn' onClick={() => dispatch({ type: ACTION.DECREMENT })}>
          -
        </button>
        <button className='btn' onClick={() => dispatch({ type: ACTION.INCREMENT })}>
          +
        </button>
        <button
          className='btn'
          onClick={() => dispatch({ type: ACTION.TG_COLOR })}>
          color
        </button>
      </section>
      <br />
      <br />
      <p>{state.userInput}</p>
    </main>
  );
};

export default UseReducerWithDaveGray;

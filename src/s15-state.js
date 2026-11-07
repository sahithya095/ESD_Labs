// Section 15 — Build your own useState

// A tiny version of React's useState.
export function useState(initial, onChange) {
  let state = initial;

  const getState = () => state;

  const setState = (next) => {
    const value = typeof next === "function" ? next(state) : next;
    if (Object.is(value, state)) return;
    state = value;
    onChange();
  };

  return [getState, setState];
}

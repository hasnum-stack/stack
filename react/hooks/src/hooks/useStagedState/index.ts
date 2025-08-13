import { useState, useEffect } from 'react';
function useStagedState<T>(options: { value: T; onChange?: (val: T) => void }) {
  const [state, setState] = useState<T>(options.value);

  useEffect(() => {
    setState(options.value);
  }, [options.value]);

  const commit = () => {
    options.onChange?.(state);
  };

  return {
    staged: state,
    setStaged: setState,
    commit,
  };
}

export default useStagedState;

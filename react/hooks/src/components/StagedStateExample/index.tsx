import React from 'react';
import useStagedState from '../../hooks/useStagedState';

const StagedStateExample = () => {
  const { staged, setStaged, commit } = useStagedState({
    value: '',
    onChange: val => console.log('Committed value:', val),
  });
  return (
    <div>
      <input value={staged} onChange={e => setStaged(e.target.value)} />
      <button onClick={commit}>Commit</button>
      <p>Current staged state: {staged}</p>
    </div>
  );
};

const Container = () => {
  return <StagedStateExample />;
};
export default Container;

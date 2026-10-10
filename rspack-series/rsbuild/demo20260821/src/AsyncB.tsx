const AsyncB = async () => {
  const utils = await import('./shared/utils');
  return (
    <div>
      <h2>Async B</h2>
      <p>
        {utils.UTILS_MARKER} {utils.formatDate(Date.now())} uid={utils.uid()} loadCount={utils.currentLoadCount()}
      </p>
    </div>
  );
};

export default AsyncB;

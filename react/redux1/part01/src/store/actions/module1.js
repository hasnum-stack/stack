export const plusActionModule1 = payload => ({
  type: 'PLUS',
  payload,
});

export const minusActionModule1 = payload => ({
  type: 'MINUS',
  payload,
});

export const asyncPlusActionModule1 = payload => dispath => {
  setTimeout(() => {
    dispath({
      type: 'PLUS',
      payload,
    });
  }, 500);
};

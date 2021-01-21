/*
 * @Description:
 */
export function onRouteChange({ routes, matchedRoutes, location, action }) {
  console.log('🚀 ~ onRouteChange ~ action', action);
  console.log('🚀 ~ onRouteChange ~ location', location);
  console.log('🚀 ~ onRouteChange ~ routes', routes);
  console.log('🚀 ~ onRouteChange ~ matchedRoutes', matchedRoutes);
  document.title = `123`;
}

export function render(oldRender) {
  console.log('🚀 ~ render ~ oldRender', oldRender);
  oldRender();
}

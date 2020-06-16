/**
 *
 * Asynchronously loads the component for TheIssuePage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TheIssuePage = lazyLoad(
  () => import('./index'),
  module => module.TheIssuePage,
);

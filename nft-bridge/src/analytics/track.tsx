import splitbee from '@splitbee/web';

import { getLogger } from '../utils/logger';

const logger = getLogger('Analytics');

export const track = async (event: any, data: any) => {
  logger.debug('Sending track event...', { event, data });
  await splitbee.track(event, data);
  logger.debug('Track event sent.');
};

export const setUser = async (data: any) => {
  logger.debug('Set user', data);
  await splitbee.user.set(data);
};

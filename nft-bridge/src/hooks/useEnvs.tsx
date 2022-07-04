import { useMemo } from 'react';

import * as envs from '../config/envs';

export const useEnvs = () => useMemo(() => envs, []);

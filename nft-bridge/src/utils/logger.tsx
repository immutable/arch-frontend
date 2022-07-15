import jsLogger from 'js-logger';

jsLogger.useDefaults({ defaultLevel: jsLogger.ERROR });

const getLogger = (name: any) => {
  if (!name) {
    return jsLogger;
  }
  return jsLogger.get(name);
};

const getLogLevel = (name: any) => getLogger(name).getLevel();

const setLogLevel = (level: any, name: any) => {
  getLogger(name).setLevel(level);
};

export { getLogger, getLogLevel, setLogLevel };

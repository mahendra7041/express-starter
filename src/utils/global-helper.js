global.env = function env(key, defaultValue = undefined) {
  return process.env[key] ? process.env[key] : defaultValue;
};

Object.assign(env, process.env);

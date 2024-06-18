/* eslint-disable @typescript-eslint/no-use-before-define */
export const isUndefined = (obj) => typeof obj === "undefined";

export const isObject = (fn) => !isNil(fn) && typeof fn === "object";

export const isPlainObject = (fn) => {
  if (!isObject(fn)) {
    return false;
  }
  const proto = Object.getPrototypeOf(fn);
  if (proto === null) {
    return true;
  }
  const ctor =
    Object.prototype.hasOwnProperty.call(proto, "constructor") &&
    proto.constructor;
  return (
    typeof ctor === "function" &&
    ctor instanceof ctor &&
    Function.prototype.toString.call(ctor) ===
      Function.prototype.toString.call(Object)
  );
};

export const addLeadingSlash = (path) =>
  path && typeof path === "string"
    ? path.charAt(0) !== "/"
      ? "/" + path
      : path
    : "";

export const normalizePath = (path) =>
  path
    ? path.startsWith("/")
      ? ("/" + path.replace(/\/+$/, "")).replace(/\/+/g, "/")
      : "/" + path.replace(/\/+$/, "")
    : "/";

export const stripEndSlash = (path) =>
  path[path.length - 1] === "/" ? path.slice(0, path.length - 1) : path;

export const isFunction = (val) => typeof val === "function";
export const isString = (val) => typeof val === "string";
export const isNumber = (val) => typeof val === "number";
export const isConstructor = (val) => val === "constructor";
export const isNil = (val) => isUndefined(val) || val === null;
export const isEmpty = (array) => !(array && array.length > 0);
export const isSymbol = (val) => typeof val === "symbol";

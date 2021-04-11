export function findObjItems(obj, value) {
  for (var key in obj) {
    if (key === value) return obj[key];

    if (typeof obj[key] === "object") return findObjItems(obj[key], value);
  }
  return false;
}

export function getRoutes(obj) {
  return Object.values(obj).map((element) => element.route);
}

export function thousands(val) {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function looper(condition, triggeredFunc = () => {}, loopTime = 1000) {
  setTimeout(() => {
    if (condition) {
      triggeredFunc();
    } else {
      looper();
    }
  }, loopTime);
}

export const generateRandomJsonString = () => {
  const numberOfKeys = getRandomNumber({ min: 1, max: 5 });
  const keys = [];

  for (let i = 0; i < numberOfKeys; i++) {
    const keyString = getRandomString();
    const keyValue = getRandomValue();
    keys.push([keyString, keyValue]);
  }

  return formateJsonString(keys);
};

export const convertJsonToString = (jsonObj) => {
  return JSON.stringify(jsonObj, null, 2);
};

export const parseJsonString = (jsonString) => {
  const parsed = JSON.parse(jsonString);
  return convertJsonToString(parsed);
};

const formateJsonString = (keys) => {
  const keyPairStrings = keys.map((keyPair) => {
    const key = keyPair[0];
    let value = keyPair[1];

    if (typeof value === "string") {
      value = `"${value}"`;
    } else if (typeof value === "object" && !Array.isArray(value)) {
      value = formateJsonString(Object.entries(value));
    } else if (Array.isArray(value)) {
      value = `[${value.map((item) =>
        formateJsonString(Object.entries(item))
      )}]`;
    }

    return `"${key}":${value}`;
  });

  return `{${keyPairStrings.join(",")}}`;
};

const getRandomNumber = ({ min = 1, max = 10 } = {}) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomBoolean = () => {
  return itemPicker([true, false]);
};

const getRandomArray = () => {
  const length = getRandomNumber({ min: 1, max: 5 });

  const array = [];

  for (let i = 0; i < length; i++) {
    array.push(getRandomObject());
  }

  return array;
};

const getRandomObject = () => {
  const keyCount = getRandomNumber({ min: 1, max: 5 });

  const object = {};

  for (let i = 0; i < keyCount; i++) {
    const key = getRandomString();
    object[key] = getRandomString();
  }

  return object;
};

const getRandomString = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  const length = getRandomNumber({ min: 1, max: 5 });
  let string = "";

  for (let i = 0; i < length; i++) {
    string += itemPicker(alphabet);
  }

  return string;
};

const getRandomValue = () => {
  const type = getRandomType();

  switch (type) {
    case "string":
      return getRandomString({ maxLength: 50 });
    case "number":
      return getRandomNumber({ min: 1, max: 5000 });
    case "boolean":
      return getRandomBoolean();
    case "array":
      return getRandomArray({ maxLength: 10 });
    case "object":
      return getRandomObject({ maxLength: 10 });

    default:
      break;
  }
};

const getRandomType = () => {
  const dataTypes = ["number", "string", "boolean", "array", "object"];
  return itemPicker(dataTypes);
};

const itemPicker = (items) => {
  return items[parseInt(Math.random() * items.length)];
};

import { isObject } from 'lodash';
import { AllHtmlEntities as Entities } from 'html-entities';

export const normalizeHTMLEntities = (data) => {
  const entities = new Entities();
  const decodeString = (str) => entities.decode(str);

  const transform = (object) => {
    if (!isObject(object)) return object;
    const arr = Array.isArray(object) ? object : Object.keys(object);
    arr.forEach((item) => {
      const curItem = Array.isArray(object) ? item : object[item];
      return typeof curItem === 'string'
        ? decodeString(curItem)
        : typeof curItem === 'object'
          ? transform(curItem)
          : curItem;
    });
    return object;
  };
  return transform(data);
};

import RwcTypesEnum from '../components/rwc-types.enum';

/**
 * Type a value into the corresponding type
 * By default it will return the attrValue as string
 * @param attrValue
 * @param type
 */
const transformStringValueToTyped = (attrValue: string, type: RwcTypesEnum) => {
  try {
    switch (type) {
      case RwcTypesEnum.BOOLEAN:
        return Boolean(attrValue);
      case RwcTypesEnum.INTEGER:
        return parseInt(attrValue);
      case RwcTypesEnum.JSON:
        return JSON.parse(attrValue);
      default:
        return attrValue;
    }
  } catch (e) {
    throw new Error('Error on trying to type attribute');
  }
}

export default transformStringValueToTyped;

const camelCaseToKebabCase = (camelCaseName: string): string =>
  camelCaseName.trim().replace(/[A-Z]/g,
  (match: string, index: number) => {
    return index === 0 ? match.toLowerCase() : '-' + match.toLowerCase();
  });

export default camelCaseToKebabCase;

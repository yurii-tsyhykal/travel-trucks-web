export const formattedSpace = str => {
  return str.replace(/(\d)(m|km|cm|l|kg|s|h|min|ft|in|lbs)/g, '$1 $2');
};

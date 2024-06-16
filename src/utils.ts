export const generateRandomString = (length: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};


/**
 * Splits an array into two halves, ensuring the first half is longer if the length is odd.
 * @param {Array} array - The array to split.
 * @returns {Array[]} - An array containing the two halves.
 */
export function splitArrayInHalf<T>(array: T[]): [T[], T[]] {
  const midpoint = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, midpoint);
  const secondHalf = array.slice(midpoint);
  return [firstHalf, secondHalf];
}

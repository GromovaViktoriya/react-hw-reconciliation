export const arrOfThousand = Array.from({length: 1000}, (item, i) => i + 1);
export const arrWithKey = arrOfThousand.map(item => ({item, id:crypto.randomUUID()}))
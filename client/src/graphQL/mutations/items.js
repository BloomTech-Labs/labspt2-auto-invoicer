import { Post, inputToString } from '../index';

export const CreateItem = async (itemInput, returnedData) => {
  const result = inputToString(itemInput);

  const CreateItem = {
    query: `
      mutation {
        createItem(itemInput: {${result}}) {
          ${returnedData}
        }
      }
    `
  };
  const newItem = await Post(CreateItem);
  return newItem.data.data;
};

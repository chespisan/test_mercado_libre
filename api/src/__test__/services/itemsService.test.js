import * as functionsItems from 'services/itemsService'

describe('Test function of service items', () => {
  let spyItemsSearch = jest.fn();
  let spyItemsById = jest.fn();

  beforeEach(() => {
    spyItemsSearch = jest.spyOn(functionsItems, 'getItemsSearch')
    spyItemsById = jest.spyOn(functionsItems, 'getItemById')
  })

  test('Testing call getItemsSearch', async () => {
    const response = await functionsItems.getItemsSearch('Apple ipod')
    expect(Object.entries(response).length !== 0).toBeTruthy()
    expect(spyItemsSearch).toHaveBeenCalledTimes(1);
  })

  test('Testing call getItemById', async () => {
    const response = await functionsItems.getItemById('MLA918171240')
    expect(Object.entries(response).length !== 0).toBeTruthy()
    expect(spyItemsById).toHaveBeenCalledTimes(1);
  })

});

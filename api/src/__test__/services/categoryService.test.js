import * as functionCategory from 'services/categoryService'

describe('Test function of service category', () => {
  let spy = jest.fn();

  beforeEach(() => {
    spy = jest.spyOn(functionCategory, 'getCategoryById')
  })

  test('Testing call getCategoryById', async () => {
    const response = await functionCategory.getCategoryById('MLA121963')
    expect(Object.entries(response).length !== 0).toBeTruthy()
    expect(spy).toHaveBeenCalledTimes(1);
  })

});

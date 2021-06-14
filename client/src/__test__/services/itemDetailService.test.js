import { getItemById } from 'services/itemDetailService'

describe('Test function get items', () => {

  test('testing function getItemById', async () => {
    const data = await getItemById('MLA918171240')
    expect(Object.entries(data).length !== 0).toBeTruthy()
  })
});

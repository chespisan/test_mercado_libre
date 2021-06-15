import { getItems } from 'services/itemSearchService'

describe('Test function get items', () => {

  test('testing function getItems', async () => {
    const { data: { categories, items } } = await getItems('Apple ipod')
    expect(categories.length).toBeGreaterThan(0)
    expect(items.length).toBeGreaterThan(0)
  })
});

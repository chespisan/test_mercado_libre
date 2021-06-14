import { getCategoryById } from 'services/categoryService'

describe('Test function get category', () => {

  test('testing function getCategoryById', async () => {
    const { data } = await getCategoryById('MLA121963')
    expect(data.length).toBeGreaterThan(0)
  })
});

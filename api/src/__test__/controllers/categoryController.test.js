import * as categoryController from 'controllers/categoryController'

describe('Test category controller', () => {
  let spy = jest.fn()
  const res = {};
  res.status = () => res;
  res.json = () => res;
  const req = {
    params: {
      id: 'MLA121963'
    }
  }

  beforeEach(() => {
    spy = jest.spyOn(categoryController, 'categoryById')
    jest.clearAllMocks()
  })

  test('Testing function categoryById success', async () => {
    await categoryController.categoryById(req, res)
    expect(categoryController.categoryById).toHaveBeenCalledTimes(1)
  })

  test('Testing function categoryById error', async () => {
    await categoryController.categoryById(req, res)
    // expect(categoryController.categoryById).toHaveBeenCalledTimes(1)
  })
});
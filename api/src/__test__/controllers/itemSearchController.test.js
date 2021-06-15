import * as itemsController from 'controllers/itemSearchController'

describe('Test items search controller', () => {
  let spy = jest.fn()
  const res = {};
  res.status = () => res;
  res.json = () => res;
  let req = {
    query: {
      q: 'Apple ipod'
    }
  }

  beforeEach(() => {
    spy = jest.spyOn(itemsController, 'itemSearch')
    jest.clearAllMocks()
  })

  test('Testing function itemSearch with categories', async () => {
    req.query.q = 'Apple ipod'
    await itemsController.itemSearch(req, res)
    expect(itemsController.itemSearch).toHaveBeenCalledTimes(1)
  })

  test('Testing function itemSearch without categories', async () => {
    req.query.q = 'Apple'
    await itemsController.itemSearch(req, res)
    expect(itemsController.itemSearch).toHaveBeenCalledTimes(1)
  })

});
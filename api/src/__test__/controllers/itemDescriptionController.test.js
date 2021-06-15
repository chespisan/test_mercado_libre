import * as itemsController from 'controllers/itemDescriptionController'

describe('Test items description controller', () => {
  let spy = jest.fn()
  const res = {};
  res.status = () => res;
  res.json = () => res;
  const req = {
    params: {
      id: 'MLA918171240'
    }
  }

  beforeEach(() => {
    spy = jest.spyOn(itemsController, 'itemDescription')
  })

  test('Testing function itemDescription success', async () => {
    await itemsController.itemDescription(req, res)
    expect(itemsController.itemDescription).toHaveBeenCalledTimes(1)
  })

});
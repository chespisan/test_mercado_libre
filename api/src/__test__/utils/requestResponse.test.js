import * as method from 'utils/requestResponse'


describe('Test function', () => {
  const res = {};
  res.status = () => res;
  res.json = () => res;

  test('Testing method requestResponse', () => {
    jest.spyOn(method, 'requestResponse')
    method.requestResponse(res, 200, null, 'Ok')
    expect(method.requestResponse).toHaveBeenCalledTimes(1)
  })
});


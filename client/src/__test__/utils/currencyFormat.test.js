import { currencyFormat } from '../../utils/currencyFormat'

describe('Test Function currency', () => {
  test('Testing function currencyFormat success', () => {
    const numFormat = currencyFormat(1000)
    expect(numFormat).toContain('$')
  })

  test('Testing function currencyFormat error', () => {
    const numFormat = currencyFormat()
    expect(numFormat).toBeUndefined()
  })
});

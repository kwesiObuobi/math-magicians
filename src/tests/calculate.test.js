import calculate from '../logic/calculate';

describe('Test the "Calculate" function', () => {
  it('returns empty object with null values when "AC" is pressed', () => {
    const obj = {
      total: '4',
      next: '6',
      operation: '+',
    };
    const result = calculate(obj, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('returns empty object', () => {
    const obj = {
      total: '4',
      next: '0',
      operation: '+',
    };
    const result = calculate(obj, '0');
    expect(result).toEqual({});
  });

  test('perform an addition operation', () => {
    const obj = {
      total: '6',
      next: '7',
      operation: '+',
    };

    const result = calculate(obj, '=');

    expect(result.total).toBe('13');
    expect(result).toEqual({ total: '13', next: null, operation: null });
  });
});

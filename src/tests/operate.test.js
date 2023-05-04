import operate from '../logic/operate';

describe('Basic Arithmetic Operations', () => {
  it('should add 1 + 2 to equal 3', () => {
    const answer = operate(1, 2, '+');
    expect(Number(answer)).toBe(3);
  });

  it('should subtract 2 - 1 to equal 1', () => {
    const answer = operate(2, 1, '-');
    expect(Number(answer)).toBe(1);
  });

  it('should multiply 5 x 6 to equal 30', () => {
    const answer = operate(5, 6, 'x');
    expect(Number(answer)).toBe(30);
  });

  it('should divide 30 ÷ 5 to equal 6', () => {
    const answer = operate(30, 5, '÷');
    expect(Number(answer)).toBe(6);
  });

  it('should compute the modulo of 5 ÷ 2 to equal 1', () => {
    const answer = operate(5, 2, '%');
    expect(Number(answer)).toBe(1);
  });

  it('should throw an error when modulo divisor is 0', () => {
    const answer = operate(5, 0, '%');
    expect(answer).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});

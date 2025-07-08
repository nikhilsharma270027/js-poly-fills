require('./groupby.js')
// groupby.test.js
describe('Array.prototype.myGroupBy', () => {
  it('should group by existing key', () => {
    const sampleData = [
      { id: 1, category: 'A' },
      { id: 2, category: 'B' },
      { id: 3, category: 'A' },
      { id: 4, category: 'B' },
    ];

    const result = sampleData.myGroupBy('category');
    const expectedResult = {
      A: [{ id: 1, category: 'A' }, { id: 3, category: 'A' }],
      B: [{ id: 2, category: 'B' }, { id: 4, category: 'B' }],
    };

    expect(result).toEqual(expectedResult);
  });

  it('should handle empty array', () => {
    const sampleData = [];

    const result = sampleData.myGroupBy('category');
    const expectedResult = {};

    expect(result).toEqual(expectedResult);
  });

  it('should handle null or undefined values', () => {
    const sampleData = [
      { id: 1, category: 'A' },
      { id: 2, category: null },
      { id: 3, category: undefined },
      { id: 4, category: 'B' },
    ];

    const result = sampleData.myGroupBy('category');
    const expectedResult = {
      A: [{ id: 1, category: 'A' }],
      B: [{ id: 4, category: 'B' }],
      null: [{ id: 2, category: null }],
      undefined: [{ id: 3, category: undefined }],
    };

    expect(result).toEqual(expectedResult);
  });
});
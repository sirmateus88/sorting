describe('Split Array function', function() {
  it('is able to split an even array into two halves', function() {
  expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
  });

  it('is able to split an odd array into two halves', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
    });
});

describe('Merge Array function', function() {
  it('is able to merge two sorted arrays into a larger sorted array', function() {
  expect(merge([1,2],[3,4])).toEqual([1,2,3,4]);
  });

  it('is able to merge two sorted arrays with intersperced values and different lengths', function() {
    expect(merge([1,3,5,7,9],[2,4,6,8,10,12,14,16,18])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18]);
    });
});

describe('Merge Sort function', function() {
  it('is able to sort a reverse ordered even number array', function() {
  expect(mergeSort([4,3,2,1])).toEqual([1,2,3,4]);
  });

  it('is able to sort a random ordered odd number length array', function() {
    expect(mergeSort([1,100,3,5,7,9,2,4,6,8,10,12,14,16,18])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 100]);
    });
});

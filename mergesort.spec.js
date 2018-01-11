describe('Split Array function', function() {
  it('is able to split an even array into two halves', function() {
  expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
  });

  it('is able to split an odd array into two halves', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
    });
});

/*
describe('Bubble Sort Count', function(){
  beforeEach(function(){
    spyOn(window, 'swap').and.callThrough();
  });
  it('Fully sorted no swap', function(){
    bubbleSort([1,2,3]);
    expect(window.swap.calls.count()).toEqual(0);
  });
  it('Fully sorted no swap', function(){
    bubbleSort([3,2,1]);
    expect(window.swap.calls.count()).toEqual(3);
  });


});*/

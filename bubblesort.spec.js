describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a 1 item array', function(){
    expect( bubbleSort([5]) ).toEqual( [5] );
  });

  it('handles an already sorted array', function(){
    expect( bubbleSort([1,2,3,6,9]) ).toEqual( [1,2,3,6,9] );
  });

  it('handles a randomly sorted array', function(){
    expect( bubbleSort([3,0,5,8,7]) ).toEqual( [0,3,5,7,8] );
  });

  it('handles a worst case array', function(){
    expect( bubbleSort([5,4,3,2,1]) ).toEqual( [1,2,3,4,5] );
  });

  it('handles a duplicate within array', function(){
    expect( bubbleSort([5,4,3,2,4,1]) ).toEqual( [1,2,3,4,4,5] );
  });


});
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


});

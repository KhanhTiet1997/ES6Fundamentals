describe('spread operator', function() {
  // it('can spread an array across parameters...', function() {
  //   let doWork = function(a, b, c) {
  //     return a + b + c;
  //   };
  //   var arr = [1, 2, 3];
  //   var arr2 = [1, 2, 3, 4, 5];

  //   expect(doWork(...arr)).toBe(6);
  //   expect(doWork(...arr2)).toBe(6);
  // });

  it('can build array', function() {
    let arr = [1, 2, 3];
    let arrNew = [5, 6, ...arr, 7, 8];
    expect(arrNew.length).toBe(7);
    expect(arrNew).toEqual([5, 6, 1, 2, 3, 7, 8]);
  });
});

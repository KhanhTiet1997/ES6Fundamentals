"use strict";
describe('spread operator', function() {
  it('can build array', function() {
    var arr = [1, 2, 3];
    var arrNew = $traceurRuntime.spread([5, 6], arr, [7, 8]);
    expect(arrNew.length).toBe(7);
    expect(arrNew).toEqual([5, 6, 1, 2, 3, 7, 8]);
  });
});

//# sourceMappingURL=spreadOperator.js.map

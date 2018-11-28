"use strict";
describe('template literals', function() {
  it('can easily combine literals and data', function() {
    var category = 'music';
    var id = 2804;
    var url = ("http://" + category + "/" + id);
    expect(url).toBe('http://music/2804');
  });
});

//# sourceMappingURL=templateLiterals.js.map

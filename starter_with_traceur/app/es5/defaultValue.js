"use strict";
describe('provides defaults', function() {
  it('will provide a value for undefined, not with null', function() {
    var doWork = function() {
      var name = arguments[0] !== (void 0) ? arguments[0] : 'khanh';
      return name;
    };
    expect(doWork(5)).toBe(5);
    expect(doWork('')).toBe('');
    expect(doWork()).toBe('khanh');
    expect(doWork(null)).toBe(null);
  });
});

//# sourceMappingURL=defaultValue.js.map

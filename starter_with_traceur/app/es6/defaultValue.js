describe('provides defaults', function() {
  it('will provide a value for undefined, not with null', function() {
    var doWork = function(name = 'khanh') {
      return name;
    };
    expect(doWork(5)).toBe(5);
    expect(doWork('')).toBe('');
    expect(doWork()).toBe('khanh');
    expect(doWork(null)).toBe(null);
  });
});

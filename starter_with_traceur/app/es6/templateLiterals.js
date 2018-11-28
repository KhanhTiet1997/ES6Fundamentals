describe('template literals', function() {
  it('can easily combine literals and data', function() {
    let category = 'music';
    let id = 2804;

    let url = `http://${category}/${id}`;
    expect(url).toBe('http://music/2804');
  });
});

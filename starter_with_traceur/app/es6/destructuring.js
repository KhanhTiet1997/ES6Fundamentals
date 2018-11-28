describe('destructuring', function() {
  'use strict';
  it('can destructure array', function() {
    let [x, y] = [2, 3];
    expect(x).toBe(2);
    expect(y).toBe(3);
  });

  // it('can destructure object', function() {
  //   var person = {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     age: 50,
  //     eyeColor: 'blue'
  //   };
  //   let { firstName: first } = person;
  //   let { firstName } = person;

  //   expect(first).toBe('John');
  //   expect(firstName).toBe('John');
  // });
});

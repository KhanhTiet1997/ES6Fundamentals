describe('how let works', function() {
  it('will provide block scoping, unlike var 1', function() {
    var doWork = function(flag) {
      if (flag) {
        var x = 3;
      }
      return x;
    };

    var result = doWork(true);
    expect(result).toBe(3);
  });
});

describe('how let works', function() {
  it('will provide block scoping, unlike var 2', function() {
    var doWork = function(flag) {
      if (flag) {
        var x = 3;
      }
      return x;
    };

    var result = doWork(false);
    expect(result).toBe(3);
  });
});

describe('how let works', function() {
  it('will provide block scoping, unlike var 3', function() {
    var doWork = function(flag) {
      if (flag) {
        let x = 3;
      }
      return x;
    };

    var result = doWork(false);
    expect(result).toBe(3);
  });
});

describe('how let works', function() {
  it('will provide block scoping, unlike var 4', function() {
    var doWork = function(flag) {
      if (flag) {
        let x = 3;
        return x;
      }
    };

    var result = doWork(true);
    expect(result).toBe(3);
  });
});

describe('how let works', function() {
  it('will provide block scoping, unlike var for loop var', function() {
    var doWork = function() {
      for (var i = 0; i < 10; i++) {}
      return i;
    };

    var result = doWork();
    expect(result).toBe(10);
  });
});

describe('how let works', function() {
  it('will provide block scoping, unlike var for loop let', function() {
    var doWork = function() {
      for (let i = 0; i < 10; i++) {}
      return i;
    };

    var result = doWork();
    expect(result).toBe(3);
  });
});

describe('using const', function() {
  it('will make a variable read-only, if we try to assign, we will get syntax error', function() {
    const MAX_SIZE = 10;

    //MAX_SIZE = 12; //Syntax Error
    expect(MAX_SIZE).toBe(10);
  });

  it('an shadow outer declaration. Const have block scoping. Therefore, we cannot redeclare let or const in a same scope', function() {
    const x = 12;
    var doWork = function() {
      var x = 10;
      return x;
    };

    var result = doWork();
    expect(result).toBe(10);
    expect(x).toBe(12);
  });
});

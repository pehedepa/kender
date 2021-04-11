function strictEquals(a, b) {
    if (Object.is(a, NaN) && Object.is(b, NaN)) {
        return false;
    }
    else if (Object.is(a, 0) && Object.is(b, -0)) {
        return true;
    }
    else if (Object.is(a, -0) && Object.is(b, 0)) {
        return true;
    }
    return Object.is(a, b);
}

describe('Given strictEquals function', function() {
    [
        {a: 0, b: 0, result: true},
        {a: 0, b: 1, result: false},
        {a: 'a', b: 'a', result: true},
        {a: 'a', b: 'b', result: false},
        {a: 'a', b: 0, result: false},
        {a: undefined, b: undefined, result: true},
        {a: null, b: null, result: true},
        {a: 0, b: false, result: false},
        {a: "", b: false, result: false},
        {a: '0', b: 0, result: false},
        {a: '17', b: 17, result: false},
        {a: [1, 2], b: '1,2', result: false},
        {a: null, b: undefined, result: false},
        {a: 0, b: null, result: false},
        {a: 0, b: NaN, result: false},

        {a: 1, b: 1, result: true},
        {a: NaN, b: NaN, result: false},
        {a: 0, b: -0, result: true},
        {a: -0, b: 0, result: true},
        {a: 1, b: '1', result: false},
        {a: true, b: false, result: false},
        {a: false, b: false, result: true},
        {a: 'Water', b: 'oil', result: false},
    ].forEach(function(compare) {
        describe(`When ${compare.a} and ${compare.b} are compared`, function() {
            test(`Then the result must be ${compare.result}`, function () {
                //act
                let booleanAnswer = strictEquals(compare.a, compare.b);

                //assert
                expect(booleanAnswer).toBe(compare.result);
            })
        })
    })
});
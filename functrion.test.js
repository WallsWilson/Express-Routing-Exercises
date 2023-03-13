const { mean, median, mode, median } = require("./function");

describe("Mean function", function () {
    test('return mean', function () {
        let mean = mean(5,6,7,8,9);
        expect(mean).toEqual(7);
    });
});

describe('Median function', function() {
    test('return the median', function() {
        let median = median(4,1,7);
        expect(median).toEqual(4);
    });
});

describe('mode function', function() {
    test('retun the mode', function() {
        let mode = mode(4 , 2, 4, 3, 2, 2);
        expect(mode).toEqual(2);
    })
})
let protoArr = {
    get length() {
        let lengthCounter = 0;
        Object.keys(this).forEach(key => {
            lengthCounter++;
        })
        return lengthCounter;
    },
    push: function(value) {
        let nameCounter = this.length;
        this[nameCounter] = value;
    },
    filter: function(callback) { 
        const filteredArr = Object.create(protoArr);
        for (let i = 0; i < this.length; i++) {
            let isMatch = callback(this[i]);
            if (isMatch) filteredArr.push(this[i]);
        }
        return filteredArr;
    },
    map: function(callback) {
        const mappedArr = Object.create(protoArr);
        for (let i = 0; i < this.length; i++) {
            let newValue = callback(this[i]);
            mappedArr.push(newValue);
        }
        return mappedArr;
    },
    find: function(callback) {
        const findArr = Object.create(protoArr);
        for (let i = 0; i < this.length; i++) {
            let itemFound = callback(this[i]);
            if (itemFound) {
                findArr.push(itemFound);
                break;
            }
        }
        return findArr;
    },
    findIndex: function(whichValue) {
        const indexArr = Object.create(protoArr);
        Object.entries(this).forEach(entry => {
            let key = entry[0];
            let value = entry[1];
            if (whichValue === value) indexArr.push(key);
        })
        if (indexArr.length === 0) return -1;
        else return indexArr;
    },
    some: function(callback) {
        for (let i = 0; i < this.length; i++) {
            let isMatch = callback(this[i]);
            if (isMatch) return true
        }
        return false;
    },
    every: function(commonValue) {
        let matchCounter = 0;
        Object.values(this).forEach(value => {
            if (value === commonValue) matchCounter++
        })
        if (matchCounter === this.length) return true;
        else return false;
    },
}

let obj = { __proto__: protoArr };

describe('Given an object', function() {
    describe('When hasOwnProperty is called with argument \'length\'', function() {
        test('Then return false', function() {
            //ACT
            let output = obj.hasOwnProperty('length');
            //ASSERT
            expect(output).toBe(false);
        });
    }); 

    describe('When function length is called', function() {
        test('Then return 0', function() {
            //ACT
            let output = obj.length;
            //ASSERT
            expect(output).toEqual(0);
        })
    })

    describe('When function push is called with argument \'Skylab\'', function() {
        test('Then object[0] will be \'Skylab\'', function() {
            //ACT
            obj.push('Skylab');
            //ASSERT
            expect(obj[0]).toBe('Skylab');
        })
        test('Then length property will be 1', function() {
            //ACT
            let output = obj.length;
            //ASSERT
            expect(output).toEqual(1);
        })
    })

    describe('When function push is called with argument \'Bootcamp\'', function() {
        test('Then object[1] will be \'Bootcamp\'', function() {
            //ACT
            obj.push('Bootcamp');
            //ASSERT
            expect(obj[1]).toBe('Bootcamp');
        })
        test('Then length property will be 2', function() {
            //ACT
            let output = obj.length;
            //ASSERT
            expect(output).toEqual(2);
        })
    })
    
    describe('When function push is called with argument 202101', function() {
        test('Then object[2] will be 202101', function() {
            //ACT
            obj.push(202101);
            //ASSERT
            expect(obj[2]).toBe(202101);
        })
        test('Then length property will be 3', function() {
            //ACT
            let output = obj.length;
            //ASSERT
            expect(output).toEqual(3);
        })
    })
    describe('When function push is called with argument boolean', function() {
        test('Then object[3] will be true', function() {
            //ACT
            obj.push(true);
            //ASSERT
            expect(obj[3]).toBe(true);
        })
        test('Then length property will be 4', function() {
            //ACT
            let output = obj.length;
            //ASSERT
            expect(output).toEqual(4);
        })
    })

    describe('When function filter is called with argument \'Skylab\'', function() {
        test('Then value of \'Skylab\' will be returned in the resulting Filter Array', function() {
            //ACT
            let resultArray = obj.filter(x => x === 'Skylab');
            //ASSERT
            expect(resultArray[0]).toEqual("Skylab");
        })
    })

    describe('When function filter is called with argument \'Bootcamp\'', function() {
        test('Then value of \'Bootcamp\' will be returned in the resulting Filter Array', function() {
            //ACT
            let resultArray = obj.filter(x => x === 'Bootcamp');
            //ASSERT
            expect(resultArray[0]).toBe("Bootcamp");
        })
    })

    describe('When function filter is called with argument 202101', function() {
        test('Then value of 202101 will be returned in the resulting Filter Array', function() {
            //ACT
            let resultArray = obj.filter(x => x === 202101);
            //ASSERT
            expect(resultArray[0]).toBe(202101);
        })
    })

    describe('When function filter is called with argument true', function() {
        test('Then value of TRUE will be returned in the resulting Filter Array  ', function() { 
            //ACT
            let resultArray = obj.filter(x => x === true);
            //ASSERT
            expect(resultArray[0]).toBe(true);
        })
    })

    describe('When function map is called with argument \'x => "Skylab"\'', function() {
        test('Then value of Object[3] will be overriden', function() {
            //ACT
            let resultArray = obj.map(x => "Override");
            
            //ASSERT
            expect(resultArray[3]).toBe("Override");
        })
    })

    describe('When function map is called with argument (x => x * 2)', function() {
        test('Then a doubled value of Object[2] will be returned', function() {
            //ACT
            let resultArray = obj.map(x => x * 2);
            
            //ASSERT
            expect(resultArray[2]).toBe(404202);
        })
    })

    describe('When function map is called with argument (x => x + \'string\')', function() {
        test('Then a concatenated string \'Bootcampstring\' will be returned', function() {
            //ACT
            let resultArray = obj.map(x => x + "string");
            
            //ASSERT
            expect(resultArray[1]).toBe("Bootcampstring");
        })
    })

    describe('When function find is called with argument (x => x < 404202)', function() {
        test('Then a true value will be returned', function() {
            //ACT
            let resultArray = obj.find(x => x < 404202);
            
            //ASSERT
            expect(resultArray[0]).toBe(true);
        })
    })

    describe('When function find is called with argument (x => x === 202101)', function() {
        test('Then a false value will be returned', function() {
            //ACT
            let resultArray = obj.find(x => x === 202101);
            
            //ASSERT
            expect(resultArray[0]).toBe(true);
        })
    })

    describe('When function find is called with argument (x => x === \`omaha\`)', function() {
        test('Then a false value will be returned', function() {
            //ACT
            let resultArray = obj.find(x => x === "omaha");
            
            //ASSERT
            expect(resultArray[0]).toBe(undefined);
        })
    })

    describe('When function find is called with argument (x => x === true)', function() {
        test('Then a true value will be returned', function() {
            //ACT
            let resultArray = obj.find(x => x === true);
            
            //ASSERT
            expect(resultArray[0]).toBe(true);
        })
    })

    describe('When function findIndex is called with argument \'Bootcamp\'', function() {
        test('Then its Index value [1] will be returned as a string', function() {
            //ACT
            let resultArray = obj.findIndex("Bootcamp");
            
            //ASSERT
            expect(resultArray[0]).toEqual("1");
        })
    })

    describe('When function findIndex is called with argument \'Cheerios\'', function() {
        test('Then as a non-existant value, a -1 will be returned', function() {
            //ACT
            let resultArray = obj.findIndex("Cheerios");
            
            //ASSERT
            expect(resultArray).toEqual(-1);
        })
    })

    describe('When function Every is called and every property has been mapped to 15', function() {
        test('Then as every property value is 15, true will be returned', function() {
            //ARRANGE
            let mappedArray = obj.map(x => 15);
            //ACT
            let resultArray = mappedArray.every(15);
            
            //ASSERT
            expect(resultArray).toBe(true);
        })
    })

    describe('When function Some is called with argument \'x => x % 2 === 0\'', function() {
        test('Then a true value will be returned since value (2) was arranged in array', function() {
            //ARRANGE
            obj.push(2);
            //ACT
            let resultArray = obj.some(x => x % 2 === 0);
            
            //ASSERT
            expect(resultArray).toBe(true);
        })
    })
})

var expect = require('chai').expect,
    Minimum = require('../src/minimum')

describe('Minimum', function(){
    it('should create a new minimum', function(){
        var a = new Minimum();
        expect(a.minimum).to.equal(0);

        a = new Minimum(12);
        expect(a.minimum).to.equal(12);
    });

    describe('add()', function() {
        it ('should accept a value to update itself with it', function() {
            var a = new Minimum(5);
            expect(a.minimum).to.equal(5);
            a.add(12)
            expect(a.minimum).to.equal(5);
            a.add(3);
            expect(a.minimum).to.equal(3);
        });

        it ('should accept another minimum to update itself with it', function() {
            var a = new Minimum(5),
                b = new Minimum(12);


            expect(a.minimum).to.equal(5);
            a.add(b)
            expect(a.minimum).to.equal(5);

            expect(b.minimum).to.equal(12);
            b.add(a);
            expect(a.minimum).to.equal(5);
            expect(b.minimum).to.equal(5);
        });
    });
})

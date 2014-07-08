var expect = require('chai').expect,
    Mean = require('../src/mean')

describe('Mean', function(){
    it('should create a new mean with count and total properties', function(){
        var a = new Mean(12,3);
        expect(a.total).to.equal(12);
        expect(a.count).to.equal(3);
    });

    it('should have an mean property', function() {
        var a = new Mean(12,3);
        expect(a.mean).to.equal(4);

        a = new Mean(50, 5);
        expect(a.mean).to.equal(10);
    });

    describe('add()', function() {
        it ('should accept another Mean to update itself with it', function() {
            var a = new Mean(12,3);
            expect(a.mean).to.equal(4);

            var b = new Mean(10, 2);
            expect(b.mean).to.equal(5);

            a.add(b);

            expect(a.total).to.equal(22);
            expect(a.count).to.equal(5);
            expect(a.mean).to.equal(4.4);
        });

        it('should accept another total, count pair to update itself with it', function() {
            var a = new Mean(12,3);
            expect(a.mean).to.equal(4);

            a.add(10, 2);

            expect(a.total).to.equal(22);
            expect(a.count).to.equal(5);
            expect(a.mean).to.equal(4.4);
        });

        it('should accept just a number, to update itself with it', function() {
            var a = new Mean(12,3);
            expect(a.mean).to.equal(4);

            a.add(8);

            expect(a.total).to.equal(20);
            expect(a.count).to.equal(4);
            expect(a.mean).to.equal(5);
        });
    });
})

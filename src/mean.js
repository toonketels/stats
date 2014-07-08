'use strict';

function Mean(total, count) {
    this.total = total;
    this.count = count;
}

Object.defineProperty(Mean.prototype, 'mean', {
    enumerable: true,
    configurable: false,
    get: function() { return this.total/this.count; }
});

Mean.prototype.add = function add(total, count) {
    if (typeof total === 'object' && total.constructor.name === 'Mean') {
        var otherMean = total;
        total = otherMean.total;
        count = otherMean.count;
    } else {
        count = count || 1;
    }
    this.total += total;
    this.count += count;
};

module.exports = Mean;

'use strict';

function Minimum(value) {
    this.minimum = value || 0;
}

Minimum.prototype.add = function add(value) {
    if (typeof value === 'object' && value.constructor.name === 'Minimum')
        value = value.minimum;
    if (this.minimum > value) this.minimum = value;
};

module.exports = Minimum;

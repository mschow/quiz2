'use strict';

function bindName(firstName, lastName, func) {

var bindedFunction = func.bind(null, firstName + " " + lastName);

return bindedFunction;

}

module.exports = bindName;

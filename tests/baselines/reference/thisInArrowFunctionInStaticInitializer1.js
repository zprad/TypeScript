//// [thisInArrowFunctionInStaticInitializer1.ts]
function log(a) { }

class Vector {
 static foo = () => {
  // 'this' should not be available in a static initializer.
  log(this);
 }
}

//// [thisInArrowFunctionInStaticInitializer1.js]
var _this = this;
function log(a) { }
var Vector = /** @class */ (function () {
    function Vector() {
    }
    Vector.foo = function () {
        // 'this' should not be available in a static initializer.
        log(_this);
    };
    return Vector;
}());

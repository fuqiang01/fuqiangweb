
function Validation() {

}

Validation.prototype.noEmpty = function () {
    if (this.val) {
        return true;
    }
    return false;
}

Validation.prototype.minLength = function (length) {
    if (this.val.length >= length) {
        return true;
    }
    return false;
}

Validation.prototype.maxLength = function (length) {
    if (this.val.length <= length) {
        return true;
    }
    return false;
}

Validation.prototype.regexp = function (reg) {

    reg = new RegExp(reg);
    console.log(this.val)
    if (reg.test(this.val)) {
        return true;
    }
    return false;
}

Validation.prototype.isMobile = function () {
    var reg = /^1[3456789]\d{9}$/;
    return this.regexp(reg);
}

Validation.prototype.isEmail = function () {
    var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    return this.regexp(reg);
}


Validation.prototype.results = function (val, arr) {

    arr = arr || [];
    this.val = val;
    this.dataArr = [];
    var self = this;
    var result = true;

    if (typeof arr == 'string') {
        this.dataArr.push(arr.split(':'));
    } else {

        arr.forEach(function (ele, index) {
            var newArr = ele.split(':');
            self.dataArr.push(newArr);
        })
    }

    this.dataArr.forEach(function (ele, index) {
        var type = ele[0];
        var info = ele[1];
        if (!self[type](info)) {
            result = false;
        }
    })

    return result;
}

Validation.prototype.add = function (type, rules) {

    this[type] = function () {
        if (!rules(this.val)) {
            return false;
        }
        return true;
    }
}

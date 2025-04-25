function addBinary() {
    var binaries = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        binaries[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, binaries_1 = binaries; _a < binaries_1.length; _a++) {
        var binary = binaries_1[_a];
        var decimal = 0;
        for (var i = 0; i < binary.length; i++) {
            decimal += (binary[binary.length - 1 - i] === '1' ? 1 : 0) * Math.pow(2, i);
        }
        sum += decimal;
    }
    return convertToBinary(sum);
}
function convertToBinary(num) {
    if (num === 0)
        return "0";
    var binary = '';
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}
console.log(addBinary('1010', '1101', '1111'));

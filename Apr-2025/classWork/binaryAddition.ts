function addBinary(...binaries: string[]): string {
    let sum = 0;

    for (const binary of binaries) {
        let decimal = 0;

        for (let i = 0; i < binary.length; i++) {
            decimal += (binary[binary.length - 1 - i] === '1' ? 1 : 0) * Math.pow(2, i);
        }

        sum += decimal;
    }

    return convertToBinary(sum);
}

function convertToBinary(num: number): string {
    if (num === 0) return "0";

    let binary = '';
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;
}

console.log(addBinary('10', '10')); 

export default addBinary;
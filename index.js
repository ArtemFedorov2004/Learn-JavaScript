function sumArrayValues(array) {
    let result = 0;
    if (!Array.isArray(array)) {
        throw new TypeError('Argument is not an array');
    }
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            throw new TypeError('Array element is not a number');
        }
        else {
            result += parseInt(array[i]);
        }

    }
    return result;
}
const array = [4, 'nn', 8];
//const array = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
//const array = '4445';
try {
    console.log(sumArrayValues(array));
}
catch (error) {
    if (error instanceof TypeError) {
        console.error(error);
    }
}
finally {
    console.log('...continue');
}
/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    } else if (numbers.length === 1) {
        return [...numbers, ...numbers];
    } else {
        return [numbers[0], numbers[numbers.length - 1]];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number) => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const converted = numbers.map((number) =>
        isNaN(parseInt(number)) ? 0 : parseInt(number)
    );
    return converted;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    //if it includes a dollar sign and it is a number, then parse it as an int. otherwise
    //it should be 0
    const removedDollars = amounts.map((amount) =>
        isNaN(parseInt(amount.replace("$", "")))
            ? 0
            : parseInt(amount.replace("$", ""))
    );
    return removedDollars;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    //mark all the strings with ! uppercase.
    const uppercase = messages.map((message) =>
        message.endsWith("!") ? message.toUpperCase() : message
    );
    //now that we have our uppercase array, we want to filter out the ones that don't have a question mark
    const filtered = uppercase.filter((string) => !string.endsWith("?"));

    return filtered;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    //we want to run filter on word.length < 4
    const filtered = words.filter((word) => word.length < 4);
    return filtered.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    //if empty list (or length = 0) return true
    if (colors.length === 0) {
        return true;
    }
    //every checks if every color is of type 'red' or 'green' or 'blue'
    return colors.every(
        (color) => color === "red" || color === "green" || color === "blue"
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    //reduce finds our total
    const total = addends.reduce(
        (runningTotal: number, num: number) => runningTotal + num,
        0
    );
    //string for each number in addends

    //return toString form of total= and then theNums
    return total.toString() + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */

function injectPositiveIfNegative(values: number[]): number[] {
    const newValues = [...values]; //array that we will manipulate on

    //find location of the first negative number
    const firstNegative = newValues.findIndex((value: number) => value < 0);

    //adds the first few values UP to the firstNegative
    const addFirstNValues = newValues.slice(0, firstNegative);

    //Now that we added the first N values together...
    const total = addFirstNValues.reduce(
        (runningTotal: number, number: number) => runningTotal + number,
        0
    );

    //reference the newValues array, and insert firstNegative + 1 the value of total
    newValues.splice(firstNegative + 1, 0, total);

    return newValues;
}

export function injectPositive(values: number[]): number[] {
    if (!values.some((number) => number < 0)) {
        const total = values.reduce(
            (runningTotal: number, num: number) => runningTotal + num,
            0
        );
        return [...values, total];
    }

    return injectPositiveIfNegative(values);
}

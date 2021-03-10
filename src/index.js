module.exports = function toReadable(num) {
    let number = [];
    number[0] = "zero";
    number[1] = "one";
    number[2] = "two";
    number[3] = "three";
    number[4] = "four";
    number[5] = "five";
    number[6] = "six";
    number[7] = "seven";
    number[8] = "eight";
    number[9] = "nine";

    number[10] = "ten";
    number[11] = "eleven";
    number[12] = "twelve";
    number[13] = "thirteen";
    number[14] = "fourteen";
    number[15] = "fifteen";
    number[16] = "sixteen";
    number[17] = "seventeen";
    number[18] = "eighteen";
    number[19] = "nineteen";

    number[20] = "twenty";
    number[30] = "thirty";
    number[40] = "forty";
    number[50] = "fifty";
    number[60] = "sixty";
    number[70] = "seventy";
    number[80] = "eighty";
    number[90] = "ninety";

    number[100] = "hundred";
    //----------------------------
    let out = "";
    strNum = num.toString();

    if (strNum.length === 3) {
        out += number[strNum[0]] + " hundred ";
        strNum = strNum.slice(1);
        strNum = (+strNum).toString();
        if (strNum == 0) strNum = "";
    }
    if (strNum.length === 2) {
        if (number[strNum]) {
            out += number[strNum];
            strNum = "";
        } else {
            out += number[strNum[0] + "0"] + " ";
            strNum = strNum.slice(1);
        }
    }
    if (strNum.length === 1) {
        out += number[strNum];
        strNum = "";
    }

    return out.trim();
};

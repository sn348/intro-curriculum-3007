'use strict';

//テストコードではリストaを関数isMultipleOfSeventeenでfilterしている
//これにマッチするisMultipleOfSeventeenを定義すればよい

function isMultipleOfSeventeen(num)
{
    return num % 17 === 0;
}

module.exports = {
    isMultipleOfSeventeen
};
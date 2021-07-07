// Code your solution in this file!

const returnFirstTwoDrivers = function (arr) {
    return arr.slice(0,2)
};

const returnLastTwoDrivers = function (arr) {
    return arr.slice(arr.length - 2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
};

const fareDoubler = function (fare) {
    return createFareMultiplier(fare)(2)
};

const fareTripler = function (fare) {
    return createFareMultiplier(fare)(3)
};

function selectDifferentDrivers (arr, func) {
    return func(arr);
};

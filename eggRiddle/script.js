/**
 * Created by bill on 12/9/16.
 */

// Create eggs and shuffle them
var eggs = [2, 1, 1, 1, 1, 1, 1, 1, 1];
var shuffledEggsArr = [];

function getRanNum (max){
    return Math.floor(Math.random() * max);
}

function shuffleEggs(){
    for (var i = 0; i < eggs.length;){
        var ranNum = getRanNum(eggs.length-1);
        shuffledEggsArr.push(eggs.splice(ranNum, 1)[0]);
    }
}

shuffleEggs();


// Put eggs into starting groups of 3
var eggGroups = [[shuffledEggsArr[0],  shuffledEggsArr[1], shuffledEggsArr[2]],
    [shuffledEggsArr[3],  shuffledEggsArr[4], shuffledEggsArr[5]],
    [shuffledEggsArr[6], shuffledEggsArr[7], shuffledEggsArr[8]]];


// Scale weighs each group and returns the heavier group
// 0 is left scale, 1 is right scale, 2 is set aside

function scale(theArr){
    console.log('theArr is : ', theArr);
    var theSum = 0;
    var allSums = [];

    for(var i = 0; i < theArr.length; i++){
        if (theArr[i].length == undefined){
            theSum += theArr[i];
        }
        for (var j = 0; j < theArr[i].length; j++){
                theSum += theArr[i][j];
        }
        allSums.push(theSum);
        theSum = 0;
        theSums = [];
    }
    console.log('allSums is : ', allSums);

    if (allSums[0] == allSums[1]){
        // egg is in pile
        console.log('scale is even and theArr[2] is : ', theArr[2]);
        return theArr[2]
    } else if (allSums[0] > allSums[1]){
        // egg is in left
        console.log('scale is tipping left and theArr[0] is : ', theArr[0]);
        return theArr[0];
    } else {
        // egg is in right
        console.log('scale is tipping right and theArr[1] is : ', theArr[1]);
        return theArr[1];
    }
}

// Weigh the eggs twice
scale(scale(eggGroups));
/**
 * Created by bill on 12/9/16.
 */


// The warden meets with 23 new prisoners when they arrive.
// He tells them, "You may meet today and plan a strategy.
// But after today, you will be in isolated cells and will have no communication with one another.
//
// "In the prison is a switch room, which contains two light switches labeled A and B,
// each of which can be in either the 'on' or the 'off' position. I am not telling you their present positions.
// The switches are not connected to anything.
//
// "After today, from time to time whenever I feel so inclined,
// I will select one prisoner at random and escort him to the switch room.
// This prisoner will select one of the two switches and reverse its position.
// He must move one, but only one of the switches.  He can't move both but he can't move none either.
// Then he'll be led back to his cell.
//
// "No one else will enter the switch room until I lead the next prisoner there,
// and he'll be instructed to do the same thing.  I'm going to choose prisoners at random.
// I may choose the same guy three times in a row, or I may jump around and come back.
//
// "But, given enough time, everyone will eventually visit the switch room as many times as everyone else.
// At any time anyone of you may declare to me, 'we have all visited the switch room' and be 100% sure.
//
// "If it is true, then you will all be set free.
// If it is false, and somebody has not yet visited the switch room, you will be fed to the alligators."
//
// What is the strategy they come up with so that they can be free?

var prisonersArr = [];
var prisonersArr2 = [];

var prisoners = 23;
var switchA = false;
var switchB = false;
var captainsCount = 0;
var captainIsSure = false;
var wardenVerified = true;

// Warden chooses prisoner
var wardensChoice = 0;

function choosePrisoner() {
    wardensChoice = Math.floor(Math.random() * prisoners + 1);
}

function flipB() {
    if (switchB) {
        switchB = false;
    }
    else {
        switchB = true;
    }
}

function tellWardenEveryoneHasGone() {
    captainIsSure = true;

    for (var i = 2; i<24; i++){
        var arr1Check = prisonersArr.indexOf(i);
        // var arr2Check = prisonersArr2.indexOf(i);

        if (arr1Check == -1){
            wardenVerified = false;
        }
    }
    if (wardenVerified) {
        console.log('The prisoners have been freed because smart', prisonersArr, prisonersArr2);
    } else {
        console.log('The prisoners were all fed to the alligators.', prisonersArr, prisonersArr2);

    }
}

while (!captainIsSure) {
    choosePrisoner();

    // Warden chose captain
    if (wardensChoice == 1) {
        console.log('warden chose captain');
        if (switchA == true) {
            captainsCount++;
            console.log('captainsCount is : ', captainsCount);
            switchA = false;
            if (captainsCount == 44) {
                tellWardenEveryoneHasGone();
            }
        }
        else {
            flipB();
        }
    }

// Warden chose someone else
    if (wardensChoice > 1 && wardensChoice < 24) {
        console.log('warden chose prisoner');
        if (switchA) {
            flipB();
        } else {
            // If user has not flipped A yet, flip A, else flip B
            var hasPrisonerGone = prisonersArr.indexOf(wardensChoice);
            var hasPrisonerGoneTwice = prisonersArr2.indexOf(wardensChoice);

            if (hasPrisonerGone == -1) {
                switchA = true;
                prisonersArr.push(wardensChoice);
                prisonersArr.sort();
                console.log('prisoner was pushed and pris.length is : ', prisonersArr.length);
            } else if (hasPrisonerGoneTwice == -1) {
                switchA = true;
                prisonersArr2.push(wardensChoice);
                prisonersArr2.sort();
            }
            else {
                flipB();
            }
        }
    }
}
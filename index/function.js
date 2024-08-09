//  Test functions

// function testDivBlank() {
//     document.getElementById("testDiv1").innerHTML = "Blank";
// }

// function difText() {
//     document.getElementById("testDiv2").innerHTML = "Nå er texten anderledes!";
// }

// showNumber-funtcions (1-4) provided below.

function showNumber1() {
    document.getElementById("numberAndButtons").innerHTML = /*HTML*/ `
     <div style="display:flex">
            <button onclick="showNumber4()">⬅️</button>
            1
            <button onclick="showNumber2()">➡️</button>
        </div>`;
}

function showNumber2() {
    document.getElementById("numberAndButtons").innerHTML = /*HTML*/ ` 
     <div style="display:flex;">
            <button onclick="showNumber1()">⬅️</button>
            2
            <button onclick="showNumber3()">➡️</button>
        </div>`;
}

function showNumber3() {
    document.getElementById("numberAndButtons").innerHTML = /*HTML*/ ` 
     <div style="display:flex;">
            <button onclick="showNumber2()">⬅️</button>
            3
            <button onclick="showNumber4()">➡️</button>
        </div>`;
}

function showNumber4() {
    document.getElementById("numberAndButtons").innerHTML = /*HTML*/ ` 
     <div style="display: flex; align-items:center;">
            <button onclick="showNumber3()">⬅️</button>
            4
            <button onclick="showNumber1()">➡️</button>
        </div>`;
}

// IMG Functions and tags

// -------------------------!!Head!!--------------------------------------------------

function showHead1() {
    document.getElementById("allHeads").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showHead4()">⬅️</button>
            <div> <img src="IMG/head1.png" /> </div>
            <button onclick="showHead2()">➡️</button>

        </div>`;
}

function showHead2() {
    document.getElementById("allHeads").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button class="buttonSizeAgain" onclick="showHead1()">⬅️</button>
            <div> <img src="IMG/head2.pnG" /> </div>
            <button onclick="showHead3()">➡️</button>

        </div>`;
}

function showHead3() {
    document.getElementById("allHeads").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showHead2()">⬅️</button>
            <div> <img src="IMG/head3.png" /> </div>
            <button onclick="showHead4()">➡️</button>

        </div>`;
}

function showHead4() {
    document.getElementById("allHeads").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showHead3()">⬅️</button>
            <div> <img src="IMG/head4.png" /> </div>
            <button onclick="showHead1()">➡️</button>

        </div>`;
}

//-------------------------!!Body!!----------------------------------------------------

function showBody1() {
    document.getElementById("allBodies").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showBody4()">⬅️</button>
            <div> <img src="IMG/body1.png" /> </div>
            <button onclick="showBody2()">➡️</button>

        </div>`;
}

function showBody2() {
    document.getElementById("allBodies").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showBody1()">⬅️</button>
            <div> <img src="IMG/body2.pnG" /> </div>
            <button onclick= "showBody3()">➡️</button>

        </div>`;
}

function showBody3() {
    document.getElementById("allBodies").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showBody2()">⬅️</button>
            <div> <img src="IMG/body3.png" /> </div>
            <button onclick="showBody4()">➡️</button>

        </div>`;
}

function showBody4() {
    document.getElementById("allBodies").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showBody3()">⬅️</button>
            <div> <img src="IMG/body4.png" /> </div>
            <button onclick="showBody1()">➡️</button>

        </div>`;
}

//---------------------!!Legs!!-------------------------------------------------------

function showLegs1() {
    document.getElementById("allLegs").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick="showLegs4()">⬅️</button>
            <div> <img src="IMG/legs1.png" /> </div>
            <button onclick="showLegs2()">➡️</button>

        </div>`;
}

function showLegs2() {
    document.getElementById("allLegs").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick= "showLegs1()">⬅️</button>
            <div> <img src="IMG/legs2.pnG" /> </div>
            <button onclick= "showLegs3()">➡️</button>

        </div>`;
}

function showLegs3() {
    document.getElementById("allLegs").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick= "showLegs2()">⬅️</button>
            <div> <img src="IMG/legs3.png" /> </div>
            <button onclick= "showLegs4()">➡️</button>

        </div>`;
}

function showLegs4() {
    document.getElementById("allLegs").innerHTML = /*HTML*/ `
        <div style="display: flex; align-items:center;">
            <button onclick= "showLegs3()">⬅️</button>
            <div> <img src="IMG/legs4.png" /> </div>
            <button onclick= "showLegs1()">➡️</button>

        </div>`;
}

//-----------------------!!Close innerCard!!-----------------------------------------------------------------

function closeInnerCardTest() {
    document.getElementById("innerCard").innerHTML = "";
}

//--------------------------------------------------------------------------------------------------------

function closeInnerCard1() {
    document.getElementById("innerCard1").innerHTML = "";
}

function closeInnerCard2() {
    document.getElementById("innerCard2").innerHTML = "";
}

function closeInnerCard3() {
    document.getElementById("innerCard3").innerHTML = "";
}

function closeInnerCard4() {
    document.getElementById("innerCard4").innerHTML = "";
}

function closeInnerCard5() {
    document.getElementById("innerCard5").innerHTML = "";
}

//--------------------!!Open innerCard!!----------------------------------------

function openInnerCardTest() {}

//--------------------------------------------------------------------------------

function openInnerCard1() {

}

function openInnerCard2() {

}

function openInnerCard3() {

}

function openInnerCard4() {

}

function openInnerCard5() {
    
}

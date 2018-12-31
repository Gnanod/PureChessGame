var stringIdArray = ["A", "B", "C", "D", "E", "F", "G", "H"];
var numberIdArray = [1, 2, 3, 4, 5, 6, 7, 8];
var tiles;
var chesspices;
var countArray = new Array(15);
var currentDagId;
var currentDragId;
var currentPiece;
var onceDragable;
var stringArrayPosition;
var numberArrayPosition;
var currentPieceNow;
var cutFirstPiece;
var cuttingChessPieceId;
var divElemetId = [1,2,3,4,5,6,,7,8,9,10,11,12,13,14,15,16] ;

$(document).ready(function () {
    tiles = $(".square");
    chesspices = $(".AllPices");
    onceDragable = "white";
    for (var i = 0; i < countArray.length; i++) {
        countArray[i] = 0;
    }

});

$('.square').click(selectPathOfChessPices);

function selectPathOfChessPices() {
    currentPiece = $(this);
    checkIdMethod(currentPiece);
    if (currentPiece.children().hasClass('blackpone')) {
        pathOfBlackPawn1(currentPiece);

    }
    if (currentPiece.children().hasClass('whitePone')) {
        pathOfWhitePawn(currentPiece);

    }
    if (currentPiece.children().hasClass('blackRook')) {
        pathOfBlakRook(currentPiece);
    }
    if (currentPiece.children().hasClass('whiteRook')) {
        pathOfWhiteRook(currentPiece);
    }

    if (currentPiece.children().hasClass('blackKnight')) {
        pathOfBlackKnight(currentPiece);
    }

    if (currentPiece.children().hasClass('whiteKnight')) {
        pathOfWhiteKnight(currentPiece);
    }
    if (currentPiece.children().hasClass('whiteKing')) {
        pathOfWhiteKing(currentPiece);
    }
    if (currentPiece.children().hasClass('blackKing')) {
        pathOfBlackKing(currentPiece);
    }
    if (currentPiece.children().hasClass('blackBishop')) {
        console.log("PathOf Balck BIshop");
        pathOfblackBishop(currentPiece);

    }
    if (currentPiece.children().hasClass('whiteBishop')) {
        pathOfWhiteBishop(currentPiece);

    }
    if (currentPiece.children().hasClass('whiteQueen')) {
        pathOfWhiteQueen(currentPiece);
    }
    if (currentPiece.children().hasClass('blackQueen')) {
        pathOfBlackQueen(currentPiece);
    }
}


////////////////////////////////////// create tempary ID //////////////////////////////////////////////////

function checkIdMethod(eventData) {
    currentPiece = eventData;
    var currID = currentPiece.attr('id');
    //myCurrentPieceId =currID;
    var firstLetter = currID.charAt(0);
    var firstIdNo = currID.charAt(1);
    var chesspieceid = currentPiece.children().attr('id');
    stringArrayPosition = ($.inArray(firstLetter, stringIdArray));
    numberArrayPosition = ($.inArray(parseInt(firstIdNo), numberIdArray));

}

////////////////////////////////////check Count Array/////////////////////////////////////////////////////////////////////

function checkCountArray(evenData) {
    currentPiece = evenData;

    switch (currentPiece.attr('id')) {
        case "whitePone1" :
            countArray[0]++;
            break;
        case "whitePone2" :
            countArray[1]++;
            break;
        case "whitePone3" :
            countArray[2]++;
            break;
        case "whitePone4" :
            countArray[3]++;
            break;
        case "whitePone5" :
            countArray[4]++;
            break;
        case "whitePone6" :
            countArray[5]++;
            break;
        case "whitePone7" :
            countArray[6]++;
            break;
        case "whitePone8" :
            countArray[7]++;
            break;
        case "blackpone1" :
            countArray[8]++;
            break;
        case "blackpone2" :
            countArray[9]++;
            break;
        case "blackpone3" :
            countArray[10]++;
            break;
        case "blackpone4" :
            countArray[11]++;
            break;
        case "blackpone5" :
            countArray[12]++;
            break;
        case "blackpone6" :
            countArray[13]++;
            break;
        case "blackpone7" :
            countArray[14]++;
            break;
        case "blackpone8" :
            countArray[15]++;
            break;

    }

}
//////////////////////////////////////////path of black Queen ////////////////////////////////////////

function pathOfBlackQueen(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    chesspices.removeClass('afterClickPieces');
    chesspices.removeClass('cutPieceClass');
    checkIdMethod(currentPiece);

    /////////////////////////////////////////// daknu paththe haras athata adina hati ////////////////////////////////
    var a = stringArrayPosition + 1;
    var b = numberArrayPosition;

    var tempeoryId1;
    for (; a < 8; a++) {
        b++;
        tempeoryId1 = stringIdArray[a] + numberIdArray[b];
        if (!($('#' + tempeoryId1).children('img').hasClass('AllPices')) && onceDragable == "black") {
            for (; b < 8; b++) {
                $('#' + tempeoryId1).addClass('selectPath');
                currentPiece.children().addClass('afterClickPieces');

                break;
            }
        } else {
            break;
        }
    }

    if (($('#' + tempeoryId1).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId1).children().addClass('cutPieceClass');
        cuttingChessPieceId = currentPiece.children().attr('id');
        console.log(currentPiece.children().attr('id'));
    }
//////////////////////////////////////////////////////////////// H paththe sita A paththata mema athata ////////// gaman kirima ////
    var tempeoryId2;
    var c = stringArrayPosition;
    var d = numberArrayPosition;
    for (; d >= 0 && c > 0; d++) {
        c = c - 1;
        tempeoryId2 = stringIdArray[c] + numberIdArray[d + 1];

        if (!($('#' + tempeoryId2).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId2).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
        } else {
            break;
        }
    }
    if (($('#' + tempeoryId2).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId2).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
        console.log(currentPiece.children().attr('id'));
    }

    /////////////////////////////////////////////////////////////////////////////////////////  mema athata \\\\\\\ gaman karana akaraya
    var tempeoryId3;
    var e = stringArrayPosition;
    var f = numberArrayPosition;
    for (; f >= 0 && e >= 0; f--) {
        e = e - 1;
        tempeoryId3 = stringIdArray[e] + numberIdArray[f - 1];

        if (!($('#' + tempeoryId3).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId3).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
        } else {
            break;
        }
    }

    if (($('#' + tempeoryId3).children('img').hasClass('white'))) {
        $('#' + tempeoryId3).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
        console.log(currentPiece.children().attr('id'));
    }

    ///////////////////////////////////////////////////////////////////////////// mee athata  ///// apassata gaman karana akaraya

    var tempeoryId4;
    var g = stringArrayPosition;
    var h = numberArrayPosition;
    for (; h >= 0 && g >= 0; h--) {
        g = g + 1;
        tempeoryId4 = stringIdArray[g] + numberIdArray[h - 1];
        if (!($('#' + tempeoryId4).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId4).addClass('selectPath');
            $('#' + tempeoryId4).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
        } else {
            break;
        }
    }

    if (($('#' + tempeoryId4).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId4).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
        console.log(currentPiece.children().attr('id'));
    }

    //////////////////////// cross -----------> ///////////////////
    var i = stringArrayPosition + 1;
    var j = numberArrayPosition;
    var tempeoryId5;
    for (; i <= 7; i++) {
        tempeoryId5 = stringIdArray[i] + numberIdArray[j];
        if (!($('#' + tempeoryId5).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId5).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

        } else {
            break;
        }
    }

    if ($('#' + tempeoryId5).children('img').hasClass('white') && onceDragable == "black") {
        $('#' + tempeoryId5).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
        console.log(currentPiece.children().attr('id'));
    }

    //////////////////////////////////////////// <------------ cross//////////////////////////
    var k = stringArrayPosition - 1;
    var l = numberArrayPosition;
    var tempeoryId6;
    for (; k >= 0; k--) {
        tempeoryId6 = stringIdArray[a] + numberIdArray[l];
        if (!($('#' + tempeoryId6).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId6).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

        } else {
            break;
        }
    }

    if (!$('#' + tempeoryId6).children('img').hasClass('black') && onceDragable == "black") {
        $('#' + tempeoryId6).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
        console.log(currentPiece.children().attr('id'));
    }


    //////////////////////////////////////// cross down///////////////////////////

    var m = stringArrayPosition;
    var n = numberArrayPosition + 1;
    var tempeoryId7;


    for (; n < 8; n++) { //pawn issarahata yana hatiii
        tempeoryId7 = stringIdArray[m] + numberIdArray[n];


        if (!($('#' + tempeoryId7).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId7).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');


        } else {
            break;
        }

    }

    if (!$('#' + tempeoryId7).children('img').hasClass('black') && onceDragable == "black") {
        $('#' + tempeoryId7).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
        console.log(currentPiece.children().attr('id'));
        //redChessPieceTemId=tempeoryId;
        // console.log($('#'+redChessPieceTemId+'> div').children().clone());
    }

///////////////////////////////// cross Up /////////////////////////////////////////////////
    var o = stringArrayPosition;
    var p = numberArrayPosition - 1;
    var tempeoryId8;
    for (; p >= 0; p--) {
        tempeoryId8 = stringIdArray[o] + numberIdArray[p];
        if (!($('#' + tempeoryId8).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId8).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            //$('#A1').addClass('selectPath');
        } else {
            break;
        }
    }

    if (!($('#' + tempeoryId8).children('img').hasClass('black')) && onceDragable == "black") {
        $('#' + tempeoryId8).children().addClass('cutPieceClass');
        //redChessPieceTemId=tempeoryId;
        // console.log($('#'+redChessPieceTemId+'> div').children().clone());

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
}


/////////////////////////////////////////path Of white Queen /////////////////////////////////////////

function pathOfWhiteQueen(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    chesspices.removeClass('afterClickPieces');
    chesspices.removeClass('cutPieceClass');
    checkIdMethod(currentPiece);

    /////////////////////////////////////////// daknu paththe haras athata adina hati ////////////////////////////////
    var a = stringArrayPosition + 1;
    var b = numberArrayPosition;

    var tempeoryId1;
    for (; a < 8; a++) {
        b++;
        tempeoryId1 = stringIdArray[a] + numberIdArray[b];
        if (!($('#' + tempeoryId1).children('img').hasClass('AllPices')) && onceDragable == "white") {
            for (; b < 8; b++) {
                $('#' + tempeoryId1).addClass('selectPath');
                currentPiece.children().addClass('afterClickPieces');

                break;
            }
        } else {
            break;
        }
    }

    if (!$('#' + tempeoryId1).children('img').hasClass('white') && onceDragable == "white") {
        $('#' + tempeoryId1).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
//////////////////////////////////////////////////////////////// H paththe sita A paththata mema athata ////////// gaman kirima ////
    var tempeoryId2;
    var c = stringArrayPosition;
    var d = numberArrayPosition;
    for (; d >= 0 && c > 0; d++) {
        c = c - 1;
        tempeoryId2 = stringIdArray[c] + numberIdArray[d + 1];

        if (!($('#' + tempeoryId2).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempeoryId2).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
        } else {
            break;
        }
    }
    if (!$('#' + tempeoryId2).children('img').hasClass('white') && onceDragable == "white") {
        $('#' + tempeoryId2).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    /////////////////////////////////////////////////////////////////////////////////////////  mema athata \\\\\\\ gaman karana akaraya
    var tempeoryId3;
    var e = stringArrayPosition;
    var f = numberArrayPosition;
    for (; f >= 0 && e >= 0; f--) {
        e = e - 1;
        tempeoryId3 = stringIdArray[e] + numberIdArray[f - 1];

        if (!($('#' + tempeoryId3).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempeoryId3).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
        } else {
            break;
        }
    }

    if (!$('#' + tempeoryId3).children('img').hasClass('white') && onceDragable == "white") {
        $('#' + tempeoryId3).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    ///////////////////////////////////////////////////////////////////////////// mee athata  ///// apassata gaman karana akaraya

    var tempeoryId4;
    var g = stringArrayPosition;
    var h = numberArrayPosition;
    for (; h >= 0 && g >= 0; h--) {
        g = g + 1;
        tempeoryId4 = stringIdArray[g] + numberIdArray[h - 1];
        if (!($('#' + tempeoryId4).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempeoryId4).addClass('selectPath');
            $('#' + tempeoryId4).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
        } else {
            break;
        }
    }

    if (!$('#' + tempeoryId4).children('img').hasClass('white') && onceDragable == "white") {
        $('#' + tempeoryId4).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }

    //////////////////////// cross -----------> ///////////////////
    var i = stringArrayPosition + 1;
    var j = numberArrayPosition;
    var tempeoryId5;
    for (; i <= 7; i++) {
        tempeoryId5 = stringIdArray[i] + numberIdArray[j];
        if (!($('#' + tempeoryId5).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempeoryId5).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

        } else {
            break;
        }
    }

    if (!$('#' + tempeoryId5).children('img').hasClass('white') && onceDragable == "white") {
        $('#' + tempeoryId5).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    //////////////////////////////////////////// <------------ cross//////////////////////////
    var k = stringArrayPosition - 1;
    var l = numberArrayPosition;
    var tempeoryId6;
    for (; k >= 0; k--) {
        tempeoryId6 = stringIdArray[k] + numberIdArray[l];
        if (!($('#' + tempeoryId6).children('img').hasClass('AllPices')) && onceDragable == "white") {
              $('#' + tempeoryId6).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

        } else {
            break;
        }
    }

    if (!$('#' + tempeoryId6).children('img').hasClass('white') && onceDragable == "white") {
         $('#'+tempeoryId6).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }


    //////////////////////////////////////// cross down///////////////////////////

    var m = stringArrayPosition;
    var n = numberArrayPosition + 1;
    var tempeoryId7;


    for (; n < 8; n++) { //pawn issarahata yana hatiii
        tempeoryId7 = stringIdArray[m] + numberIdArray[n];


        if (!($('#' + tempeoryId7).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempeoryId7).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');


        } else {
            break;
        }

    }

    if (!$('#' + tempeoryId7).children('img').hasClass('white') && onceDragable == "white") {
        $('#' + tempeoryId7).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
        //redChessPieceTemId=tempeoryId;
        // console.log($('#'+redChessPieceTemId+'> div').children().clone());
    }

///////////////////////////////// cross Up /////////////////////////////////////////////////
    var o = stringArrayPosition;
    var p = numberArrayPosition - 1;
    var tempeoryId8;
    for (; p >= 0; p--) {
        tempeoryId8 = stringIdArray[o] + numberIdArray[p];
        if (!($('#' + tempeoryId8).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempeoryId8).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            //$('#A1').addClass('selectPath');
        } else {
            break;
        }
    }

    if (!$('#' + tempeoryId8).children('img').hasClass('white') && onceDragable == "white") {
        $('#' + tempeoryId8).children().addClass('cutPieceClass');
        //redChessPieceTemId=tempeoryId;
        // console.log($('#'+redChessPieceTemId+'> div').children().clone());

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

}


////////////////////////////////path of pathOfWhiteBishop ////////////////////////////////////////////

function pathOfWhiteBishop(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    chesspices.removeClass('afterClickPieces');
    chesspices.removeClass('cutPieceClass');
    checkIdMethod(currentPiece);

    /////////////////////////////////////////// daknu paththe haras athata adina hati ////////////////////////////////
    var a = stringArrayPosition + 1;
    var b = numberArrayPosition;

    var tempeoryId3;
    for (; a < 8; a++) {
        b++;
        tempeoryId3 = stringIdArray[a] + numberIdArray[b];
        if (!($('#' + tempeoryId3).children('img').hasClass('AllPices')) && onceDragable == "white") {
            for (; b < 8; b++) {
                $('#' + tempeoryId3).addClass('selectPath');
                currentPiece.children().addClass('afterClickPieces');

                break;
            }
        } else {
            break;
        }
    }

    if (($('#' + tempeoryId3).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId3).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
//////////////////////////////////////////////////////////////// H paththe sita A paththata mema athata ////////// gaman kirima ////
    var tempeoryId4;
    var c = stringArrayPosition;
    var d = numberArrayPosition;
    for (; d && c >= 0; d++) {
        c = c - 1;
        var x = d + 1;

        tempeoryId4 = stringIdArray[c] + numberIdArray[x];
        console.log(x);
        console.log("ttttttttttttttttttttttttttttttttttttttttttttt");
        console.log(tempeoryId4);
        console.log($('#' + tempeoryId4).children('img').hasClass('AllPices') && onceDragable == "white");
        if (!($('#' + tempeoryId4).children('img').hasClass('AllPices'))) {
            $('#' + tempeoryId4).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
        } else {
            break;
        }
    }
    if (($('#' + tempeoryId4).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId4).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    /////////////////////////////////////////////////////////////////////////////////////////  mema athata \\\\\\\ gaman karana akaraya
    var tempeoryId5;
    var e = stringArrayPosition;
    var f = numberArrayPosition;
    for (; f >= 0 && e >= 0; f--) {
        e = e - 1;
        tempeoryId5 = stringIdArray[e] + numberIdArray[f - 1];
        console.log("??????????????" + tempeoryId5);
        if (!($('#' + tempeoryId5).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempeoryId5).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
        } else {
            break;
        }
    }

    if (($('#' + tempeoryId5).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId5).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    ///////////////////////////////////////////////////////////////////////////// mee athata  ///// apassata gaman karana akaraya

    var tempeoryId7;
    var g = stringArrayPosition;
    var h = numberArrayPosition;
    for (; h >= 0 && g >= 0; h--) {
        g = g + 1;
        tempeoryId7 = stringIdArray[g] + numberIdArray[h - 1];
        if (!($('#' + tempeoryId7).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempeoryId7).addClass('selectPath');
            $('#' + tempeoryId7).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
        } else {
            break;
        }
    }

    if (($('#' + tempeoryId7).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId7).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
}
//////////////////////////////////////path blackBisop /////////////////////////////////////////////////////////////////////

function pathOfblackBishop(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    chesspices.removeClass('afterClickPieces');
    chesspices.removeClass('cutPieceClass');
    checkIdMethod(currentPiece);

    /////////////////////////////////////////// daknu paththe haras athata adina hati ////////////////////////////////
    var a = stringArrayPosition + 1;
    var b = numberArrayPosition;

    var tempeoryId3;
    for (; a < 8; a++) {
        b++;
        tempeoryId3 = stringIdArray[a] + numberIdArray[b];
        if (!($('#' + tempeoryId3).children('img').hasClass('AllPices')) && onceDragable == "black") {
            for (; b < 8; b++) {
                $('#' + tempeoryId3).addClass('selectPath');
                currentPiece.children().addClass('afterClickPieces');

                break;
            }
        } else {
            break;
        }
    }

    if (($('#' + tempeoryId3).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId3).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
//////////////////////////////////////////////////////////////// H paththe sita A paththata mema athata ////////// gaman kirima ////
    var tempeoryId4;
    var c = stringArrayPosition;
    var d = numberArrayPosition;
    console.log(stringArrayPosition);
    console.log(numberArrayPosition);
    for (; d >= 0 && c >= 0; d++) {
        c = c - 1;
        var x = d + 1;

        tempeoryId4 = stringIdArray[c] + numberIdArray[x];
        console.log(x);
        console.log("ttttttttttttttttttttttttttttttttttttttttttttt");
        console.log(tempeoryId4);
        console.log($('#' + tempeoryId4).children('img').hasClass('AllPices'));
        if (!($('#' + tempeoryId4).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId4).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
        } else {
            break;
        }
    }
    if (($('#' + tempeoryId4).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId4).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    /////////////////////////////////////////////////////////////////////////////////////////  mema athata \\\\\\\ gaman karana akaraya
    var tempeoryId5;
    var e = stringArrayPosition;
    var f = numberArrayPosition;
    for (; f >= 0 && e >= 0; f--) {
        e = e - 1;
        tempeoryId5 = stringIdArray[e] + numberIdArray[f - 1];
        console.log("??????????????" + tempeoryId5);
        if (!($('#' + tempeoryId5).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId5).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
        } else {
            break;
        }
    }

    if (($('#' + tempeoryId5).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId5).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    ///////////////////////////////////////////////////////////////////////////// mee athata  ///// apassata gaman karana akaraya

    var tempeoryId7;
    var g = stringArrayPosition;
    var h = numberArrayPosition;
    for (; h >= 0 && g >= 0; h--) {
        g = g + 1;
        tempeoryId7 = stringIdArray[g] + numberIdArray[h - 1];
        if (!($('#' + tempeoryId7).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId7).addClass('selectPath');
            $('#' + tempeoryId7).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
        } else {
            break;
        }
    }

    if (($('#' + tempeoryId7).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId7).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
}

/////////////////////////////////////////path of blackKing//////////////////////////////////


function pathOfBlackKing(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    chesspices.removeClass('afterClickPieces');
    chesspices.removeClass('cutPieceClass');
    checkIdMethod(currentPiece);


    var tempeoryId1 = stringIdArray[stringArrayPosition] + numberIdArray[numberArrayPosition - 1];
    var tempeoryId2 = stringIdArray[stringArrayPosition] + numberIdArray[numberArrayPosition + 1];
    var tempeoryId3 = stringIdArray[stringArrayPosition - 1] + numberIdArray[numberArrayPosition];
    var tempeoryId4 = stringIdArray[stringArrayPosition + 1] + numberIdArray[numberArrayPosition];
    var tempeoryId5 = stringIdArray[stringArrayPosition - 1] + numberIdArray[numberArrayPosition - 1];
    var tempeoryId6 = stringIdArray[stringArrayPosition + 1] + numberIdArray[numberArrayPosition - 1];
    var tempeoryId7 = stringIdArray[stringArrayPosition - 1] + numberIdArray[numberArrayPosition + 1];
    var tempeoryId8 = stringIdArray[stringArrayPosition + 1] + numberIdArray[numberArrayPosition + 1];

    if (!($('#' + tempeoryId1).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId1).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId1).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId1).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    if (!($('#' + tempeoryId2).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId2).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId2).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId2).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId3).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId3).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId3).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId3).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId4).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId4).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId4).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId4).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    if (!($('#' + tempeoryId5).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId5).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId5).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId5).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    if (!($('#' + tempeoryId6).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId6).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId6).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId6).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId7).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId7).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId7).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId7).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    if (!($('#' + tempeoryId8).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId8).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');

    }

    if (($('#' + tempeoryId8).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId8).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }
}


//////////////////////////////////////path of pathOfWhiteKing ////////////////////////////////////////////

function pathOfWhiteKing(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    chesspices.removeClass('afterClickPieces');
    chesspices.removeClass('cutPieceClass');
    checkIdMethod(currentPiece);


    var tempeoryId1 = stringIdArray[stringArrayPosition] + numberIdArray[numberArrayPosition - 1];
    var tempeoryId2 = stringIdArray[stringArrayPosition] + numberIdArray[numberArrayPosition + 1];
    var tempeoryId3 = stringIdArray[stringArrayPosition - 1] + numberIdArray[numberArrayPosition];
    var tempeoryId4 = stringIdArray[stringArrayPosition + 1] + numberIdArray[numberArrayPosition];
    var tempeoryId5 = stringIdArray[stringArrayPosition - 1] + numberIdArray[numberArrayPosition - 1];
    var tempeoryId6 = stringIdArray[stringArrayPosition + 1] + numberIdArray[numberArrayPosition - 1];
    var tempeoryId7 = stringIdArray[stringArrayPosition - 1] + numberIdArray[numberArrayPosition + 1];
    var tempeoryId8 = stringIdArray[stringArrayPosition + 1] + numberIdArray[numberArrayPosition + 1];

    if (!($('#' + tempeoryId1).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId1).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId1).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId1).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    if (!($('#' + tempeoryId2).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId2).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');

    }

    if (($('#' + tempeoryId2).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId2).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId3).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId3).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId3).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId3).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId4).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId4).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId4).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId4).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////
    if (!($('#' + tempeoryId5).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId5).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId5).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId5).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    if (!($('#' + tempeoryId6).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId6).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId6).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId6).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId7).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId7).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId7).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId7).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////
    if (!($('#' + tempeoryId8).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId8).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');

    }

    if (($('#' + tempeoryId8).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId8).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }
}

////////////////////////////////////////path of WhiteKnight//////////////////////////////////////////////////

function pathOfWhiteKnight(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    chesspices.removeClass('afterClickPieces');
    chesspices.removeClass('cutPieceClass');
    checkIdMethod(currentPiece);

    var tempeoryId1 = stringIdArray[stringArrayPosition + 1] + numberIdArray[numberArrayPosition + 2];
    var tempeoryId2 = stringIdArray[stringArrayPosition - 1] + numberIdArray[numberArrayPosition + 2];
    var tempeoryId3 = stringIdArray[stringArrayPosition + 2] + numberIdArray[numberArrayPosition + 1];
    var tempeoryId4 = stringIdArray[stringArrayPosition - 2] + numberIdArray[numberArrayPosition + 1];
    var tempeoryId5 = stringIdArray[stringArrayPosition + 2] + numberIdArray[numberArrayPosition - 1];
    var tempeoryId6 = stringIdArray[stringArrayPosition - 2] + numberIdArray[numberArrayPosition - 1];
    var tempeoryId7 = stringIdArray[stringArrayPosition - 1] + numberIdArray[numberArrayPosition - 2];
    var tempeoryId8 = stringIdArray[stringArrayPosition + 1] + numberIdArray[numberArrayPosition - 2];


    if (!($('#' + tempeoryId1).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId1).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId1).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId1).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    //////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId2).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId2).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId2).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId2).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }
    //////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId3).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId3).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId3).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId3).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }
    //////////////////////////////////////////////////////////////////////////////////////////////
    if (!($('#' + tempeoryId4).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId4).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId4).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId4).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }
    //////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId5).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId5).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId5).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId5).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }

    //////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId6).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId6).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId6).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId6).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    //////////////////////////////////////////////////////////////////////////////////////////////


    if (!($('#' + tempeoryId7).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId7).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId7).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId7).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    if (!($('#' + tempeoryId8).children('img').hasClass('AllPices')) && onceDragable == "white") {
        $('#' + tempeoryId8).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId8).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempeoryId8).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
}

/////////////////////////////////////////path of black Knight /////////////////////////////////////////////////////

function pathOfBlackKnight(evenData) {
    currentPiece = evenData;
    tiles.removeClass("selectPath");
    chesspices.removeClass('afterClickPieces');
    chesspices.removeClass('cutPieceClass');
    checkIdMethod(currentPiece);

    var tempeoryId1 = stringIdArray[stringArrayPosition + 1] + numberIdArray[numberArrayPosition + 2];
    var tempeoryId2 = stringIdArray[stringArrayPosition - 1] + numberIdArray[numberArrayPosition + 2];
    var tempeoryId3 = stringIdArray[stringArrayPosition + 2] + numberIdArray[numberArrayPosition + 1];
    var tempeoryId4 = stringIdArray[stringArrayPosition - 2] + numberIdArray[numberArrayPosition + 1];
    var tempeoryId5 = stringIdArray[stringArrayPosition + 2] + numberIdArray[numberArrayPosition - 1];
    var tempeoryId6 = stringIdArray[stringArrayPosition - 2] + numberIdArray[numberArrayPosition - 1];
    var tempeoryId7 = stringIdArray[stringArrayPosition - 1] + numberIdArray[numberArrayPosition - 2];
    var tempeoryId8 = stringIdArray[stringArrayPosition + 1] + numberIdArray[numberArrayPosition - 2];


    if (!($('#' + tempeoryId1).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId1).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId1).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId1).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    //////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId2).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId2).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId2).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId2).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }
    //////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId3).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId3).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId3).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId3).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }
    //////////////////////////////////////////////////////////////////////////////////////////////
    if (!($('#' + tempeoryId4).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId4).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId4).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId4).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }
    //////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId5).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId5).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId5).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId5).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }

    //////////////////////////////////////////////////////////////////////////////////////////////

    if (!($('#' + tempeoryId6).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId6).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId6).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId6).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }

    //////////////////////////////////////////////////////////////////////////////////////////////


    if (!($('#' + tempeoryId7).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId7).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId7).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId7).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    if (!($('#' + tempeoryId8).children('img').hasClass('AllPices')) && onceDragable == "black") {
        $('#' + tempeoryId8).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
    }

    if (($('#' + tempeoryId8).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempeoryId8).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }

}
///////////////////////////////////////////path of white Rook///////////////////////////////////////////////////////////

function pathOfWhiteRook(evenData) {
    currentPiece = evenData;
    tiles.removeClass("selectPath");
    chesspices.removeClass('afterClickPieces');
    chesspices.removeClass('cutPieceClass');
    checkIdMethod(currentPiece);

    //////////////////////// cross -----------> ///////////////////
    var k = stringArrayPosition + 1;
    var l = numberArrayPosition;
    var tempeoryId;
    for (; k <= 7; k++) {
        tempeoryId = stringIdArray[k] + numberIdArray[l];
        if (!($('#' + tempeoryId).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempeoryId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

        } else {
            break;
        }
    }

    if (!$('#' + tempeoryId).children('img').hasClass('white') && onceDragable == "white") {
        $('#' + tempeoryId).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');

    }

    //////////////////////////////////////////// <------------ cross//////////////////////////
    var a = stringArrayPosition - 1;
    var b = numberArrayPosition;
    var tempeoryId2;
    for (; a >= 0; a--) {
        tempeoryId2 = stringIdArray[a] + numberIdArray[b];
        if (!($('#' + tempeoryId2).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempeoryId2).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

        } else {
            break;
        }
    }

    if (!$('#' + tempeoryId2).children('img').hasClass('white') && onceDragable == "white") {
        $('#' + tempeoryId2).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }


    //////////////////////////////////////// cross down///////////////////////////

    var i = stringArrayPosition;
    var j = numberArrayPosition + 1;
    var tempeoryId1;


    for (; j < 8; j++) { //pawn issarahata yana hatiii
        tempeoryId1 = stringIdArray[i] + numberIdArray[j];


        if (!($('#' + tempeoryId1).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempeoryId1).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');


        } else {
            break;
        }

    }

    if (!$('#' + tempeoryId1).children('img').hasClass('white') && onceDragable == "white") {
        $('#' + tempeoryId1).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
        //redChessPieceTemId=tempeoryId;
        // console.log($('#'+redChessPieceTemId+'> div').children().clone());
    }


///////////////////////////////// cross Up /////////////////////////////////////////////////
    var c = stringArrayPosition;
    var d = numberArrayPosition - 1;
    var tempeoryId3;
    for (; d >= 0; d--) {
        tempeoryId3 = stringIdArray[c] + numberIdArray[d];
        if (!($('#' + tempeoryId3).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempeoryId3).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            //$('#A1').addClass('selectPath');
        } else {
            break;
        }
    }

    if (!($('#' + tempeoryId3).children('img').hasClass('white')) && onceDragable == "white") {
        $('#' + tempeoryId3).children().addClass('cutPieceClass');
        //redChessPieceTemId=tempeoryId;
        // console.log($('#'+redChessPieceTemId+'> div').children().clone());

        cuttingChessPieceId = currentPiece.children().attr('id');
    }
}

/////////////////////////////////////////////////path of BlackRook ///////////////////////////////////////

function pathOfBlakRook(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    chesspices.removeClass('afterClickPieces');
    chesspices.removeClass('cutPieceClass');
    checkIdMethod(currentPiece);

    //////////////////////// cross -----------> ///////////////////
    var k = stringArrayPosition + 1;
    var l = numberArrayPosition;
    var tempeoryId;
    for (; k <= 7; k++) {
        tempeoryId = stringIdArray[k] + numberIdArray[l];
        if (!($('#' + tempeoryId).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

        } else {
            break;
        }
    }

    if (!$('#' + tempeoryId).children('img').hasClass('black') && onceDragable == "black") {
        $('#' + tempeoryId).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }

    //////////////////////////////////////////// <------------ cross//////////////////////////
    var a = stringArrayPosition - 1;
    var b = numberArrayPosition;
    var tempeoryId2;
    for (; a >= 0; a--) {
        tempeoryId2 = stringIdArray[a] + numberIdArray[b];
        if (!($('#' + tempeoryId2).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId2).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

        } else {
            break;
        }
    }

    if (!$('#' + tempeoryId2).children('img').hasClass('black') && onceDragable == "black") {
        $('#' + tempeoryId2).children().addClass('cutPieceClass');

        cuttingChessPieceId = currentPiece.children().attr('id');
    }


    //////////////////////////////////////// cross down///////////////////////////

    var i = stringArrayPosition;
    var j = numberArrayPosition + 1;
    var tempeoryId1;


    for (; j < 8; j++) { //pawn issarahata yana hatiii
        tempeoryId1 = stringIdArray[i] + numberIdArray[j];


        if (!($('#' + tempeoryId1).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId1).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');


        } else {
            break;
        }

    }

    if (!$('#' + tempeoryId1).children('img').hasClass('black') && onceDragable == "black") {
        $('#' + tempeoryId1).children().addClass('cutPieceClass');

        //redChessPieceTemId=tempeoryId;
        // console.log($('#'+redChessPieceTemId+'> div').children().clone());

        cuttingChessPieceId = currentPiece.children().attr('id');
    }


///////////////////////////////// cross Up /////////////////////////////////////////////////
    var c = stringArrayPosition;
    var d = numberArrayPosition - 1;
    var tempeoryId3;
    for (; d >= 0; d--) {
        tempeoryId3 = stringIdArray[c] + numberIdArray[d];
        if (!($('#' + tempeoryId3).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempeoryId3).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            //$('#A1').addClass('selectPath');
        } else {
            break;
        }
    }

    if (!($('#' + tempeoryId3).children('img').hasClass('black')) && onceDragable == "black") {
        $('#' + tempeoryId3).children().addClass('cutPieceClass');
        //redChessPieceTemId=tempeoryId;
        // console.log($('#'+redChessPieceTemId+'> div').children().clone());

        cuttingChessPieceId = currentPiece.children().attr('id');
    }


}
///////////////////////path of whitePone ///////////////////////////////////////////
function pathOfWhitePawn(eventData) {
    currentPiece = eventData;
    tiles.removeClass("selectPath");
    chesspices.removeClass('afterClickPieces');
    chesspices.removeClass('cutPieceClass');
    //chesspices.parent().removeClass('afterClickPieces');
    checkIdMethod(currentPiece);
    var tempId = stringIdArray[stringArrayPosition] + numberIdArray[numberArrayPosition - 1];
    var tempId2 = stringIdArray[stringArrayPosition] + numberIdArray[numberArrayPosition - 2];


    if ("whitePone1" == currentPiece.children('img').attr('id') && countArray[0] === 0) {
        if (!($('#' + tempId).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }

        if (!($('#' + tempId2).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId2).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            //  cutFirstPiece=tempId2
            //console.log("CustFrrrrrrrrrrrrrrrrrrrrr"+cutFirstPiece);
            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }
        if ($('#' + tempId).children('img').hasClass('AllPices') && $('#' + tempId).children('img').hasClass('black')) {
            $('#' + tempId2).removeClass('selectPath');
        }
    } else {

        if (!($('#' + tempId).children('img').hasClass('AllPices')) && "whitePone1" == currentPiece.children('img').attr('id') && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
            currentPiece.removeClass('selectPath');
            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')
        }
    }
    if ("whitePone2" == currentPiece.children('img').attr('id') && countArray[1] === 0) {
        if (!($('#' + tempId).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }

        if (!($('#' + tempId2).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId2).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }
        if ($('#' + tempId).children('img').hasClass('AllPices')) {
            $('#' + tempId2).removeClass('selectPath');
        }
    } else {

        if (!($('#' + tempId).children('img').hasClass('AllPices')) && "whitePone2" == currentPiece.children('img').attr('id') && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
            currentPiece.removeClass('selectPath');
            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')
        }
    }

    if ("whitePone3" == currentPiece.children('img').attr('id') && countArray[2] === 0) {
        if (!($('#' + tempId).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }

        if (!($('#' + tempId2).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId2).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }
        if ($('#' + tempId).children('img').hasClass('AllPices')) {
            $('#' + tempId2).removeClass('selectPath');
        }
    } else {

        if (!($('#' + tempId).children('img').hasClass('AllPices')) && "whitePone3" == currentPiece.children('img').attr('id') && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
            currentPiece.removeClass('selectPath');
            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')
        }
    }

    if ("whitePone4" == currentPiece.children('img').attr('id') && countArray[3] === 0) {
        if (!($('#' + tempId).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }

        if (!($('#' + tempId2).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId2).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }
        if ($('#' + tempId).children('img').hasClass('AllPices')) {
            $('#' + tempId2).removeClass('selectPath');
        }
    } else {

        if (!($('#' + tempId).children('img').hasClass('AllPices')) && "whitePone4" == currentPiece.children('img').attr('id') && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
            currentPiece.removeClass('selectPath');
            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')
        }
    }

    if ("whitePone5" == currentPiece.children('img').attr('id') && countArray[4] === 0) {
        if (!($('#' + tempId).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }

        if (!($('#' + tempId2).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId2).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }
        if ($('#' + tempId).children('img').hasClass('AllPices')) {
            $('#' + tempId2).removeClass('selectPath');
        }
    } else {

        if (!($('#' + tempId).children('img').hasClass('AllPices')) && "whitePone5" == currentPiece.children('img').attr('id') && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
            currentPiece.removeClass('selectPath');
            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')
        }
    }

    if ("whitePone6" == currentPiece.children('img').attr('id') && countArray[5] === 0) {
        if (!($('#' + tempId).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }

        if (!($('#' + tempId2).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId2).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }
        if ($('#' + tempId).children('img').hasClass('AllPices') && onceDragable == "white") {
            $('#' + tempId2).removeClass('selectPath');
        }
    } else {

        if (!($('#' + tempId).children('img').hasClass('AllPices')) && "whitePone6" == currentPiece.children('img').attr('id') && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
            currentPiece.removeClass('selectPath');
            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')
        }
    }

    if ("whitePone7" == currentPiece.children('img').attr('id') && countArray[6] === 0) {
        if (!($('#' + tempId).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }

        if (!($('#' + tempId2).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId2).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }
        if ($('#' + tempId).children('img').hasClass('AllPices') && onceDragable == "white") {
            $('#' + tempId2).removeClass('selectPath');
        }
    } else {

        if (!($('#' + tempId).children('img').hasClass('AllPices')) && "whitePone7" == currentPiece.children('img').attr('id') && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
            currentPiece.removeClass('selectPath');
            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')
        }
    }

    if ("whitePone8" == currentPiece.children('img').attr('id') && countArray[7] === 0) {
        if (!($('#' + tempId).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }

        if (!($('#' + tempId2).children('img').hasClass('AllPices')) && onceDragable == "white") {
            $('#' + tempId2).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');

            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')

        }
        if ($('#' + tempId).children('img').hasClass('AllPices')) {
            $('#' + tempId2).removeClass('selectPath');
        }
    } else {

        if (!($('#' + tempId).children('img').hasClass('AllPices')) && "whitePone8" == currentPiece.children('img').attr('id') && onceDragable == "white") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
            currentPiece.removeClass('selectPath');
            // tiles.removeClass('cutPieceClass');
            //  pices.removeClass('cutPieceClass')
        }
    }


    var tempId5 = stringIdArray[stringArrayPosition + 1] + numberIdArray[numberArrayPosition - 1];
    var tempId6 = stringIdArray[stringArrayPosition - 1] + numberIdArray[numberArrayPosition - 1];

    if (($('#' + tempId5).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempId5).children().addClass('cutPieceClass');
        cutFirstPiece = tempId;
        cuttingChessPieceId = currentPiece.children().attr('id');


    }
    if (($('#' + tempId6).children('img').hasClass('black')) && onceDragable == "white") {
        $('#' + tempId6).children().addClass('cutPieceClass');
        cutFirstPiece = tempId;
        cuttingChessPieceId = currentPiece.children().attr('id');

    }
}


//////////////////////////// Path Of BlackPone //////////////////////////////////////////////////////

function pathOfBlackPawn1(eventdata) {
    currentPiece = eventdata;
    tiles.removeClass("selectPath");
    chesspices.removeClass('afterClickPieces');
    chesspices.removeClass('cutPieceClass');
    checkIdMethod(currentPiece);
    var tempId1 = stringIdArray[stringArrayPosition] + numberIdArray[numberArrayPosition + 1];
    var tempId;
    var i = stringArrayPosition;
    var j = numberArrayPosition + 1;
    for (; j < 4; j++) {
        tempId = stringIdArray[i] + numberIdArray[j];

        if (!($('#' + tempId).children('img').hasClass('AllPices')) && onceDragable == "black") {
            $('#' + tempId).addClass('selectPath');
            currentPiece.children().addClass('afterClickPieces');
        } else {

            break;
        }


    }

    if (!($('#' + tempId1).children('img').hasClass('AllPices')) && onceDragable == "black") {

        $('#' + tempId1).addClass('selectPath');
        currentPiece.children().addClass('afterClickPieces');
        cutFirstPiece = tempId1;

    }
    var tempId3 = stringIdArray[stringArrayPosition + 1] + numberIdArray[numberArrayPosition + 1];
    var tempId4 = stringIdArray[stringArrayPosition - 1] + numberIdArray[numberArrayPosition + 1];

    if (($('#' + tempId3).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempId3).children().addClass('cutPieceClass');
        cutFirstPiece = tempId3;
        cuttingChessPieceId = currentPiece.children().attr('id');
    }
    if (($('#' + tempId4).children('img').hasClass('white')) && onceDragable == "black") {
        $('#' + tempId4).children().addClass('cutPieceClass');
        cutFirstPiece = tempId;
        cuttingChessPieceId = currentPiece.children().attr('id');

    }

}
//////////////////////////////////////////Drag Picess////////////////////////////////////

$(".AllPices").click(function () {
    currentPieceNow = $(this);
    currentDagId = currentPieceNow.attr('id');
});


$(".square").click(function () {
    var currentSquare = $(this);
    currentDragId = currentDagId;
    var subStringCurrentId = currentDragId.substr(0, 5);
    if (currentPieceNow.hasClass("white") && subStringCurrentId === "white" && onceDragable === "white" && $(currentSquare).hasClass('selectPath')) {

        currentSquare.append(currentPieceNow);
        checkCountArray(currentPieceNow);
        tiles.removeClass('selectPath');
        chesspices.removeClass('afterClickPieces');
        chesspices.removeClass('cutPieceClass');
        myRotate();
        onceDragable = "black";
    } else {

        if ($(currentSquare).hasClass('selectPath') && onceDragable === "black" && currentPieceNow.hasClass("black")) {
            currentSquare.append(currentPieceNow);
            checkCountArray(currentPieceNow);
            tiles.removeClass('selectPath');
            chesspices.removeClass('afterClickPieces');
            chesspices.removeClass('cutPieceClass');
            myRotate();
            onceDragable = "white";
            console.log("Blackkkkkkkkkkkkkkkkkkkkkkkkkkkk");
        }

    }


});

////////////////////////////////////////////////////////////Cut Picesss///////////////////////////////////////////////////////////////////////////////
    var cutAudio =document.getElementById("audioCut");
  var cutDiv1=$(".cutDiv4").children().attr('id');
  var cutDiv2 =$(".cutDiv5").children().attr('id');
//var cutDivSubChar = cutDiv1.charAt(1);
//var subStringCut =cutDiv1.substring(0,2);





$(".square").mousedown(function () {
    //console.log("cutDiv4"+subStringCut);
    var currentsquare = $(this);
    var currentSquareChildren = currentsquare.children();
    if (currentSquareChildren.hasClass('cutPieceClass')) {
        var cloneImage = currentsquare.children().clone();

        var cloneImageId = currentsquare.children().attr('id');
        cloneImage.removeClass('cutPieceClass');
        var subStringCloneId = cloneImageId.substring(0, 5);
        var cutwhite = $('.cutDiv12').attr('id');
        var cut = $('.cutDiv12');
        currentsquare.children().remove();
        $(currentsquare).append($('#' + cuttingChessPieceId));
        cutAudio.play();
        if (currentsquare.children().attr('id').substring(0, 5) == "white") {
            myRotate();
            onceDragable = "black";
        } else {
            myRotate();
            onceDragable = "white";
        }
        if(subStringCloneId== "white"){
            $('#'+cutDiv1).append(cloneImage);
            cutDiv1++;
        }else{
            if(subStringCloneId=="black") {
                $('#'+cutDiv2).append(cloneImage);
                cutDiv2++;
            }
        }

        tiles.removeClass("selectPath");
        chesspices.removeClass('afterClickPieces');
        chesspices.removeClass('cutPieceClass');
    }
});

//////////////////////////rotate function ///////////////////////////////////////


var rotateCount = 0;

function myRotate() {

    if (rotateCount == 0) {
        $('#first').css("transform", "rotate(180deg)");
        $('#first').css("transition", "2s");
        $('.AllPices').css("transform", "rotate(180deg)");
        $('.AllPices').css("transition", "2s");
        rotateCount++;
    } else {

        if (rotateCount == 1) {
            $('#first').css("transform", "rotate(0deg)");
            $('#first').css("transition", "2s");
            $('.AllPices').css("transform", "rotate(0deg)");
            $('.AllPices').css("transition", "2s");
            rotateCount -= 1;
        }
    }
}


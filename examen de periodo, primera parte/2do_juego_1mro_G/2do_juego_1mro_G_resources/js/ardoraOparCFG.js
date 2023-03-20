//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=160; timeIni=160; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Lo lograste !"; messageTime=""; messageError="lo arruinaste :("; messageErrorG="lo arruinaste :("; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MmRvX2p1ZWdvXzFtcm9fRw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="2do_juego_1mro_G_resources/media/";
var indexG=0;
var words1G=["QSB0b2RvcyBjb25mb3J0YSBlbCBzb2ws","cHVybyB5IGRlbGljYWRvOw==","TnVldm8geSByYWRpYW50ZSBlcyBlbCByb3N0cm8=","ZGVsIG11bmRvIGVuIGFicmlsOw==","aGFjaWEgZWwgYW1vciBzZSBhcHJlc3VyYQ==","ZWwgY29yYXrDs24gZGVsIGhvbWJyZSw=","eSBzb2JyZSBsYSBmZWxpY2lkYWQ=","cmVpbmEgZWwgZGlvcyBkZSBsYSBqdXZlbnR1ZC4NCg0KcmVpbmEgZWwgZGlvcyBkZSBsYSBqdXZlbnR1ZC4NCg0KcmVpbmEgZWwgZGlvcyBkZSBsYSBqdXZlbnR1ZC4NCg0KcmVpbmEgZWwgZGlvcyBkZSBsYSBqdXZlbnR1ZC4NCg0KcmVpbmEgZWwgZGlvcyBkZSBsYSBqdXZlbnR1ZC4NCg0KcmVpbmEgZWwgZGlvcyBkZSBsYSBqdXZlbnR1ZC4NCg0KcmVpbmEgZWwgZGlvcyBkZSBsYSBqdXZlbnR1ZC4NCg0KcmVpbmEgZWwgZGlvcyBkZSBsYSBqdXZlbnR1ZC4=","Q3XDoW50YXMgbm92ZWRhZGVz","ZW4gbGEgZmllc3RhIGRlIGxhIHByaW1hdmVyYSw="];
var words2G=[];
var words3G=[];
var c1=[24,16,29,19,25,22,20,260,17,29];
var c2=[];
var c3=[];

var timeAct=111; timeIni=111; timeBon=1;
var successes=0; successesMax=3; attempts=0; attemptsMax=3;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FDF7C8"; colorButton="#9F9809"; colorText="#000000"; colorSele="#ECF446";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=1; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=4; messageOk="¡lo has logrado, felicidades!!"; messageTime=""; messageError="ooowww, perdiste :("; messageErrorG="ooowww, perdiste :("; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#C4BF22"; borderTime="#FF0000";borderError="#C4BF22"; borderAttempts="#FF0000";
var wordsGame="MV9fR19fXzIz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["bGEgZXZvbHVjaW9uIGJpb2xvZ2ljYSBlcyBlbCBjb25qdW50byBkZSBjYW1iaW9z","TGFtYXJjayBmb3JtdWzDsyBxdWUgbG9zIHNlcmVzIHZpdm9zIGV2b2x1Y2lvbmFuIGFkYXB0w6FuZG9zZSBhIGxhcyBjb25kaWNpb25lcyB5IGFtYmllbnRlcyBlbiBsb3MgcXVlIHNlIGRlc2Fycm9sbGFu","RGFyd2luIHkgV2FsbGFjZSBoYWLDrWFuIGRhZG8gY3VlcnBvIGEgdW5hIHRlb3LDrWEgcXVlIHNvc3RlbsOtYSBxdWUgaGFiw61hIHVuIGNhbWJpbyBlc3BlY8OtZmljbyBlbiBwb2JsYWNpb25lcyB5IGVzcGVjaWVzIGEgdHJhdsOpcyBkZWwgdGllbXBvLg==","",""];imaW=["bc5c28bafc69173a608e2e2d8eeb5f795bca6924.png","teoria-de-lamarck-social.jpg","descarga.jpg","",""];queW=["","","","",""];altW=["","","","",""];c=[48,115,139,0,0];
var auW=["MQ==","","","",""];
var actMaxWidth="600"; actMaxHeight="300";indexG=0;profG=0;dirMedia="1__G___23_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];

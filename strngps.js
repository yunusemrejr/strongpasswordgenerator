document.getElementById('main-wrapper').style.display='';
 


let postHeaderClass = document.getElementsByClassName('post-header');
let ourpostHeaderElement = postHeaderClass[0];


let descOfProg = "<p style='color:white;text-align:center'>Strong Password Generator is Web Tool created by Yunus Emre Vurgun. This tool lets you generate unlimited variations of passwords for you to use!</p><br/><br/>";



let HTMLForm = " <form id='form1'> <label for='favName'>Your Favorite Word: </label><br/><br/><input type='text' id='favName' name='favName'><br/><br/> <br/><label for='provider'>Your Favorite Number (0-1000)</label><br> <br/><input type='number' id='provider' name='provider'> <br/><br/><br/><input type='submit' value='Generate' onclick='PassGenerator()' id='buttonGen'><center><p id='warnArea'></center></p> ";

let results='%UD%';

let resultBox = "<br><br><br><br><center><div id='resultBox' style='width:50%;border:2px solid white;border-radius:5px;'>Your Password:<br><br>"+results+"</div></center><br><br>";


ourpostHeaderElement.innerHTML='<div style="padding-top:1vw;color: white; text-align: center;  text-shadow: orange 1px 1px 1px, blue 0px 1px 1px, rgb(0, 0, 0) 2px 1px 1px;"> <h1 style="color:#ffe700; " class="post-title"> &nbsp;Strong Password Generator</h1>'+


descOfProg +HTMLForm + resultBox +


'</div>';


$('#form1').submit(function(e){e.preventDefault()});


document.getElementById('resultBox').style.display='none';

        document.getElementById('favName').style.backgroundColor='black';
        document.getElementById('provider').style.backgroundColor='black';
document.getElementById('favName').style.color='white';
        document.getElementById('provider').style.color='white';

document.getElementById('buttonGen').style.fontSize='20px';
document.getElementById('buttonGen').style.backgroundColor='orange';
document.getElementById('buttonGen').style.color='white';
document.getElementById('buttonGen').style.border='2px solid white';
document.getElementById('buttonGen').style.borderRadius='15px';






function PassGenerator(){

let favNameAreaID =document.getElementById('favName');
let providerAreaID =document.getElementById('provider');

let favoriteWord = favNameAreaID.value;
let yourRandomNum = providerAreaID.value;

let result=null;

let elseList =false;

if(favoriteWord.includes(" ")||yourRandomNum.includes(" ")){
elseList=true;
}

if(favoriteWord.length==0|| yourRandomNum.length==0 || favoriteWord.length>50|| yourRandomNum.length>4 || elseList==true){


alert('Please enter values that don\'t have spaces, less than 50 characters, number field must me maximum 4 digits, and don\'t leave any field empty.');
window.location.href='https://tools.yunusemrevurgun.com/p/strong-password-generator.html';

}else{

let randomSymbol = [
                
"@!","@^^","+%","@(","?*","a86%","3h++3","+__-_",
"%=",
"?=_",
",/£!",
"a456^+"







];




let randlen= randomSymbol.length;

let elementIndex1 = Math.floor(Math.random()*randlen);
let elementIndex2 = Math.floor(Math.random()*randlen);

let resultData = randomSymbol[elementIndex1];
         let resultData2 = randomSymbol[elementIndex2];

 




let math1=Math.random()*10;
favoriteWord = favoriteWord + parseInt(math1)  ;

favoriteWord = favoriteWord + resultData;

let math2 =Math.random()*10;
 math2 = Math.floor(math2);

result = resultData2+math2+favoriteWord+resultData2+yourRandomNum+math2;


}



    








   document.getElementById('resultBox').style.fontSize='20px';
document.getElementById('resultBox').style.display='';
document.getElementById('resultBox').innerText=  document.getElementById('resultBox').innerText.replaceAll('%UD%',result);
   document.getElementById('resultBox').style.backgroundColor='gray';


document.getElementById('buttonGen').style.display='none';

document.getElementById('warnArea').innerText="*Refresh the page to generate another one.";

document.getElementById('warnArea').style.color="white";

document.getElementById('warnArea').style.borderRadius="10px";

   document.getElementById('warnArea').style.backgroundColor="black";
   document.getElementById('warnArea').style.width="50%";
   document.getElementById('warnArea').style.textAlign="center";


document.getElementById('warnArea').style.textShadow="";

document.getElementById('warnArea').style.fontSize="18px";


}

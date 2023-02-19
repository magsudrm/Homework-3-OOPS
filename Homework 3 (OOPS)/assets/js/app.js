let input1=document.getElementById('Background_input');
let button1=document.getElementById('Background_button');
button1.onclick=function(){
    document.body.style.backgroundColor=input1.value;
}

let counter=Number(document.getElementById('counter_h1').textContent);
let button2=document.getElementById('plus_button');
let button3=document.getElementById('minus_button');
button2.onclick=function(){
    if(counter>=0){
        counter++;
        document.getElementById('counter_h1').innerHTML=counter;
    }
}
button3.onclick=function(){
    if(counter>0){
        counter--;
        document.getElementById('counter_h1').innerHTML=counter;
    }
}

let button4=document.getElementById('hesabla_button');
button4.onclick=function(){
let input2=Number(document.getElementById('number_inp1').value);
let input3=Number(document.getElementById('number_inp2').value);
let total=1;
    for(let i=input2+1;i<input3;i++){
        total*=i;
    }
    document.getElementById('hesabla_h1').innerHTML=`${total}`;
}

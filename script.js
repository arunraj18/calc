
function myFunction(button) {
    button.classList.add('clickednum');
    setTimeout(function() {
        button.classList.remove('clickednum');
    }, 300); // 0.5 seconds
}
function myFunction1(button) {
    button.classList.add('clickedop');
    setTimeout(function() {
        button.classList.remove('clickedop');
    }, 300); // 0.5 seconds
}

function myFunction2(button) {
    button.classList.add('clicked');
    setTimeout(function() {
        button.classList.remove('clicked');
    }, 300); // 0.5 seconds
}



const ac=document.getElementById('bt1')
const plusminus=document.getElementById('bt2')
const percent=document.getElementById('bt3')
const division=document.getElementById('bt4')

const seven=document.getElementById('bt5')
const eight=document.getElementById('bt6')
const nine=document.getElementById('bt7')
const multiplication=document.getElementById('bt8')

const four=document.getElementById('bt9')
const five=document.getElementById('bt10')
const six=document.getElementById('bt11')
const minus=document.getElementById('bt12')

const one=document.getElementById('bt13')
const two=document.getElementById('bt14')
const three=document.getElementById('bt15')
const plus=document.getElementById('bt16')

const zero=document.getElementById('bt17')
const dot=document.getElementById('bt18')
const equals=document.getElementById('bt19')

const numarray=[
    zero,one,two,three,four,five,six,seven,eight,nine
]

let valueinmem=null;
let oprinmem=null;

const  getvaluestr=()=>input1.textContent.split(',').join('');


const getvalueasnum=()=>{
    return parseFloat(getvaluestr())
}
const setstrasvalue=(valuestr)=>{
    if(valuestr.includes('.')){
        const [number,decimal]=valuestr.split('.')
        input1.textContent=parseFloat(number).toLocaleString() + '.' + decimal
    }
    else{
        input1.textContent=parseFloat(valuestr).toLocaleString()
    }
}
//functions
const handlenumber=(numstr)=>{
    const currvalue=getvaluestr();
    setstrasvalue(currvalue + numstr);

}
//event listen for numbers
for(let i=0;i<numarray.length;i++){
    const numel=numarray[i];
    numel.addEventListener('click',()=>{
        handlenumber(i.toString())
    });
}
 //decimal element
 dot.addEventListener('click',()=>{
    const currvaluestr=getvaluestr();
    if(!currvaluestr.includes('.')){
        setstrasvalue(currvaluestr+'.');
    }
 })
//event listeners for functions
ac.addEventListener('click',()=>{
    input1.textContent=0
    valueinmem=null;
    oprinmem=null;
})

//percentage
percent.addEventListener('click',()=>{
    const currvalue=getvalueasnum()
    const pervalue=currvalue/100
    setstrasvalue(pervalue.toString())
    valueinmem=null;
    oprinmem=null;

})

//plusminus

plusminus.addEventListener('click',()=>{
    const valuenum=getvalueasnum()
    if(valuenum==-0){
        setstrasvalue('-' + '0')
        return;
    }
    if(valuenum>=0){
        setstrasvalue('-' + valuenum.toString())
    }
    else{
        setstrasvalue(valuenum.toString().slice(1))
    }

})

//result of numbers
const resultstr=()=>{
    const valuenuminmem=parseFloat(valueinmem)
    const currvaluenum=getvalueasnum()
    let newvalue;
    if(oprinmem==='add'){
        newvalue=valuenuminmem+currvaluenum
    }
    else if(oprinmem==='sub'){
        newvalue=valuenuminmem-currvaluenum
    }
    else if(oprinmem==='mul'){
        newvalue=valuenuminmem*currvaluenum
    }
    else if(oprinmem==='div'){
        newvalue=valuenuminmem/currvaluenum
    }
    return newvalue.toString()

}

//add event listeners to operators

const handleopr=(operator)=>{
    const currvaluestr=getvaluestr()
    if(!valueinmem){
        valueinmem=currvaluestr
        oprinmem=operator
        setstrasvalue('0')
        return;
    }
    valueinmem=resultstr()
    oprinmem=operator
    setstrasvalue('0')
}

plus.addEventListener('click',()=>{
    handleopr('add')
})
minus.addEventListener('click',()=>{
    handleopr('sub')
})
multiplication.addEventListener('click',()=>{
    handleopr('mul')
})
division.addEventListener('click',()=>{
    handleopr('div')
})

equals.addEventListener('click',()=>{
    if(valueinmem){
        setstrasvalue(resultstr())
        valueinmem=null;
        oprinmem=null;


    }
})
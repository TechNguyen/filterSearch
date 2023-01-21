const items = Array.from(document.querySelectorAll('.number'));
const body = document.querySelector('body')
const show = document.querySelector('.caculator-show');
const funcItem = Array.from(document.querySelectorAll('.func'));
const acbtn = document.querySelector('.acbtn')
const delbtn = document.querySelector('.delbtn')
const ansbtn = document.querySelector('.ansbtn')
const cacul = document.querySelector('.handle-cacul');
const active = document.querySelector('.active');
const result = document.getElementById('text-result');
const notif = document.querySelector('.notif');
const close = document.querySelector('.close');
const progress = document.querySelector('.progress')
var rect = notif.getBoundingClientRect();

var fnc = ['+', '-', 'x', '/'];
var fncExp = ['x', '/']
var stringCurent = '';
var pn = document.createElement('p')
pn.className = 'operator';
items.forEach(item => {
    item.addEventListener('click', function caculation() {
        var curentValue = item.innerText;
        stringCurent += curentValue;
        pn.innerText = stringCurent;
        cacul.append(pn);
    });
})
funcItem.forEach(item => {
    item.addEventListener('click', function funccaculation() {
        clear();
        createPn();
        var curentValue = item.innerText;
        fnc.forEach(item => {
            if(curentValue == item) {
                var p = document.createElement('p')
                p.className = 'fnc-opera';
                p.innerText = item;
                cacul.append(p)
            }
        })
    }
    )
})
function clear() {
    stringCurent = '';
    return stringCurent;
}
function createPn() {
    pn = document.createElement('p');
    pn.className = 'operator';
    return pn;
}
active.addEventListener('click', () => {
    const operators = Array.from(document.querySelectorAll('.operator'));
    const fncs = Array.from(document.querySelectorAll('.fnc-opera'))
    var acc = 0;
    var share = 0;
    var opArr = [];
    var fncArr = [];
    var resultItem = 0;
    operators.forEach(op => {
        opArr.push(Number(op.innerText))
    })
    fncs.forEach(op => {
        fncArr.push((op.innerText))
    });
    resultItem = opArr[0];
    for(let i = 0; i < opArr.length; i++) {
        do {
            for(let j = 0; j < fncArr.length; j++) {
                if(fncArr[j] == 'x') {
                    acc = opArr[j];
                    acc *= opArr[j+1];
                    opArr[j] = acc;
                    opArr.splice(j+1,1)
                    fncArr.splice(j, 1) 
                }
                else if(fncArr[j] == '/') {
                    share = opArr[j];
                    share /= opArr[j+1];
                    opArr[j] = share;
                    opArr.splice(j+1,1)
                    fncArr.splice(j, 1)
                }
                resultItem = opArr[0]
            }
        } while(fncArr.includes('x') || fncArr.includes('/'));
        for(let j = 0; j < fncArr.length; j++) {
            if(fncArr[j] == '+') {
                resultItem += opArr[i+1];
                opArr[0] = resultItem;
                opArr.splice(i+1, 1);
            }
            else if(fncArr[j] == '-') {
                resultItem -= opArr[i+1];
                opArr[0] = resultItem;
                opArr.splice(i+1, 1);       
            }
            else if(fncArr[j] == 'x') {
                resultItem *= opArr[i+1];
                opArr[0] = resultItem;
                opArr.splice(i+1, 1); 
            }
            else {
                resultItem /= opArr[i+1];
                opArr[0] = resultItem;
                opArr.splice(i+1, 1); 
            }
        }
    }
    if(!isFinite(resultItem)) {
        notif.style.animation = "shownoti 2s linear forwards";
        while(cacul.lastChild) {
            cacul.removeChild(cacul.lastChild)
        }
        stringCurent = '';
        if(notif.style.animationName == "shownoti") {
            setTimeout(() => {
                notif.style.animation = "hidennoti 2s linear forwards";
            }, 5000);
        }
        if(notif.style.transform == 0) {
            progress.style.animation = 'transition 2s linear 3s forwards'
        }
    } else {
        result.innerText = `${resultItem}`
    }
})

close.addEventListener('click', function () {
    notif.style.animation = "hidennoti 2s linear forwards";
})
delbtn.addEventListener('click', function () {
    cacul.lastChild.innerText = `${ cacul.lastChild.innerText.slice(0, cacul.lastChild.innerText.length - 1)}`;
    stringCurent =  stringCurent.slice(0, stringCurent.length - 1)
    if(cacul.lastChild.innerText == '') {
        cacul.removeChild(cacul.lastChild);
    }
})
var child;
acbtn.addEventListener('click', function() {
    child = result.innerText;
    while (cacul.lastChild) {
        cacul.removeChild(cacul.lastChild);
      }
    stringCurent = '';
    result.innerText = 0;
})
var lastchild = document.createElement('p');
lastchild.className = 'operator'
ansbtn.addEventListener('click', function () {
    lastchild.innerText = child;
    cacul.append(lastchild)
})



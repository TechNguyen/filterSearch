const items = Array.from(document.querySelectorAll('.number'));
const show = document.querySelector('.caculator-show');
const funcItem = Array.from(document.querySelectorAll('.func'));
const cacul = document.querySelector('.handle-cacul');
const active = document.querySelector('.active');
const result = document.getElementById('text-result');
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
    var sum = 0;
    var sign = 0 ;
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
        for(let j = 0; j < fncArr.length; j++) {
            fncExp.forEach(item => {
                if(fncArr.includes(item)) {
                    console.log(item);
                }
            })
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
    result.innerText = `${resultItem}`
})


// function result(result, item , opArr) {
//     switch (item) {
//         case '+':
//             result += opArr[i+1];
//             opArr[0] = result;
//             opArr.splice(i+1, 1);
//             break;
//         case '-':
//             result -= opArr[i+1];
//             opArr[0] = result;
//             opArr.splice(i+1, 1);
//             break;
//         case '*':
//             result *= opArr[i+1];
//             opArr[0] = result;
//             opArr.splice(i+1, 1); 
//             break;
//         case '/':
//             result /= opArr[i+1];
//             opArr[0] = result;
//             opArr.splice(i+1, 1); 
//             break;
//         default:

//             break;
//         }

// }

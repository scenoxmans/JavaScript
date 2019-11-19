//Main variables
let btn = document.getElementById('btn-default');
let load = document.getElementById('loading');
let field = document.getElementById('field');
let  error = document.getElementById('error');
btn.addEventListener('click', adding);

//main function
function adding(){
    load.classList.remove('fas', 'fa-search'); 
    load.classList.add('fas', 'fa-spinner', 'fa-spin'); 
    setTimeout(function(){
        load.classList.remove('fas', 'fa-spinner', 'fa-spin'); 
    },500)
    checking()
    addvalue()
}
// Checking if input field is empty
function checking(){
    setTimeout(function(){
        if (field.value === ""){
            field.classList.add('erroring');
            error.innerHTML = " *This field can't be empty."
        }
    },500)
}
// Adding input  value to a table
function addvalue(){
    setTimeout(function(){
        if (field.value != ""){
            let display = document.getElementById('display');
            let row = 1;
            let newRow = display.insertRow(row);
                let cell1 = newRow.insertCell(0);
                let cell2 = newRow.insertCell(1);
                let cell3 = newRow.insertCell(2);
            cell1.innerHTML = field.value;
            cell2.innerHTML ="$" + Math.floor((Math.random() * 100) + 1);;
            cell3.innerHTML = '<button id = del><i class="fas fa-times"></i></button>';
            row++;
            let clear = document.getElementById('del');
            clear.addEventListener('click', delRow)
        function delRow(){
        }
        }
    },500)
 reset();
}

function reset(){
    setTimeout(function(){
        field.value = '';
    }, 500)

}

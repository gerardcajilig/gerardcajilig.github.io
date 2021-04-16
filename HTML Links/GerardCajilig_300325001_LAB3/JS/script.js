function sumtwo(){
    var num1 = document.getElementById("inp1").value;
    var num2 = document.getElementById("inp2").value;

    //parse to integer

    var val1=parseInt(num1, 10);
    var val2=parseInt(num2, 10);

    var result = val1 + val2;
      
    
    document.getElementById("sumplace").value = val1 + " + " + val2+ " = " + result;

    


}

function difftwo(){
    var num1 = document.getElementById("inp1").value;
    var num2 = document.getElementById("inp2").value;

    //parse to integer

    var val1=parseInt(num1, 10);
    var val2=parseInt(num2, 10);

    var result = val1 - val2;
    
   
    document.getElementById("sumplace").value = val1 + " - " + val2+ " = " + result;



}

function multitwo(){
    var num1 = document.getElementById("inp1").value;
    var num2 = document.getElementById("inp2").value;

    //parse to integer

    var val1=parseInt(num1, 10);
    var val2=parseInt(num2, 10);

    var result = val1 * val2;
    
   

    document.getElementById("sumplace").value =val1 + " X " + val2+ " = " + result;



}

function divtwo(){
    var num1 = document.getElementById("inp1").value;
    var num2 = document.getElementById("inp2").value;

    //parse to integer

    var val1=parseInt(num1, 10);
    var val2=parseInt(num2, 10);

    var result = val1 / val2;
    
    
    document.getElementById("sumplace").value =   val1 + " / " + val2+ " = " + result;


}


function nose(){
       
    document.getElementById("inp1").value =   "Type Number Value# 1"
    document.getElementById("inp2").value =   "Type Number Value# 2"
    document.getElementById("sumplace").value =  "Equation Shown Here.."

}
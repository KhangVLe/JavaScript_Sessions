/*
console.log('Hello from myscript File..!!')
alert('I am loaded now..');


if(confirm('Do you want to proceed?') == true){
    alert('You are selected for next round..')
} else {
    alert('OOPS!! You are rejected..!!')
}
*/

var age = prompt('Please Enter Your Age : ');
//alert('Your Age is ' + age);
if(age >= 18){
    //alert('You are valid to vote..!!');
    //document.write('You are valid to vote..!!');
    document.getElementById('voteStatus').innerHTML = 'You are valid to vote';
} else {
    //alert('You are not valid to vote..!!');
    //document.write('You are not valid to vote..!!');
    document.getElementById('voteStatus').innerHTML = 'You are not valid to vote';
}
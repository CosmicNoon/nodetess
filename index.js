const func = who => {
    console.log(who);

} 
var Start = setInterval(func, 3 * 1000, 'Hej verden');
setTimeout(function( ){
    clearInterval( Start );
}, 17 * 1000);
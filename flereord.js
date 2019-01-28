const func = who => {
    console.log(who + ' rocks!');

} 

setInterval(func, 3 * 1000, 'Webudviklere' );
setInterval(func, 1000, 'woo' );
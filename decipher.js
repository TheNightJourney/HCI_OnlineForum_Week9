function digitalDecipher(eMessage, key){

    // loop so that for as long as the message, the function goes
    for(let i = 0; i < eMessage.length; i++){
            eMessage[i] -= parseInt(key.toString()[i % key.toString().length]);
    }
    
    // to test the numbers
    const letters = "asbcdefghijklmnopqrstuvwxyz";

    var out = "";

    // to decode the message
    for(let i = 0; i < eMessage.length; i++){
		out += alphabet[eMessage[i] - 1];
    }
    
    return out;
}

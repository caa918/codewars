function humanReadable(seconds){
    // Calculate number of hours, minutes, and seconds and convert each to a string
    let h = (Math.floor(seconds / 3600)).toString();
    let m = (Math.floor((seconds - (h * 3600)) / 60 )).toString();
    let s = (seconds - (h * 3600) - (m * 60)).toString();
	  
    // Since we want a leading zero for values < 10, we are going to create a pad, append the value, then grab
    // the rightmost 2 digits.  In the case of "12", the padded result would be "0012" and it would be sliced with
    // a value of -2 (the first two characters starting from the right). A value of "9" would create a padded
    // string of "009" and the .slice(-pad.length) would grab the "09" part of the string.  A template literal is
    // used to return the formatted value.
    let pad = "00";
    
    return `${( pad + h ).slice(-pad.length)}:${( pad + m ).slice(-pad.length)}:${( pad + s ).slice(-pad.length)}`;
}

// Testing Samples
// humanReadable(90); // "00:01:30"
// humanReadable(129); // "00:02:09"
// humanReadable(45296); // "12:34:56"
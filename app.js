function longestWord(str){
    let words = str.replace(/[^A-Za-z\s]/g, "").split(" ");
    let longest = words.sort(function(a, b) {
        return b.length - a.length;
    });
    return longest[0];
}

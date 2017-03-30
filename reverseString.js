

function reverseString(str) {
        var result = "";
        var wordArray = str.split(" ");
        for(var i = wordArray.length - 1; i >= 0; i--) {
            result += wordArray[i] + " ";
        }
        return result;
    }



console.log(reverseString("I love lasagna"));

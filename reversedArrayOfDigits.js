8 kyu
Convert number to reversed array of digits
JavaScript:

    function digitize(n) {
        let newArray = n.toString(10).split('').map(parseFloat)
        console.log(newArray)
        ret = [];
        for (var i = newArray.length - 1; i >= 0; i--) {
            ret.push(newArray[i]);
        }
        return ret;

    }

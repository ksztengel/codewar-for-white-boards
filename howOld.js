8 kyu
How old will I be in 2099 ?
    JavaScript :

    function calculateAge(birth, count) {
        let diff = count - birth

        if (diff > 1) {
            return "You are " + diff + " years old."
        } else if (diff < -1) {
            return "You will be born in " + -1 * diff + " years."
        } else if (diff === -1) {
            return "You will be born in " + -1 * diff + " year."
        } else if (diff === 1) {
            return "You are " + diff + " year old."
        } else {
            return "You were born this very year!"
        }
    }

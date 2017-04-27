8 kyu
Difference of Volumes of Cuboids
JavaScript:

    function find_difference(a, b) {
        let volA = a[0] * a[1] * a[2]
        let volB = b[0] * b[1] * b[2]
        if (volA > volB) {
            return volA - volB
        } else {
            return volB - volA
        }
    }

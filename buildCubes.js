Your task is to construct a building which will be a pile of n cubes.The cube at the bottom will have a volume of n ^ 3, the cube above will have volume of (n - 1) ^ 3 and so on until the top which will have a volume of 1 ^ 3.


function findNb(m) {
    var n = 0;
    var vol = 0;
    while (vol < m) {
        n++
        vol += n * n * n
    }
    if (vol !== m)
        return (-1);
    else {
        return (n)
    }
}

could use Ternary instead of if else....  see below...

// function findNb(m) {
//   var n = 0
//   while (m > 0) m -= ++n**3
//   return m ? -1 : n
// }

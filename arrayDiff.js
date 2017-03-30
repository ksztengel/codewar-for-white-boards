function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
//e for element


function array_diff(a, b) {

    var arr = new Array();

    for(var i = 0;i<a.length;i++){
        if(b.indexOf(a[i])<0){
            arr.push(a[i]);
        }
    }

    return arr;
}

var array_diff = (a, b) => a.filter(item => b.indexOf(item) < 0)

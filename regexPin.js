function validatePIN (pin) {

  var res = pin.match(/^[0-9]*$/);

  if( res && ((pin.length === 4) || (pin.length === 6))) {
     return true;
  }
  else {
      return false;
  }
}


function validatePIN (pin) {
  if (pin.length === 4 || 6){
  return true
  }
  else if (pin.length !== 4 || > 6){
  return false
  }
  else if (pin.match(/[^a-zA-Z]+/)){
    return false
  }


}

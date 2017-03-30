function alphabetPosition(text, literal) {
    if (!literal) text = text.replace(/[^a-zA-Z]+/g, '').toLowerCase();
    return text.split('').map(function(c) {
        return 'abcdefghijklmnopqrstuvwxyz'.indexOf(c) + 1 || (literal ? c : '');
    }).join(' ');
  }

8 kyu
altERnaTIng cAsE <= > ALTerNAtiNG CaSe
JavaScript:

    String.prototype.toAlternatingCase = function() {
        var arr = this.split("").map(function(c) {
            return c === c.toUpperCase() ?
                c.toLowerCase() : c.toUpperCase()
        }).join("")

        return arr
    }

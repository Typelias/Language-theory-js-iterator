Array.prototype.iterator = function() {
    return {
        array: this,
        index: 0,
        hasNext: function() {
            return this.index < this.array.length;
        },
        next: function() {
            return this.array[this.index++];
        }
    }
}

var array = Array.from({length: 10}, () => Math.floor(Math.random() * 10) );
var iterator = array.iterator();

while(iterator.hasNext()) {
    console.log(iterator.index, "is", iterator.next());
}


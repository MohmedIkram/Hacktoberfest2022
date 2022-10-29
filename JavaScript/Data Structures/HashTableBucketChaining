// Hash Table with bucket chaining


// Array of buckets
var buckets = new Array();

// Initialize the hash table

function init() {
    for (var i = 0; i < 10; i++) {
        buckets[i] = new Array();
    }
}

// Insert a new key-value pair into the hash table

function insert(key, value) {
    var hash = Math.abs(key % 10);
    buckets[hash].push([key, value]);
    console.log(buckets);
}

// Search for a key in the hash table

function search(key) {
    var hash = Math.abs(key % 10);
    for (var i = 0; i < buckets[hash].length; i++) {
        if (buckets[hash][i][0] == key) {
            return buckets[hash][i][1];
        }
    }
    return null;
}

// Delete a key-value pair from the hash table

function deleteKey(key) {
    var hash = Math.abs(key % 10);
    for (var i = 0; i < buckets[hash].length; i++) {
        if (buckets[hash][i][0] == key) {
            buckets[hash].splice(i, 1);
            return;
        }
    }
}

// Delete all key-value pairs from the hash table

function deleteAll() {
    for (var i = 0; i < buckets.length; i++) {
        buckets[i] = new Array();
    }
}

// Test the hash table

(function test() {
    init();
    insert(1, "one");
    insert(2, "two");
    insert(3, "three");
    insert(4, "four");
    insert(5, "five");
    insert(6, "six");
    insert(7, "seven");
    insert(8, "eight");
    insert(9, "nine");
    insert(10, "ten");
    insert(11, "eleven");
    insert(12, "twelve");
    insert(13, "thirteen");
    insert(14, "fourteen");
    insert(15, "fifteen");
    insert(16, "sixteen");
    insert(17, "seventeen");
    insert(18, "eighteen");
    insert(19, "nineteen");
    insert(20, "twenty");
    insert(30, "thirty");
    insert(40, "forty");
    insert(50, "fifty");
    insert(60, "sixty");
    insert(70, "seventy");
    insert(80, "eighty");
    insert(90, "ninety");
    insert(100, "hundred");
    insert(1000, "thousand");
    insert(1000000, "million");
    insert(1000000000, "billion");
    insert(1000000000000, "trillion");
    insert(1000000000000000, "quadrillion");
    insert(1000000000000000000, "quintillion");
    insert(1000000000000000000000, "sextillion");
    insert(1000000000000000000000000, "septillion");
    insert(1000000000000000000000000000, "octillion");
    insert(1000000000000000000000000000000, "nonillion");
    insert(1000000000000000000000000000000000, "decillion");
    insert(1000000000000000000000000000000000000, "undecillion");
    insert(100000000000000000000000000000000000000000, "duodecillion");
    insert(100000000000000000000000000000000000000000000, "tredecillion");
})();

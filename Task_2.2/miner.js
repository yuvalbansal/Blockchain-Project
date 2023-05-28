const crypto = require('crypto');

class block {
    constructor(data, hash, nonce) {
        this.data = data
        this.hash = hash
        this.nonce = nonce
    }
}

const cryptohash = (inputs) => {
    const hash = crypto.createHash('sha256')
    hash.update(inputs.sort().join(''))
    return (hash.digest("hex"))
}

DataArray = [
    "Alice Paid Bob $9",
    "Alice Paid Bob $8",
    "Alice Paid Bob $7",
    "Alice Paid Bob $6",
    "Alice Paid Bob $5",
    "Alice Paid Bob $4",
    "Alice Paid Bob $3",
    "Alice Paid Bob $2",
    "Alice Paid Bob $1",
    "Alice Paid Bob $0"
]

const SData = DataArray[0];
var SNonce = 0;
while (cryptohash([SData, SNonce]).slice(0, 5) != "00000") {
    SNonce++;
}

for (var DataIndex = 0; DataIndex < 10; DataIndex++) {
    var nonce = 0;
    while (cryptohash([DataArray[DataIndex], nonce]).slice(0, 5) != "00000") {
        nonce++;
    }
    const Block = new block(DataArray[DataIndex], nonce, cryptohash([DataArray[0], 0]));
    console.log("block", DataIndex + 1, JSON.stringify(Block, undefined, 4))
}
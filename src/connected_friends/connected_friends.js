const Queue = require("../lib/queue");

const connected = (G, start, end) => {
    if(!Object.keys(G).length) {
        return false;
    }
    if(start === end){
        return true;
    }

    const enqueued = [start];
    const discovered = new Queue();
    discovered.enqueue(start);
    while(discovered.first){
        const user = discovered.dequeue();
        for(let i = 0; i < G[user].length; i++){
            const friend = G[user][i];
            console.log(friend, enqueued, discovered);
            if(friend === end){
                return true;
            }
            if(!(enqueued.includes(friend))){
                enqueued.push(friend);
                discovered.enqueue(friend);
            }
        }
    }
    return false;
};

module.exports = connected;

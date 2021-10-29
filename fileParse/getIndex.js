const getLastIndex =  function(index,...restIndex){
    let lastIndex = 0;
    restIndex.sort(function(item1, item2){
        if(item1>item2){
            return 1
        } else{
            return -1
        }
    });
    for(let i=0;i<restIndex.length;i++){
        if(restIndex[i]>index){
            lastIndex = restIndex[i];
            break;
        }
    }
    return lastIndex;

}
module.exports = getLastIndex;
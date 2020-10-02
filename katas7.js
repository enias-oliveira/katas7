// New forEach()
const newForEach = (array,callback) => {
    for(let idx=0; idx < array.length;idx++){
        let cur = array[idx]
        callback(cur,idx,array)
    }
}
// New map()
const newMap = (array,callback) => {
    let output = []
    for(let idx=0; idx < array.length;idx++){
        let cur = array[idx]
        output.push(callback(cur,idx,array))
    }
    return output
}

// New some()
const newSome = (array,callback)=> {
    for(let idx=0; idx < array.length;idx++){
        let cur = array[idx]
        if(callback(cur,idx,array)){return true}
    }
    return false
}

// New find()
const newFind = (array,callback) => {
    for(let idx=0; idx < array.length;idx++){
        let cur = array[idx]
        if(callback(cur,idx,array)){return cur}
    }
    return undefined
}

// New findIndex()
const newFindIndex = (array,callback) => {
    for(let idx=0; idx < array.length;idx++){
        let cur = array[idx]
        if(callback(cur,idx,array)){return idx}
    }
    return -1 
}

// New every()
const newEvery= (array,callback)=> {
    for(let idx=0; idx < array.length;idx++){
        let cur = array[idx]
        if(!callback(cur,idx,array)){return false}
    }
    return true
}

// New filter()
const newFilter = (array,callback) => {
    let output = []
    for(let idx=0; idx < array.length;idx++){
        let cur = array[idx]
        if(callback(cur,idx,array)){output.push(cur)}
    }
    return output
}
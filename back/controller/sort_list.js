
const getIndexOfLower = (list = [])=>{
    let lower = 999999999
    let indexOfLower = -1;
    list.forEach(({points},ind)=>{
        if(points<lower){
            lower = points
            indexOfLower = ind
        }
    })
    return indexOfLower
}


const sortList = (list = [])=>{    
    let listSorted = []
    let i = 0
    while(list.length>0 && i<10){
        let indexOfLower = getIndexOfLower(list)
        listSorted.push(list[indexOfLower])
        let newList = []
        list.forEach((val, ind)=>{
            if(ind!==indexOfLower){
                newList.push(val)    
            }
        })
        list = newList
        i++
    }
    return listSorted
}

module.exports = sortList
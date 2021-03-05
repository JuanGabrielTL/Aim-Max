const url = 'http://localhost:4000'
export const saveScore = (name, score, game, cb = null)=>{
    const data = new FormData()
    data.set('name', name)
    data.set('score', score)
    data.set('game', game)

    fetch(`${url}/score`,{
        method: "POST",
        body: data
    })
    .then(response => response.json())
    .then(json=>{
        // console.log(json.data)
        if(cb){
            cb(null,json.data)
        }
    })
    .catch(err=>{
        if(cb){
            cb(err)
        }
    })
}

export const getGameTop =(game, cb)=>{
    fetch(`${url}/score?game=${game}`)
    .then(response => response.json())
    .then(json=>{
        // console.log(json)
        cb(null,json.data)
    })
    .catch(err=>cb(err))
}
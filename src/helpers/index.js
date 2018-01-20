
const CLASS_CONSTANTS = {
    NEW : "new",
    INCREASED : "incr",
    DECREASED : "decr",
    CONSTANT : "const"
}

export const formatedData = (data) =>{
  let modifiedData = data.reduce((final ,curr) =>{
    let [name,price] = curr
      final.push({name,price,updateAt : new Date().getTime()})
      return final
  },[])
  return modifiedData
}

export const updateNewDataList = (newData,oldData) => {
  let newState = Object.assign([],oldData)
  let updatedAt = new Date().getTime()

  newData.forEach(function (element) {

    let {name,price} = element
    let elementIndex = newState.findIndex(x => x.name ===name)
    if(elementIndex===-1){
          newState.push({
            name,
            price,
            updatedAt,
            class : CLASS_CONSTANTS.NEW,
            dataseries : [].push(price)
          })
    } else {
            newState[elementIndex].class = newState[elementIndex].price > price ? CLASS_CONSTANTS.DECREASED : newState[elementIndex].price < price? CLASS_CONSTANTS.INCREASED :CLASS_CONSTANTS.CONSTANT;
            newState[elementIndex].price = price;
            newState[elementIndex].updatedAt = updatedAt;
            newState[elementIndex].dataseries = [...newState[elementIndex].dataseries,price];
    }

  },this)
  return newState
}

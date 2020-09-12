const incorrectArray = (array) => {
    if (!Array.isArray(array)) return true
    if (array === undefined) return true
    if (array.length === 0) return true
}


exports.min = function min(array) {
    if(incorrectArray(array)) return 0
    let min = array[0]
    for (let i = 1 ; i < array.length ; i++){
        if (array[i] < min)
            min = array[i]
    }
    return min
}

exports.max = function max(array) {
    if(incorrectArray(array)) return 0

    let max = array[0]
    for (let i = 1 ; i < array.length ; i++){
        if (array[i] > max)
            max = array[i]
    }
    return max
}

exports.avg = function avg(array) {
    if(incorrectArray(array)) return 0
    let average = 0
    for (let i = 0 ; i < array.length ; i++){
        average += array[i]
    }
    return average/array.length
}


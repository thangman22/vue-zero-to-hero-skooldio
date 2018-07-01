function setLocalstorage (key,value) {
    localStorage[key] = JSON.stringify(value)
    return true
}

function getLocalstorage(key) {
    return JSON.parse(localStorage[key])
}
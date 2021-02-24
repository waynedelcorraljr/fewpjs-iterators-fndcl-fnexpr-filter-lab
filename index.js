function findMatching(drivers, name) {
    return drivers.filter(d => {return d.toLowerCase() === name.toLowerCase()});
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(d => {return d.startsWith(string)});
}

function matchName(drivers, string) {
    return drivers.filter(d => {return d.name.toLowerCase() === string.toLowerCase()}); 
}
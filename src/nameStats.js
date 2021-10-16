function nameStats(list) {
    const result = {};
    
    for(let i = 0; i < list.length; i++) {
        result[list[i].name] = 0;
    }

    for(let i = 0; i < list.length; i++) {
        result[list[i].name]++;
    }

    return result;
}

function catsGroupGenerate(n, defaults = defaultParametrs) {
    const catsGroup = [];

    for(let i = 0; i < n; i++) {
        catsGroup.push(catFactory(defaults));
    }
    
    return catsGroup;
}

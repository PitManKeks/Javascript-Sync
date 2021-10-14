const defaultParametrs = {
    name: {"M":["Мурзик", "Барсик", "Жорик", "Макс"], "F":["Мурка", "Ася", "Кэтти", "Василиса"]},
    age: [3, 5, 7, 10, 12],
    gender: ["M", "F"],
    legsCount: [0, 1, 2, 3, 4, 5, 6],
    tailLength: [1, 5, 10, 15, 20]
}

function catFactory(defaults = defaultParametrs) {
    const gender = pick(defaults.gender == undefined ? defaultParametrs.gender : defaults.gender);
    const cat = {
        name: pick(defaults.name == undefined ? defaultParametrs.name[gender] : (defaults.name[gender] == undefined ? defaults.name : defaultParametrs.name[gender])),
        age: pick(defaults.age == undefined ? defaultParametrs.age : defaults.age),
        gender: gender,
        legsCount: pick(defaults.legsCount == undefined ? defaultParametrs.legsCount : defaults.legsCount),
        tailLength: pick(defaults.tailLength == undefined ? defaultParametrs.tailLength : defaults.tailLength)
    }

    return cat;
}

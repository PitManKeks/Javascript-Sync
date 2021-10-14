function maleCats(list) {
    const result = [];

    for(let i = 0; i < list.length; i++)
        if(list[i].gender == "M")
            result.push(list[i]);

    return result;
}

function namesCats(list) {
    const result = [];

    for(let i = 0; i < list.length; i++)
        result.push(list[i].name);

    return result;
}

function oldestMaleCats(list, n) {
    const result = [];
    let max;

    for(let i = 0; i < list.length; i++)
        if(list[i].gender == "M") {
            if (max == undefined) max = list[i].age;
            else max = Math.max(max, list[i].age);
        }

    for(let i = 0; i < list.length; i++) {
        if(result.length == n) break;
        if(list[i].age == max && list[i].gender == "M")
            result.push(list[i]);
    }

    return result;
}

function youngestFemaleNamesCats(list, n) {
    const result = [];
    let min;

    for(let i = 0; i < list.length; i++)
        if(list[i].gender == "F") {
            if (min == undefined) min = list[i].age;
            else min = Math.min(min, list[i].age);
        }

    for(let i = 0; i < list.length; i++) {
        if(result.length == n) break;
        if(list[i].age == min && list[i].gender == "F")
            result.push(list[i].name);
    }

    return result;
}

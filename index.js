function getRaitingDescription(raiting) {
    let desription = "";
    switch (raiting) {
        case 0:
            desription += 'Best';
            desription += 'Best';
            break;
        case 1:
            desription += 'Very Good';
            break;
        case 2:
            desription += 'Awfull';
            break;
        default:
            desription += 'Default';
            break;
    }
    return desription;
}
let desription = getRaitingDescription(0);
console.log(desription);
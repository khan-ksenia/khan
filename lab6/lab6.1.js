// JavaScript source code
function calculateRingArea(r1, r2) {
    let ringArea = 0;
    if (r1 > r2) {
        ringArea = Math.round((3.14 * r1 ** 2 - 3.14 * r2 ** 2) * 100) / 100;
    }
    else if (r1 < r2) {
        ringArea = Math.round((3.14 * r2 ** 2 - 3.14 * r1 ** 2) * 100) / 100;
    }
    return ringArea
}

let radius1 = 10;
let radius2 = 10;
let ringArea12 = calculateRingArea(radius1, radius2)
console.log(ringArea12)




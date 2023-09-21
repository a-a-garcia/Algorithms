// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }

    let vertical = 0; // Tracks North-South position
    let horizontal = 0; // Tracks East-West position

    for (let step of walk) {
        switch (step) {
            case 'n':
                vertical++;
                break;
            case 's':
                vertical--;
                break;
            case 'e':
                horizontal++;
                break;
            case 'w':
                horizontal--;
                break;
            default:
                return false; // Invalid step
        }
    }

    // Check if the final position is back at the starting point (0, 0)
    return vertical === 0 && horizontal === 0;
}
// function isValidWalk(walk) {
//     const oppositeDirections = {
//         'n' : 's',
//         'e' : 'w',
//         's' : 'n',
//         'w' : 'e'
//     }

//     if (walk.length !== 10) {
//         return false;
//     } else {
//         let splitArray = walk.slice(5)
//         let comparisonArray = []
//         for (let i = 0; i < walk.length / 2; i++) {
//             comparisonArray.push(oppositeDirections[walk[i]])
//         }
//         console.log(comparisonArray)
//         console.log(splitArray)
//         if (splitArray.every((element, index) => element === comparisonArray[index])) {
//             return true
//         } else {
//             return false
//         }
//     }
// }


isValidWalk(['n','n','s','s','w','w','e','e','n','s'])
// isValidWalk('n','n','n','w','w','s','s','s','e','e')
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))
// console.log(isValidWalk(['w']))
function swapName(string) {
    let swapped = string.split(" ")
    if (swapped.length > 2) {
        let middleNames = swapped.slice(0, swapped.length - 1)
        return `${swapped[swapped.length - 1]}, ${middleNames.join(" ")}`
    } else {
        return `${swapped[1]}, ${swapped[0]}`
    }

}

swapName('Joe Roberts');    // "Roberts, Joe"
swapName('First Second Third Last'); // Last, First Second Third
swapName('Homer Jay Simpson'); //Simpson, Homer Jay
swapName('LeBron Raymone James'); //James, LeBron Raymone
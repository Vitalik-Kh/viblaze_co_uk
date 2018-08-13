const randomizer = (min,max) => {
    return Math.floor((Math.random() * (max + 1 - min)) + min);
}

export default randomizer;
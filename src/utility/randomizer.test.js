import randomizer from './randomizer';

it('return random number to be in range', () => {
    let iter = 1000;
    let randomNumb, x, y, min, max, range = 10;
    while(iter > 0) {
        randomNumb = null;
        x = Math.floor(Math.random() * range);
        y = Math.floor(Math.random() * range);
        min = x < y ? x : y;
        max = x < y ? y : x;
        if (min < max) {
            randomNumb = randomizer(min, max);
            expect(randomNumb).toBeGreaterThanOrEqual(min);
            expect(randomNumb).toBeLessThanOrEqual(max);
        }
        iter--;
    }
});
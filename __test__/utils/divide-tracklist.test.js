import { divideTracklist } from '../../src/utils/divide-tracklist';

describe('divideTracklist', () => {
    it('should return the same array if length is less than or equal to 9', () => {
        const input = [1, 2, 3, 4, 5];
        const output = [1, 2, 3, 4, 5];
        expect(divideTracklist([input])).toEqual([[output]]);
    });

    it('should divide the array into sub arrays if length is greater than 9', () => {
        const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const output = [
            [1, 2, 3, 4, 5, 6, 7, 8, 9],
            [10, 11, 12, 13],
        ];
        expect(divideTracklist(input)).toEqual(output);
    });
});

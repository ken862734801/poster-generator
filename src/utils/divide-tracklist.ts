export const divideTracklist = (list: string[]): string[][] => {
    if (list.length <= 9) {
        return [list];
    }

    const left = list.slice(0, 9);
    const right = list.slice(9);
    return [left, ...divideTracklist(right)];
};

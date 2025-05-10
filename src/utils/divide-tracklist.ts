export const divideTracklist = <T>(
    list: T[],
    maxPerColumn = 9
  ): T[][] => {
    if (list.length <= maxPerColumn) {
      return [list];
    }
  
    const head = list.slice(0, maxPerColumn);
    const tail = list.slice(maxPerColumn);
    return [head, ...divideTracklist<T>(tail, maxPerColumn)];
  };
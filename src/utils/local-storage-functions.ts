export const saveToLocalStorage = (name: string, data: any) => {
    localStorage.setItem(name, JSON.stringify(data));
};

export const getFromLocalStorage = (name: string) => {
    return localStorage.getItem(name);
};

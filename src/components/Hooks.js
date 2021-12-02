export const useStorage = () => {
    const clearItem  = () => {
        localStorage.clear();
    }
    const setItem = (ob, name) => {
        localStorage.setItem(name, JSON.stringify(ob))
    }
    const getItem = (name) => {
        const retrivedObject = JSON.parse(localStorage.getItem(name));
        return retrivedObject;
    }
   
    return [getItem, setItem, clearItem];
}
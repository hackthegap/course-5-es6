export const createState = (initialState) => {
    
    let state = initialState;
    const listeners = new Set();

    const getState = () => state;

    const setState = (newState) => {
        state = newState;
        listeners.forEach(listener => listener(state));
    };

    const subscribe = (listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener); // Unsubscribe function
    };

    return { getState, setState, subscribe };
};

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + action.payload;

        case 'DECREMENT': 
            return state -1;

        default:
            return state; // Don't ever forget to add a Default case
    }
};
export default counterReducer;
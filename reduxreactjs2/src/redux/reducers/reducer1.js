import { ActionTypes } from "../actions";

const initialState = {
    number: 0
};

const numberReduxcer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCREASE:
            return {
                number: state.number + 1
            }
        default:
            return state;

    }
}
export default numberReduxcer;
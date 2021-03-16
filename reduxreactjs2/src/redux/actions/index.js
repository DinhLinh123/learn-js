export const ActionTypes = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE'
};
export function increaseNumber() {
    return {
        type: ActionTypes.INCREASE
    }
}

export function decreaseNumber (){
    return {
        type: ActionTypes.DECREASE
    }
}

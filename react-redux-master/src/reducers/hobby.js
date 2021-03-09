const initialState = {

      list : [],
      acctiveID : null, 
}

const hobbyReducer = (state = initialState , action) => {

      switch(action.type) {

            case 'ADD_HOBBY': {

                  return {

                        ...state,
                        list :[...state.list, ...action.payload],
                  };
            }
            
            case 'SET_ACTIVIE_HOBBY': {

                  return state;
            }

            case 'Add_Products' : {

                  const newList = [...state.list];
                  
                  newList.push(action.addload);
                  return {

                        ...state,
                        list :newList,
                  };
            }

            case 'DeleteProducts' : {

                  const newList = [...state.list];
                  
                  newList.push(action.deleteload);
                  return {

                        ...state,
                        list :newList,
                  };
            }

            default:

                  return state;
      }
}

export default hobbyReducer;
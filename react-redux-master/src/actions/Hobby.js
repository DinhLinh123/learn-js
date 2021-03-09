export const addNewHobby = (hobby) => {

      return {

            type : 'ADD_HOBBY',
            payload : hobby,
      }
}

export const setActiveHobby = (hobby) => {

      return {

            type : 'SET_ACTIVE_HOBBY',
            payload : hobby,
      }
}

export const AddProducts = (hobby) => {

      return {

            type : 'Add_Products',
            addload : hobby,
      }
}

export const DeleteProducts = (hobby) => {

      return {

            type : 'DELETE_PRODUCTS',
            deleteload : hobby,
      }
}


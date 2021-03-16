console.log(window.Redux)

const { createStore }= window.Redux;

// setup redux store
// state
// reducer
// store

const initialState= [
    'Listen to music',
];

const hobbyReducer = (state = initialState, action) => {
    return state;
}

const store = createStore(hobbyReducer);

// render redux hobby list
const renderHobbyList = (hobbyList) => {
    if (!Array.isArray(hobbyList) || hobbyList.length ===0) return;

    const ulElement = document.querySelector('#hobbyListId');
    if(!ulElement) return;

    // reset previous content of ul 
    ulElement.innerHTML = '';

    for (const hobby of hobbyList) {
        const liElment = document.createElement('li');
        liElment.textContent = hobby;

        ulElement.appendChild(liElment);
    }
}

// render initial hobby list
const initialHobbyList = store.getState();
console.log(initialHobbyList);
renderHobbyList(initialHobbyList);

// handle form submit
const hobbyFormElement = document.querySelector('#hobbyFormId');
if(hobbyFormElement) {
    const handleFormSubmit =(e) => {
        // prevent browser from reloading
        e.preventDefault();

        const hobbyTextElement = hobbyFormElement.querySelector('#hobbyTextId');
        if(!hobbyTextElement) return;
        console.log('SUBMIT', hobbyTextElement.value);
    };
    hobbyFormElement.addEventListener('submit', handleFormSubmit); 
}

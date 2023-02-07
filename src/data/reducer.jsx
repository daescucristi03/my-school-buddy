export const initialState = {
    navState: 'closed'
}

const reducer = (state, action) => {
    console.clear();
    console.log('active nav state -> ' + state.navState);

    switch(action.type) {
        case 'TOGGLE_NAV_STATE':
            return {
                ...state,
                navState: state.navState === 'open' ? 'closed' : 'open'
            }

        default:
            return;
    };
};

export default reducer;
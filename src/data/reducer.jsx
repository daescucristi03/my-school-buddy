export const initialState = {
    navState: 'closed'
}

const reducer = (state, action) => {
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
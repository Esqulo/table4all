export const initialState = {
    // usar como exemplo:
    // o avatar é um só, por isso se usa aspas
    // os favoritos são vários, por isso é um array
    avatar: '',
    favorites: [],
    appointments: []
};

export const UserReducer = (state, action) =>{
    switch(action.type){
        case 'setAvatar':
            return{ ...state, avatar: action.payload.avatar };
        break;
        default:
            return state;
    }


}
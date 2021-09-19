import {ADD_FAVORITE_USERS, REMOVE_FAVORITE_USERS, SET_USERS, TOGGLE_IS_FETCHING} from "./actionsType";

let initialState = {
    // users: [
    //     {
    //         "name": "Белов Денис",
    //         "email": "belovdenys@gmail.com",
    //         "followed": true,
    //         "photo": "https://avatars.githubusercontent.com/u/43008522?v=4",
    //         "type": "Психолог",
    //         "id": 22
    //     },
    //     {
    //         "name": " Даценко Ольга",
    //         "email": "olha.datcenko@gmail.com",
    //         "type": "Психолог",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "1"
    //     },
    //     {
    //         "name": " Купар Елена",
    //         "email": "k.elena@gmail.com",
    //         "type": "Психотерапевт",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "3"
    //     },
    //     {
    //         "name": "Олейник Татьяна",
    //         "email": "ol.tanya@gmail.com",
    //         "type": "Психотерапевт",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "4"
    //     },
    //     {
    //         "name": "Мелкумян Инна",
    //         "email": "inna@gmail.com",
    //         "type": "Психиатр",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "5"
    //     },
    //     {
    //         "name": "Коваль Анна",
    //         "email": "koval@gmail.com",
    //         "type": "Психолог",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "6"
    //     },
    //     {
    //         "name": "Кревенченко Юлия",
    //         "email": "krevenchenko@gmail.com",
    //         "type": "Психиатр",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "7"
    //     },
    //     {
    //         "name": "Пасько Ольга",
    //         "email": "opasko@gmail.com",
    //         "type": "Психотерапевт",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "8"
    //     },
    //     {
    //         "name": "Кондратюк Юлия",
    //         "email": "kondrat@gmail.com",
    //         "type": "Психотерапевт",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "9"
    //     },
    //     {
    //         "name": "Итак Олександра",
    //         "email": "sashaitak@gmail.com",
    //         "type": "Психиатр",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "10"
    //     },
    //     {
    //         "name": "Гнатюк Наталия",
    //         "email": "natali@gmail.com",
    //         "type": "Психолог",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "11"
    //     },
    //     {
    //         "name": "Ковальчук Денис",
    //         "email": "denisca@gmail.com",
    //         "type": "Психиатр",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "12"
    //     },
    //     {
    //         "name": "Журавок Татьяна",
    //         "email": "tanyz1985@gmail.com",
    //         "type": "Психотерапевт",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "13"
    //     },
    //     {
    //         "name": " Конец Света",
    //         "email": "svetochka@gmail.com",
    //         "type": "Психотерапевт",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "14"
    //     },
    //     {
    //         "name": " Красна Лидия",
    //         "email": " akrasna@gmail.com",
    //         "type": "Психиатр",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "15"
    //     },
    //     {
    //         "name": "Мазур Виталий",
    //         "email": "mazur.v@gmail.com",
    //         "type": "Психолог",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "16"
    //     },
    //     {
    //         "name": "Балиев Тарас",
    //         "email": "tarasbal@gmail.com",
    //         "type": "Психиатр",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "17"
    //     },
    //     {
    //         "name": "Тимошенко Елена",
    //         "email": "tim.elena@gmail.com",
    //         "type": "Психотерапевт",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "18"
    //     },
    //     {
    //         "name": "Журенко Олександр",
    //         "email": "sashazurenko@gmail.com",
    //         "type": "Психотерапевт",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "19"
    //     },
    //     {
    //         "name": "Стрижак Юлия",
    //         "email": "struzakjulia@gmail.com",
    //         "type": "Психиатр",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "20"
    //     },
    //     {
    //         "name": "Татаров Дмитрий:",
    //         "email": "dimitri.tatarov@gmail.com",
    //         "type": "Психолог",
    //         "followed": false,
    //         "photo": "null",
    //         "id": "21"
    //     }
    // ]
    users: [],
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE_USERS:
            // debugger
            return {
                ...state,
                users: Object.keys(state.users).map((user) => {
                    if (state.users[user].id === action.id) {
                        return {...state.users[user], followed: true,}
                    }
                    return state.users[user]
                })
            }
        case REMOVE_FAVORITE_USERS:
            return {
                ...state,
                users: Object.keys(state.users).map((user) => {
                    if (state.users[user].id === action.id) {
                        return {...state.users[user], followed: false,}
                    }
                    return state.users[user]
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state,isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export default usersReducer;

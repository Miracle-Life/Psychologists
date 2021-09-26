import {child, get, onValue, ref, set, update} from "firebase/database";
import {db, dbRef} from "../../base";
import {setUsers, toggleIsFetching} from "../../store/actions";


export const usersAPI = {
    getUsers() {

    },

    setFollow(userId) {
        const r = ref(db, '/psychologists/' + userId)
        return update(r, {"followed": true})
    },
    setUnfollow(userId) {
        const r = ref(db, '/psychologists/' + userId)
        return update(r, {"followed": false})
    },
    setDelete(userId) {
        return set(ref(db, '/psychologists/' + userId), null)
    }
}


// export const getUsers = (toggleIsFetching,setUsers) => {
//     toggleIsFetching(true)
//     const starCountRef = ref(db, "psychologists");
//     onValue(starCountRef, (res) => {
//         const data = res.val();
//         setUsers(data)
//         toggleIsFetching(false)
//     });
// }


//получение данных с базы в компоненте
// setTimeout(() => {
//     this.props.toggleIsFetching(true)
//     const starCountRef = ref(db, "psychologists");
//     onValue(starCountRef, (res) => {
//         const data = res.val();
//         this.props.setUsers(data)
//         this.props.toggleIsFetching(false)
//     });
// }, 2500)

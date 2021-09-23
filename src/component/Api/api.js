import {onValue, ref} from "firebase/database";
import {db} from "../../base";

export const getUsers = (toggleIsFetching,setUsers) => {
    toggleIsFetching(true)
    const starCountRef = ref(db, "psychologists");
    onValue(starCountRef, (res) => {
        const data = res.val();
        setUsers(data)
        toggleIsFetching(false)
    });
}


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

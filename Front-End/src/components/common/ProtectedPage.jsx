import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setAuthModalOpen} from "../../redux/features/authModalSlice.js";


const ProtectedPage = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(setAuthModalOpen(user))
    }, [user, dispatch]);

    return(
        user? children : null
    );
};
export default ProtectedPage;
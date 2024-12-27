import {useEffect, useState} from "react";
import {Paper, Box, LinearProgress, Toolbar} from "@mui/material";
import {useSelector} from "react-redux";
import LogoLoad from "./LogoLoad.jsx";

const GlobalLoading = () => {
    const {globalLoading} = useSelector((state) => state.globalLoading);

    const[isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if(globalLoading) {
            setIsLoading(true);
        }else {
            setTimeout(() => setIsLoading(false), 1000);
        }
    }, [globalLoading]);
    return(
        <>
            <Paper sx={{
                opacity:  isLoading ? 1 : 0,
                pointerEvents: 'none',
                transition: "all .3s ease-in-out",
                position: "fixed",
                width: "100vw",
                height: "100vh",
                zIndex: 999
            }}>
                <Toolbar/>
                <LinearProgress/>
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}>
                    <LogoLoad />
                </Box>
            </Paper>
        </>
    );
};
export default GlobalLoading;
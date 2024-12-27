import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import GlobalLoading from "../common/GlobalLoading.jsx";
import Footer1 from "../common/Footer";
import Navbar from "../common/Navbar.jsx";

const MainLayout = () => {
    return(
        <>
            {/*global loading*/}
            <GlobalLoading/>
            {/*global loading*/}
            {/*login modal*/}
            {/*login modal*/}
            <Box display="flex" minHeight="100vh">
                {/*  header  */}
                <Navbar></Navbar>
                {/*  header  */}

                {/*  main  */}
                <Box
                    component="main"
                    flexGrow={1}
                    overflow="hidden"
                    minHeight="100vh"
                >
                    <Outlet/>
                </Box>
                {/*  main  */}
            </Box>
            {/*  footer  */}
            <Footer1 />
            {/*  footer  */}
        </>
    )
};
export default MainLayout;
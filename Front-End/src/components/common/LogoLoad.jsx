import {Typography, useTheme} from "@mui/material";


const LogoLoad = () => {
    const theme = useTheme()

    return(
        <Typography fontWeight="700" fontSize="4rem" >
            My<span style={{color:theme.palette.primary.main}}>Movie</span>List
        </Typography>
    )
};
export default LogoLoad;
import {LogoutOutlined} from "@mui/icons-material";
import {Button, ListItemButton, ListItemIcon, ListItemText, Menu, Typography} from "@mui/material";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import menuConfigs from "../../configs/menu.configs.jsx";
import {setUser} from "../../redux/features/userSlice.js";

const UserMenu = () => {
    const {user} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const toggleMenu = (e) => setAnchorEl(e.currentTarget);

    return(
        <>
            {user && (
                <>
                <Typography
                    varient="h6"
                    sx={{cursor: "pointer",userSelect:"none"}}
                    onClick={toggleMenu}
                >
                    {user.displayName}
                </Typography>
                    <Menu
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={() => setAnchorEl(null)}
                        PaperProps={{sx:{padding:0}}}
                    >
                        {menuConfigs.main?.length > 0 ? (
                            menuConfigs.main.map((item, index) => (
                                <ListItemButton
                                component={Link}
                                to={item.path}
                                key={index}
                                onClick={() => setAnchorEl(null)}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText disableTypography primary={
                                        <Typography textTransform="uppercase"> {item.display} </Typography>
                                    }/>
                                </ListItemButton>
                            ))
                        ) : (
                            <div>No menu items available</div>
                        )}
                        <ListItemButton
                            sx={{ borderRadius: "10"}}
                            onClick={() => dispatch(setUser(null))}
                        >
                            <listItemIcon></listItemIcon>
                        </ListItemButton>
                    </Menu>
                </>
            )}
        </>
    );
};

export default UserMenu;
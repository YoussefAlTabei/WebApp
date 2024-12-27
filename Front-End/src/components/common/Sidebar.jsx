import {
    Drawer,
    List,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { DarkModeOutlined, WbSunnyOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import menuConfigs from "../../configs/menu.configs.jsx";
import { themeModes } from "../../configs/theme.configs.jsx";
import { setThemeMode } from "../../redux/features/themeModeSlice.js";
import Logo from "./Logo.jsx";
import uiConfigs from "../../configs/ui.configs.jsx";

const Sidebar = ({ open, toggleSidebar }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { appState } = useSelector((state) => state.appState);
    const { themeMode } = useSelector((state) => state.themeMode);

    const sidebarWidth = uiConfigs.size.sidebarWidth;

    const onSwitchTheme = () => {
        const theme =
            themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
        dispatch(setThemeMode(theme));
    };

    const drawer = (
        <>
            <Toolbar sx={{ paddingY: "20px", color: "text.primary" }}>
                <Stack width="100%" direction="row" justifyContent="center">
                    <Logo />
                </Stack>
            </Toolbar>
            <List sx={{ paddingX: "30px" }}>
                <Typography variant="h6" marginBottom="20px">
                    MENU
                </Typography>
                {menuConfigs.main?.length > 0 ? (
                    menuConfigs.main.map((item, index) => (
                        <ListItemButton
                            key={index}
                            sx={{
                                borderRadius: "10px",
                                marginY: 1,
                                backgroundColor: appState?.includes(item.state)
                                    ? "primary.main"
                                    : "unset",
                            }}
                            component={Link}
                            to={item.path}
                            onClick={() => toggleSidebar(false)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText
                                disableTypography
                                primary={
                                    <Typography textTransform="uppercase">
                                        {item.display}
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    ))
                ) : (
                    <Typography>No menu items available</Typography>
                )}
                {user && (
                    <>
                        <Typography variant="h6" marginBottom="20px">
                            PERSONAL
                        </Typography>
                        {menuConfigs.user?.length > 0 ? (
                            menuConfigs.user.map((item, index) => (
                                <ListItemButton
                                    key={index}
                                    sx={{
                                        borderRadius: "10px",
                                        marginY: 1,
                                        backgroundColor: appState?.includes(
                                            item.state
                                        )
                                            ? "primary.main"
                                            : "unset",
                                    }}
                                    component={Link}
                                    to={item.path}
                                    onClick={() => toggleSidebar(false)}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText
                                        disableTypography
                                        primary={
                                            <Typography textTransform="uppercase">
                                                {item.display}
                                            </Typography>
                                        }
                                    />
                                </ListItemButton>
                            ))
                        ) : (
                            <Typography>No personal menu items available</Typography>
                        )}
                    </>
                )}
                <Typography variant="h6" marginBottom="20px">
                    THEME
                </Typography>
                <ListItemButton onClick={onSwitchTheme}>
                    <ListItemIcon>
                        {themeMode === themeModes.dark && <DarkModeOutlined />}
                        {themeMode === themeModes.light && <WbSunnyOutlined />}
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography textTransform="uppercase">
                                {themeMode === themeModes.dark
                                    ? "Dark Mode"
                                    : "Light Mode"}
                            </Typography>
                        }
                    />
                </ListItemButton>
            </List>
        </>
    );

    return (
        <Drawer
            open={open}
            onClose={() => toggleSidebar(false)}
            sx={{
                "& .MuiDrawer-Paper": {
                    boxSizing: "border-box",
                    width: sidebarWidth,
                    borderRight: "0px",
                },
            }}
        >
            {drawer}
        </Drawer>
    );
};

export default Sidebar;

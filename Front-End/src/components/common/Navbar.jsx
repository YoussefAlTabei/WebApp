import { useSelector, useDispatch } from "react-redux";
import { Menu, DarkModeOutlined, WbSunnyOutlined } from "@mui/icons-material";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Stack,
    Toolbar,
    useScrollTrigger,
} from "@mui/material";
import React, { cloneElement, useState } from "react";
import { Link } from "react-router-dom";
import menuConfigs from "../../configs/menu.configs.jsx";
import { themeModes } from "../../configs/theme.configs.jsx";
import { setAuthModalOpen } from "../../redux/features/authModalSlice.js";
import { setThemeMode } from "../../redux/features/themeModeSlice.js";
import Logo from "./Logo.jsx";
import UserMenu from "./UserMenu.jsx";
import Sidebar from "./Sidebar.jsx";

const ScrollAppBar = ({ children, window }) => {
    const { themeMode } = useSelector((state) => state.themeMode);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        sx: {
            color: trigger
                ? "text.primary"
                : themeMode === themeModes.dark
                    ? "primary.contrastText"
                    : "text.primary",
            backgroundColor: trigger
                ? "background.paper"
                : themeMode === themeModes.dark
                    ? "transparent"
                    : "background.paper",
        },
    });
};

const Navbar = () => {
    const { user } = useSelector((state) => state.user);
    const { appState } = useSelector((state) => state.appState);
    const { themeMode } = useSelector((state) => state.themeMode);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleSidebar = (open) => setSidebarOpen(open);

    const onSwitchTheme = () => {
        const theme =
            themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
        dispatch(setThemeMode(theme));
    };

    return (
        <>
            {/* Sidebar */}
            <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Scrollable AppBar */}
            <ScrollAppBar>
                <AppBar elevation={0} sx={{ zIndex: 9999 }}>
                    <Toolbar
                        sx={{
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* Mobile Menu */}
                        <Stack direction="row" spacing={1} alignItems="center">
                            <IconButton
                                color="inherit"
                                sx={{ mr: 2, display: { md: "none" } }}
                                onClick={() => toggleSidebar(true)}
                            >
                                <Menu />
                            </IconButton>
                            <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
                                <Logo />
                            </Box>
                        </Stack>

                        {/* Main Menu */}
                        <Box
                            flexGrow={1}
                            alignItems="center"
                            display={{ xs: "none", md: "flex" }}
                        >
                            <Box sx={{ marginRight: "30px" }}>
                                <Logo />
                            </Box>
                            {menuConfigs.main?.length > 0 ? (
                                menuConfigs.main.map((item, index) => (
                                    <Button
                                        key={index}
                                        sx={{
                                            color: appState?.includes(item.state)
                                                ? "primary.contrastText"
                                                : "inherit",
                                            mr: 2,
                                        }}
                                        component={Link}
                                        to={item.path}
                                        variant={
                                            appState?.includes(item.state)
                                                ? "contained"
                                                : "text"
                                        }
                                    >
                                        {item.display}
                                    </Button>
                                ))
                            ) : (
                                <div>No menu items available</div>
                            )}
                            <IconButton sx={{ color: "inherit" }} onClick={onSwitchTheme}>
                                {themeMode === themeModes.dark && <DarkModeOutlined />}
                                {themeMode === themeModes.light && <WbSunnyOutlined />}
                            </IconButton>
                        </Box>

                        {/* User Menu */}
                        <Stack spacing={3} direction="row" alignItems="center">
                            {!user && (
                                <Button
                                    variant="contained"
                                    onClick={() => dispatch(setAuthModalOpen(true))}
                                >
                                    Sign In
                                </Button>
                            )}
                            {user && <UserMenu />}
                        </Stack>
                    </Toolbar>
                </AppBar>
            </ScrollAppBar>
        </>
    );
};

export default Navbar;

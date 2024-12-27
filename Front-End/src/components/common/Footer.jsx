import { Paper, Stack, Button, Box } from '@mui/material';
import React from 'react';
import Container from './Container';
import Logo from './Logo';
import menuConfigs from "../../configs/menu.configs.jsx";
import { Link } from "react-router-dom";

const Footer1 = () => {
    console.log(menuConfigs.main);
    return (
        <Container>
            <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem" }}>
                <Stack
                    alignItems="center"
                    justifyContent="space-between"
                    direction={{ xs: "column", md: "row" }}
                    sx={{ height: "max-content" }}
                >
                    <Logo />
                    <Box>
                        {menuConfigs.main?.length > 0 ? (
                            menuConfigs.main.map((item, index) => (
                                <Button
                                    key={index}
                                    sx={{ color: "inherit" }}
                                    component={Link}
                                    to={item.path}
                                    startIcon={item.icon}
                                >
                                    {item.display}
                                </Button>
                            ))
                        ) : (
                            <div>No menu items available</div>
                        )}
                    </Box>
                </Stack>
            </Paper>
        </Container>
    );
};

export default Footer1;
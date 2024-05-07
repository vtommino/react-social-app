import { Link } from 'react-router-dom';
import { Box, Typography, Button, TextField, Divider } from '@mui/material';

function LoginPage() {
    return (
        <Box
            component="main"
            height="100vh"
            display="flex"
            justifyContent="space-between"
        >
            <Box
                component="section"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                flex={1}
                padding="20px"
                sx={{ flex: 1, backgroundColor: "lightblue" }}
            >
                <Typography variant="h3" fontWeight={800} color="#4D8ED3">
                    {" "}
                    FakeBook{" "}
                </Typography>
                <Typography>
                    {" "}
                    Connect with friends and the world {""}
                </Typography>
            </Box>
            <Box
                component="section"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                flex={1}
                padding="20px"
                sx={{ flex: 1, backgroundColor: "Lightpink" }}
            >
                <Box
                    component="form"
                    display="flex"
                    flexDirection="column"
                    gap="12px"
                    padding="16px"
                    backgroundColor="white"
                    borderRadius={1.5}
                >
                    <TextField
                        type="text"
                        variant="outlined"
                        label="Email or Phone Number"
                    />
                    <TextField
                        type="password"
                        size="small"
                        variant="outlined"
                        label="Password"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        disableElevation
                        color="primary">
                        {" "}
                        LOGIN
                    </Button>
                    <Button
                        type="button"
                        variant="text"
                        disableElevation
                        color="primary"
                        sx={{
                            fontsize: "10px",
                        }}
                    >
                        {" "}
                        Forgot password?
                    </Button>
                    <Divider />
                    <Button type="button" variant="contained" color="success">
                        {" "}
                        Create new account
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}
export default LoginPage;

{/* <div>
    <h1>LoginPage</h1>
    <Link to='/'>"HomePage</Link>
    <Link to='/profile'>ProfilePage</Link>
</div> */}
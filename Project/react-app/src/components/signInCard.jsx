import React, { useEffect, useState } from "react";

import Link from "next/link";

import { Card, Typography, Button, TextField, Box, Divider } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";


export const SignInCard = ({ }) => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const theme = useTheme();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSignIn = async () => {
        const signInResponse = await signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
        }).then(res => {
            if (res.error) {
                setError(true);
            } else {
                router.push("/dashboard");
            }
        });
    }

    const handleOAuthSignIn = async (providerString) => {
        const signInResponse = await signIn(providerString);
    }

    const outerCardStyle = {
        width: "400px",
        // height: "600px",
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "5px",
        gap: "1rem",
        position: "relative",
        top: "-7%",
    }

    const textFieldStyle = { width: "80%" }

    return (<>
        <Box sx={outerCardStyle}>
            <Typography variant="h5"
                sx={{
                    fontWeight: "bold",
                    marginBottom: "1rem"
                }}
            >
                Sign In
            </Typography>
            <Divider sx={{ width: "80%" }}>
                <Typography variant="body1" sx={{ padding: "0 1rem" }}>with credentials</Typography>
            </Divider>
            <TextField
                sx={textFieldStyle}
                variant="filled"
                color="tertiary"
                placeholder="Email"
                size="small"
                value={email}
                onChange={handleEmailChange}
            />
            <TextField
                sx={textFieldStyle}
                variant="filled"
                color="tertiary"
                placeholder="Password"
                size="small"
                type="password"
                value={password}
                onChange={handlePasswordChange}
            />

            <Button
                variant="contained"
                sx={{
                    width: "50%",
                    borderRadius: "5px"
                }}
                color="primary"
                onClick={handleSignIn}
            >
                Sign In
            </Button>
            <Divider sx={{ width: "80%" }}>
                <Typography variant="body1" sx={{ padding: "0 1rem" }}>or OAuth</Typography>
            </Divider>
            <Button
                variant="contained"
                sx={{
                    width: "50%",
                    borderRadius: "5px"
                }}
                color="secondary"
                onClick={() => handleOAuthSignIn("google")}
            >
                Sign In with Google
            </Button>
            <Button
                variant="contained"
                sx={{
                    width: "50%",
                    borderRadius: "5px"
                }}
                color="secondary"
                onClick={() => handleOAuthSignIn("github")}
            >
                Sign In with Github
            </Button>
            {error && <Typography variant="body1" color={"error"}>Invalid login credentials</Typography>}
        </Box>
    </>)
}
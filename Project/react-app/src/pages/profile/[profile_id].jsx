import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Typography, useTheme } from '@mui/material';
import TopBar from '@/components/TopBar';
import Head from 'next/head'
import ProjectList from '@/components/ProjectList';

export default function Page() {
    // const session = useSession();
    const theme = useTheme();
    const router = useRouter();
    const { profile_id } = router.query;
    const [profileData, setProfileData] = React.useState({});
    const [projects, setProjects] = React.useState([]);

    useEffect(() => {
        const asyncFunc = async () => {
            let response = await fetch(`${process.env.NEXT_PUBLIC_ACCOUNT_API_URL}/by_id/${profile_id}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) {
                console.log(response)
                return
            }
            let data = await response.json()
            console.log(data)
            setProfileData(data)
            let response2 = await fetch(`${process.env.NEXT_PUBLIC_PROJECT_API_URL}/public/by_owner/${profile_id}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response2.ok) {
                console.log(response2)
                return
            }
            let data2 = await response2.json()
            console.log(data2)
            setProjects(data2)
        }
        console.log(profile_id)
        if (profile_id) asyncFunc();
    }, [profile_id]);

    return (<>
        <Head>
            <title>CAPSTONE</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <style>
            {`
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}
        </style>
        <main style={{
            // backgroundColor: "#FF0000",
            color: theme.palette.text.primary,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            // gap: '2rem',
            position: 'relative',
            overflow: 'hidden',
            gap: '1rem',
        }}>

            <TopBar
                alternate
                showAccount={false}
                titleText={"Profile"}
                backLocation={"/"}
            >

            </TopBar>
            <div style={{
                position: 'absolute',
                top: "-60%",
                // left: "-75%",
                // transform: "translate(-50%, -50%)",
                width: '250vw',
                height: '250vh',
                zIndex: -1,
                backgroundImage: 'url(/spiderweb.svg)',
                backgroundSize: '110vw',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: theme.palette.background.default,
                animation: 'rotate 120s infinite linear',

            }}></div>
            <div style={{
                width: 'calc(100% - 2rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'flex-start',
                alignItems: 'center',

            }}>
                <div style={{
                    backgroundColor: theme.palette.background.paper,
                    padding: '1rem',
                    borderRadius: '3px',
                    width: '450px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                    <Typography variant='h4'>{profileData.name}</Typography>
                    <Typography variant='h6'>ID: <span style={{
                        fontFamily: 'monospace',
                        backgroundColor: theme.palette.background.default,
                        padding: '0.25rem',
                        borderRadius: '3px',
                        fontSize: '0.95rem',
                    }}>{profileData.account_id}</span></Typography>
                    <Typography variant='h6'>Email: {profileData.email}</Typography>
                </div>
                <ProjectList projects={projects} setProjects={setProjects} viewOnly />
            </div>
        </main>
    </>)
}
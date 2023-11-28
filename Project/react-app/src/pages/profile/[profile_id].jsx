import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Typography, useTheme } from '@mui/material';
import TopBar from '@/components/TopBar';
import Head from 'next/head'
import ProjectList from '@/components/ProjectList';
import ProfileView from '@/components/ProfileView';
import FollowingView from '@/components/FollowingView';
import { Scrollbar } from 'react-scrollbars-custom';

export default function Page() {
    // const session = useSession();
    const theme = useTheme();
    const router = useRouter();
    const { profile_id } = router.query;
    const [profileData, setProfileData] = React.useState(null);
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
                //console.log(response)
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
                //console.log(response2)
                return
            }
            let data2 = await response2.json()
            //console.log(data2)
            setProjects(data2)
        }
        console.log(profile_id)
        if (profile_id) asyncFunc();
    }, [profile_id]);

    return (<>
        <Head>
            <title>{profileData ? profileData.name : "Profile"} - 🕸</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🕸️</text></svg>"></link>
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
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.default,
        }}>
            <div style={{
                position: 'absolute',
                top: "-50%",
                left: "-50%",
                width: '200vw',
                height: '200vh',
                zIndex: 0,
                backgroundImage: 'url(/spiderweb.svg)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                animation: 'rotate 120s infinite linear',

            }}></div>
            <TopBar
                alternate
                titleText={profileData ? profileData.name : "Profile"}
                backLocation={"/"}
                showSignIn
            >

            </TopBar>
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: '100%',
                zIndex: 1,
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    height: 'calc(100% - 2rem)',
                    padding: '1rem 0.5rem 1rem 1rem',
                    width: '370px',
                    minWidth: '370px',
                }}>
                    {
                        profileData && (<>
                            <ProfileView profile_in={profileData} />
                            <FollowingView following_account_id={profileData.account_id} />
                        </>)}
                </div>
                <Scrollbar>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        height: 'calc(100% - 2rem)',
                        padding: '1rem 1rem 1rem 0.5rem',
                        flexGrow: 1,
                    }}>
                        <ProjectList projects={projects} setProjects={setProjects} viewOnly />
                    </div>
                </Scrollbar>
            </div>



        </main>
    </>)
}
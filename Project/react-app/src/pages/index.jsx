import React, { useEffect } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Button, Collapse, Typography, useTheme } from '@mui/material'
import { signOut, useSession } from 'next-auth/react'
import { AccountCircle } from '@mui/icons-material'


export default function Home() {
  const theme = useTheme()
  const session = useSession()
  const [accountHovered, setAccountHovered] = React.useState(false);

  const iconDivStyle = (isHovering = false) => {
    const hoverBG = (isHovering) => isHovering ? theme.palette.background.paper : theme.palette.background.default;
    return {
      minWidth: "50px",
      height: "50px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      color: theme.palette.text.primary,
    }
  };

  const collapseStyle = (isHovering = false) => {
    const hoverBG = (isHovering) => isHovering ? theme.palette.background.paper : theme.palette.background.default;
    return {
      color: theme.palette.text.primary,
      height: '50px',
      position: "relative",
    }
  };

  return (
    <>
      <Head>
        <title>CAPSTONE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Teko&display=swap" rel="stylesheet" />
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
          @keyframes rotate-text {
            0% { transform: rotateY(0deg); }
            25% { transform: rotateY(90deg); }
            50% { transform: rotateY(180deg); }
            75% { transform: rotateY(270deg); }
            100% { transform: rotateY(360deg); }
          }
        `}
      </style>

      <main style={{
        color: theme.palette.text.primary,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
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
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          backgroundColor: theme.palette.utilBar.default,
          height: '50px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
          {session.data ?
            <div
              onMouseEnter={() => setAccountHovered(true)}
              onMouseLeave={() => setAccountHovered(false)}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}>
              <div
                style={iconDivStyle(accountHovered)}
              >
                <AccountCircle />
              </div>
              <Collapse in={accountHovered} orientation='horizontal' style={collapseStyle(accountHovered)}>
                <div
                  onClick={() => signOut()}
                  style={{
                    position: 'relative',
                    height: '50px',
                    width: '90px',
                    marginRight: '1rem',
                  }}>

                  <Typography
                    variant='body2'
                    style={{
                      color: theme.palette.text.primary,
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      textWrap: 'nowrap',
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      userSelect: 'none',
                    }}>
                    Sign out
                  </Typography>
                </div>
              </Collapse>
            </div>
            :
            <Link href="/access"
              onMouseEnter={() => setAccountHovered(true)}
              onMouseLeave={() => setAccountHovered(false)}
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}>
              <div
                style={iconDivStyle(accountHovered)}
              >
                <AccountCircle />
              </div>
              <Collapse in={accountHovered} orientation='horizontal' style={collapseStyle(accountHovered)}>
                <div style={{
                  position: 'relative',
                  height: '50px',
                  width: '80px',
                  marginRight: '1rem',
                }}>

                  <Typography
                    variant='body2'
                    style={{
                      color: theme.palette.text.primary,
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      textWrap: 'nowrap',
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      userSelect: 'none',
                    }}>
                    Sign in
                  </Typography>
                </div>
              </Collapse>
            </Link>}
        </div>

        <Typography variant="h1" style={{
          fontFamily: "'Dancing Script', cursive",
          fontFamily: "'Teko', sans-serif"
        }}>
          Web
          <span style={{
            color: theme.palette.primary.main,
          }}>
            <span style={{
              display: "inline-block",
              animation: "rotate-text 8s infinite",
              transformOrigin: "50% 50%",
            }}>
              bi
            </span>
            e
          </span>
        </Typography>
        <Image src="/spider.png" width={150} height={150} alt='spider logo, but not like spiderman' />
        <Typography variant="h4">Webbie the web <span style={{ color: theme.palette.primary.main }}>IDE</span></Typography>

        <Button variant="contained" color="primary" sx={{ borderRadius: "5px" }} onClick={() => window.location.href = "/editor/c67e2bf3-0c62-41e2-a0d7-df1a4f06bb0d"}>
          Try it out!
        </Button>

        {session.data &&
          <Link href="/dashboard">
            <Button variant="contained" color="primary" sx={{ borderRadius: "5px" }}>Dashboard</Button>
          </Link>
        }
      </main >
    </>
  )
}

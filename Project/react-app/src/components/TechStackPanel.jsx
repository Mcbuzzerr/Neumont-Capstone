import React, { useRef } from 'react'
import { useTheme } from '@emotion/react'
import Xarrow from "react-xarrows";
import { Typography, Link } from '@mui/material';


// React Icon
import DevicesIcon from '@mui/icons-material/Devices';
// Users Icon
import PeopleIcon from '@mui/icons-material/People';
// Fastapi Icon
import BoltIcon from '@mui/icons-material/Bolt';
// MongoDB Icon
import SpaIcon from '@mui/icons-material/Spa';
// Express Icon
import StorageIcon from '@mui/icons-material/Storage';
// External Resources Icon
import LanguageIcon from '@mui/icons-material/Language';
import { Scrollbar } from 'react-scrollbars-custom';

const TechStackPanel = () => {
    const theme = useTheme();

    const userIconRef = useRef(null);
    const reactIconRef = useRef(null);
    const fastapiIconRef = useRef(null);
    const fastapiIconRef2 = useRef(null);
    const fastapiIconRef3 = useRef(null);
    const mongoIconRef = useRef(null);
    const mongoIconRef2 = useRef(null);
    const expressIconRef = useRef(null);
    const gptIconRef = useRef(null);
    const internetIconRef = useRef(null);


    return (<>
        <Scrollbar
            noScrollX
            style={{
                width: "550px",
            }}>
            <div style={{
                height: "calc(500px - 2rem)",
                padding: '1rem',
            }}>

                <Typography variant='h2' style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                }}>
                    Tech Stack
                </Typography>
                <Typography variant='h6' style={{
                    color: theme.palette.text.primary,
                    marginLeft: '1rem',
                }}>
                    Webbie was built using the following technologies
                </Typography>
                <div style={{
                    padding: '1rem',
                }}>
                    <Typography variant='h4' style={{
                        fontFamily: 'Teko',
                        color: theme.palette.text.primary,
                    }}>
                        Frontend
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"https://react.dev"} target='_blank' style={{ color: theme.palette.primary.main }}>React</Link> - Frontend library
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"https://nextjs.org"} target='_blank' style={{ color: theme.palette.primary.main }}>Next.JS</Link> - Fullstack React framework
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"https://mui.com"} target='_blank' style={{ color: theme.palette.primary.main }}>Material UI</Link> - React UI and Icon library
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"https://webcontainers.io"} target='_blank' style={{ color: theme.palette.primary.main }}>WebContainers</Link> - Powers the editor's live preview
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"https://microsoft.github.io/monaco-editor/"} target='_blank' style={{ color: theme.palette.primary.main }}>Monaco</Link> - Powers the editor's code editor
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"http://xtermjs.org"} target='_blank' style={{ color: theme.palette.primary.main }}>xTerm</Link> - Powers the editor's terminal interface
                    </Typography>
                </div>
                <div style={{
                    padding: '1rem',
                }}>
                    <Typography variant='h4' style={{
                        fontFamily: 'Teko',
                        color: theme.palette.text.primary,
                    }}>
                        Backend
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"https://fastapi.tiangolo.com"} target='_blank' style={{ color: theme.palette.primary.main }}>Fastapi</Link> - Python Backend framework
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"https://expressjs.com"} target='_blank' style={{ color: theme.palette.primary.main }}>Express</Link> - Backend framework for the image proxy (authored by GPT)
                    </Typography>
                    <Typography variant='body1' style={{
                        color: theme.palette.text.primary,
                        marginLeft: '1rem',
                    }}>
                        <Link href={"https://www.mongodb.com"} target='_blank' style={{ color: theme.palette.primary.main }}>MongoDB</Link> - Databases
                    </Typography>
                </div>
            </div>
        </Scrollbar>
        <div style={{
            backgroundColor: theme.palette.background.default,
            width: "800px",
            minWidth: "800px",
            height: "500px",
            margin: '2rem 1rem',
            borderRadius: '20px',
            // border: `3px solid ${theme.palette.background.default}`
            outline: `2px solid ${theme.palette.background.paper}`,
            outlineOffset: '-5px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <PeopleIcon
                ref={userIconRef}
                style={{
                    position: 'absolute',
                    top: '25px',
                    left: '40px',
                    width: '75px',
                    height: '75px',
                    color: theme.palette.text.primary,
                    padding: '10px',
                }} />
            <Typography variant='h4' style={{
                fontFamily: 'Teko',
                color: theme.palette.text.primary,
                position: 'absolute',
                top: '100px',
                left: '60px',
                backgroundColor: theme.palette.background.default,
                zIndex: 1,
            }}>
                Users
            </Typography>
            {reactIconRef.current && userIconRef.current && (
                <Xarrow
                    start={userIconRef}
                    end={reactIconRef}
                    color={theme.palette.primary.main}
                    strokeWidth={3}
                    showHead={false}
                />
            )}
            <DevicesIcon
                ref={reactIconRef}
                style={{
                    position: 'absolute',
                    top: '25px',
                    left: '375px',
                    width: '75px',
                    height: '75px',
                    color: theme.palette.text.primary,
                    padding: '10px',
                }} />
            <Typography variant='h4'
                style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                    position: 'absolute',
                    top: '100px',
                    left: '335px',
                    backgroundColor: theme.palette.background.default,
                    zIndex: 1,
                }}>
                Next.JS React App
            </Typography>
            {fastapiIconRef.current && reactIconRef.current && (
                <Xarrow
                    start={reactIconRef}
                    end={fastapiIconRef}
                    color={theme.palette.primary.main}
                    strokeWidth={3}
                    showHead={false}
                />
            )}
            {fastapiIconRef2.current && reactIconRef.current && (
                <Xarrow
                    start={reactIconRef}
                    end={fastapiIconRef2}
                    color={theme.palette.primary.main}
                    strokeWidth={3}
                    showHead={false}
                />
            )}
            {fastapiIconRef3.current && reactIconRef.current && (
                <Xarrow
                    start={reactIconRef}
                    end={fastapiIconRef3}
                    color={theme.palette.primary.main}
                    strokeWidth={3}
                    showHead={false}
                />
            )}
            {expressIconRef.current && reactIconRef.current && (
                <Xarrow
                    start={reactIconRef}
                    end={expressIconRef}
                    endAnchor={"top"}
                    color={theme.palette.primary.main}
                    strokeWidth={3}
                    showHead={false}
                />
            )}
            <BoltIcon
                ref={fastapiIconRef}
                style={{
                    position: 'absolute',
                    top: '175px',
                    left: '225px',
                    width: '75px',
                    height: '75px',
                    color: theme.palette.text.primary,
                    padding: '10px',
                }} />
            <Typography variant='h4'
                style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                    position: 'absolute',
                    top: '255px',
                    left: '225px',
                    backgroundColor: theme.palette.background.default,
                    zIndex: 1,
                }}>
                Fastapi 1
            </Typography>
            {fastapiIconRef.current && fastapiIconRef2.current && (
                <Xarrow
                    start={fastapiIconRef}
                    end={fastapiIconRef2}
                    color={theme.palette.primary.main}
                    strokeWidth={3}
                    showHead={false}
                />
            )}
            <BoltIcon
                ref={fastapiIconRef2}
                style={{
                    position: 'absolute',
                    top: '175px',
                    left: '375px',
                    width: '75px',
                    height: '75px',
                    color: theme.palette.text.primary,
                    padding: '10px',
                }} />
            <Typography variant='h4'
                style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                    position: 'absolute',
                    top: '255px',
                    left: '375px',
                    backgroundColor: theme.palette.background.default,
                    zIndex: 1,
                }}>
                Fastapi 2
            </Typography>
            <BoltIcon
                ref={fastapiIconRef3}
                style={{
                    position: 'absolute',
                    top: '175px',
                    left: '525px',
                    width: '75px',
                    height: '75px',
                    color: theme.palette.text.primary,
                    padding: '10px',
                }} />
            <Typography variant='h4'
                style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                    position: 'absolute',
                    top: '255px',
                    left: '525px',
                    backgroundColor: theme.palette.background.default,
                    zIndex: 1,
                }}>
                Fastapi 3
            </Typography>
            {fastapiIconRef.current && reactIconRef.current && (
                <Xarrow
                    start={fastapiIconRef}
                    end={mongoIconRef}
                    color={theme.palette.primary.main}
                    strokeWidth={3}
                    showHead={false}
                />
            )}
            {fastapiIconRef2.current && reactIconRef.current && (
                <Xarrow
                    start={fastapiIconRef2}
                    end={mongoIconRef2}
                    color={theme.palette.primary.main}
                    strokeWidth={3}
                    showHead={false}
                />
            )}
            {fastapiIconRef3.current && reactIconRef.current && (
                <Xarrow
                    start={fastapiIconRef3}
                    end={gptIconRef}
                    color={theme.palette.primary.main}
                    strokeWidth={3}
                    showHead={false}
                />
            )}
            {expressIconRef.current && internetIconRef.current && (
                <Xarrow
                    start={expressIconRef}
                    end={internetIconRef}
                    color={theme.palette.primary.main}
                    strokeWidth={3}
                    showHead={false}
                />
            )}
            <StorageIcon
                ref={expressIconRef}
                style={{
                    position: 'absolute',
                    top: '175px',
                    left: '675px',
                    width: '75px',
                    height: '75px',
                    color: theme.palette.text.primary,
                    padding: '10px',
                }} />
            <Typography variant='h4'
                style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                    position: 'absolute',
                    top: '255px',
                    left: '683px',
                    backgroundColor: theme.palette.background.default,
                    zIndex: 1,
                }}>
                Express
            </Typography>
            <SpaIcon
                ref={mongoIconRef}
                style={{
                    position: 'absolute',
                    top: '350px',
                    left: '225px',
                    width: '75px',
                    height: '75px',
                    color: theme.palette.text.primary,
                    padding: '10px',
                }} />
            <Typography variant='h4'
                style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                    position: 'absolute',
                    top: '430px',
                    left: '215px',
                    backgroundColor: theme.palette.background.default,
                    zIndex: 1,
                }}>
                MongoDB 1
            </Typography>
            <SpaIcon
                ref={mongoIconRef2}
                style={{
                    position: 'absolute',
                    top: '350px',
                    left: '375px',
                    width: '75px',
                    height: '75px',
                    color: theme.palette.text.primary,
                    padding: '10px',
                }} />
            <Typography variant='h4'
                style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                    position: 'absolute',
                    top: '430px',
                    left: '365px',
                    backgroundColor: theme.palette.background.default,
                    zIndex: 1,
                }}>
                MongoDB 2
            </Typography>
            <LanguageIcon
                ref={gptIconRef}
                style={{
                    position: 'absolute',
                    top: '350px',
                    left: '525px',
                    width: '75px',
                    height: '75px',
                    color: theme.palette.text.primary,
                    padding: '10px',
                }} />
            <Typography variant='h4'
                style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                    position: 'absolute',
                    top: '430px',
                    left: '553px',
                    backgroundColor: theme.palette.background.default,
                    zIndex: 1,
                }}>
                GPT
            </Typography>
            <LanguageIcon
                ref={internetIconRef}
                style={{
                    position: 'absolute',
                    top: '350px',
                    left: '675px',
                    width: '75px',
                    height: '75px',
                    color: theme.palette.text.primary,
                    padding: '10px',
                }} />
            <Typography variant='h4'
                style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                    position: 'absolute',
                    top: '430px',
                    left: '682px',
                    backgroundColor: theme.palette.background.default,
                    zIndex: 1,
                }}>
                Internet
            </Typography>
            <div style={{
                position: 'absolute',
                left: '1rem',
                bottom: '1rem',
                width: "150px",
                height: "300px",
                padding: '0.5rem',
                backgroundColor: theme.palette.background.paper,
                borderRadius: '10px',
            }}>
                <Typography variant='h4' style={{
                    fontFamily: 'Teko',
                    color: theme.palette.text.primary,
                }}>
                    Key
                </Typography>
                <Typography variant='body2' style={{
                    color: theme.palette.text.primary,
                    paddingBottom: "5px"
                }}>
                    <span style={{
                        color: theme.palette.primary.main,
                        fontWeight: "bold"
                    }}>
                        Fastapi 1
                    </span>
                    <br />  - Account API
                </Typography>
                <Typography variant='body2' style={{
                    color: theme.palette.text.primary,
                    paddingBottom: "5px"
                }}>
                    <span style={{
                        color: theme.palette.primary.main,
                        fontWeight: "bold"
                    }}>
                        Fastapi 2
                    </span>
                    <br />  - Project API
                </Typography>
                <Typography variant='body2' style={{
                    color: theme.palette.text.primary,
                    paddingBottom: "5px"
                }}>
                    <span style={{
                        color: theme.palette.primary.main,
                        fontWeight: "bold"
                    }}>
                        Fastapi 3
                    </span>
                    <br />  - GPT interface API
                </Typography>
                <Typography variant='body2' style={{
                    color: theme.palette.text.primary,
                    paddingBottom: "5px"
                }}>
                    <span style={{
                        color: theme.palette.primary.main,
                        fontWeight: "bold"
                    }}>
                        Express
                    </span>
                    <br />  - Image Proxy
                </Typography>
                <Typography variant='body2' style={{
                    color: theme.palette.text.primary,
                    paddingBottom: "5px"
                }}>
                    <span style={{
                        color: theme.palette.primary.main,
                        fontWeight: "bold"
                    }}>
                        MongoDB 1
                    </span>
                    <br />  - Account DB
                </Typography>
                <Typography variant='body2' style={{
                    color: theme.palette.text.primary,
                    paddingBottom: "5px"
                }}>
                    <span style={{
                        color: theme.palette.primary.main,
                        fontWeight: "bold"
                    }}>
                        MongoDB 2
                    </span>
                    <br />  - Project DB
                </Typography>
            </div>
        </div>
    </>
    )
}

export default TechStackPanel
import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import bg_img from "../../src/images/3747425.jpg";
import logo from "../../src/images/Capture.JPG";
import { Box } from '@mui/material';


const About = () => {
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    const isPrimeCode = `
    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    };
    `;

    return (
        <div style={{ margin: '-4px', position: 'relative', }}>
            <img src={bg_img} alt="" style={{ width: '100%', height: 'auto', minHeight: '100vh' }} />


            <div style={{ position: 'absolute', top: '3%', left: '30%', transform: 'translate(-120%, 50%)' }}>
                <Typography color="white" variant="h5">
                    About /{">"}
                </Typography>
            </div>

            <div
                style={{
                    marginTop: '30px',
                    position: 'absolute',
                    top: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(255, 255, 255, 0.8)',
                    padding: '20px',
                    borderRadius: '5px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography
                    variant="body1"
                    color="primary" // You can choose the appropriate color from your theme
                    sx={{
                        fontSize: 40,
                        fontFamily: 'Cursive',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                        letterSpacing: 2,
                        textAlign: 'center',
                        backgroundColor: 'black',
                        padding: '10px',
                        borderRadius: '8px',
                        margin: '20px auto',
                    }}
                >
                    Unveiling the Enigma: d'code-1611
                </Typography>

                <Paper
                    sx={{
                        p: 2,
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                <Img src={logo} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div" style={{ fontSize: 20, fontWeight: 100 }}>
                                        Certainly! The name "d'code-1611" holds a special significance that intertwines my personal history and creativity. It's not just a random combination of words; there's a thoughtful story behind it.
                                    </Typography>
                                    <Typography variant="caption" gutterBottom style={{ fontSize: 20 }}>
                                        The name is derived from two distinct elements: "d'code" and "1611". The term "d'code" is a play on the word "decode," suggesting the unraveling of mysteries and complexities. It represents the essence of problem-solving, much like deciphering a code to reveal its hidden meaning.
                                        The numbers "1611" hold a deeply personal significance as they represent the 16th of November, a date that marks my birth.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>

            <div
                style={{
                    marginTop: '30px',
                    position: 'absolute',
                    top: '150%', // Adjust the vertical position as needed
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(255, 255, 255, 0.8)',
                    padding: '20px',
                    borderRadius: '5px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                <pre>
                    <code>{isPrimeCode}</code>
                </pre>
            </div>
        </div>
    );
};

export default About;

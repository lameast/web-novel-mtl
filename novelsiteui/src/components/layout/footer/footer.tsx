import * as React from 'react';
import { Typography, Paper, Box } from '@mui/material';

export default function Footer(){
    return  <Paper sx={{
                        width: '100%',
                        position: 'fixed',
                        bottom: 0,
                    }}>
                <Box
                    sx={{
                        width: "100%",
                        height: "auto",
                        backgroundColor: "primary.main",
                        paddingTop: "1rem",
                        paddingBottom: "1rem",
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Typography>
                        Made by Lameast
                    </Typography>
                </Box>
            </Paper>
}
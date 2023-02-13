// A componenet that renders a textarea element 
import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

const TextArea = ({ label, value, onChange }) => {
    const theme = useTheme();

    

    return (
        <Box
            alignItems='center'
            display='flex'
            flexWrap='wrap'
            justifyContent='center'
            padding={6}
            sx={{
                '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                    cursor: 'pointer',
                    opacity: 0.5
                }
            }}
        >
            <TextField
                label={label}
                variant='outlined'
                value={value}
                onChange={onChange}
                multiline
                rows={4}
                sx={{
                    width: '100%',
                }}
            />
        </Box>
    )
}

export default TextArea;
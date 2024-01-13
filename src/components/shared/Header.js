'use client';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import headerImage from '@/assets/The Dragon News.png'
import { showCurrentDate } from '@/utils/currentDateAndTime';
const Header = () => {

const currentDate = showCurrentDate()

    return (
        <Box className="my-10">
            <Container className='w-full space-y-2'>
                <Image src={headerImage} alt='logo' height={500} width={500} className='mx-auto'/>
            <Typography variant='body2' color="gray" textAlign="center">Journalism Without Fear or Favour</Typography>
            <Typography  textAlign="center">{currentDate}</Typography>
            </Container>
        </Box>
    );
};

export default Header;
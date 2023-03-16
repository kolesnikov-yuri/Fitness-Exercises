import React, {useState} from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExecises from '../components/SearchExecises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExecises />
      <Exercises />
    </Box>
  )
}

export default Home
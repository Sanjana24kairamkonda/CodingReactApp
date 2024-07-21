// src/App.js
import React from 'react';
import { Container, Grid, Typography, Button, Card, CardContent, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate} from 'react-router-dom';
const RootContainer = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  marginTop: theme.spacing(5),
}));

const SkillCard = ({ title, progress, pointsToNextStar,x }) => {
  const navigate=useNavigate()
  const handleclick = () => {
    navigate(x);
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleclick}>
          Continue Preparation
        </Button>
      </CardContent>
    </Card>
  );
};

function App() {
  return (
    <RootContainer>
      <Typography variant="h4" component="h1" gutterBottom>
        Learn Programming Skills
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <SkillCard title="Daa" progress={3} pointsToNextStar={1312} x='/Daa'/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkillCard title="Java" progress={60} pointsToNextStar={12} x='/Java'/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkillCard title="Python" progress={32} pointsToNextStar={75} x='/python'/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkillCard title="Dsa" progress={3} pointsToNextStar={1312} x='/Dsa'/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkillCard title="Dbms" progress={60} pointsToNextStar={12} x='/Dbms'/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SkillCard title="General Aptitude" progress={32} pointsToNextStar={75} x='/Play1'/>
        </Grid>
      </Grid>
    </RootContainer>
  );
}

export default App;

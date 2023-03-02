import logo from './logo.svg';
import './App.css';
import { Stack } from '@mui/system';
import {Container,Box,Grid,Paper,styled } from '@mui/material';
// import Box from '@mui/material/Box';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item></Item>
          </Grid>
          <Grid item xs={6}>
            <Item>xs=4</Item>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

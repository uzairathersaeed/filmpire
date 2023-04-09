import { Routes, Route } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import {Actors, Movies, NavBar, MovieInformation, Profile } from './index'
import useStyles from './styles';
const App = () => {
 const classes = useStyles();
 return(
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
        <main className={classes.content}>
        <div className={classes.toolbar}/>
          <Routes>
            <Route  path="/movie/:id" element={<MovieInformation />}>
            </Route>
            <Route  path="/actors/:id" element={<Actors/>}>
            </Route>
            <Route  path="/profile/:id" element={<Profile/>}>
            </Route>
            <Route  path="/" element={
              <Movies />
            }>
            </Route>
          </Routes>
        </main>
    </div>
  );
};
export default App;

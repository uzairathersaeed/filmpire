import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import {Actors, Movies, NavBar, MovieInformation, Profile } from './index'
import useStyles from './styles';
import useAlan from './Alan'



const App = () => {
 const classes = useStyles();
 const alanBtnContainer = useRef();
 useAlan();
 const renderMultiRoutes = ({ element: Element, paths, ...rest }) =>
    paths.map((path) => <Route key={path} path={path} {...rest} element={Element} />);
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
            {renderMultiRoutes({
                paths: ['/', '/approved'],
                element: <Movies />,
            })}
          </Routes>
        </main>
        <div ref={alanBtnContainer}/>
    </div>
  );
};
export default App;

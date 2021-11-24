import React from "react";
import { Redirect, Route } from "react-router";
import auth from './auth';
export const Protectdash= ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
          if(auth.authenticated()){
        return <Component {...props} />;
          }
          else{
              return <Redirect to={
                  {
                      pathname:"/",
                      state:{
                          from: props.location
                      }
                  }
              } />
          }
      }}
    />
  );
};

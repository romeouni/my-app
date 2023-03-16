import React from "react";
import {Helmet} from "react-helmet";
import Header from "./Header/Header";



export default ({pageTitle, children}) => (
    <>
        <Helmet>
            <title>{`Mealswipes - ${pageTitle}`}</title>
        </Helmet>
        <div>
            <Header />
        </div>
    </>
)
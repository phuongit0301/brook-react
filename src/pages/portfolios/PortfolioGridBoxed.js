import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import LayoutDefault from "../../layouts/LayoutDefault";
import Header from "../../components/header/HeaderEight";
import Breadcrumb from "../../components/breadcrumb/BreadcrumbSeven";
import Portfolios from "../../container/portfolio/pages/PortfolioGrid";
import Footer from "../../container/footer/FooterOne";

const PortfolioGridBoxed = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Portfolio Grid Boxed || Brook - React JS Creative Multipurpose Template</title>
            </Helmet>
            <LayoutDefault className="template-color-1 template-font-1">
                <Header/>
                <Breadcrumb
                    title="Portfolio Grid Boxed"
                />
                <Portfolios wide={false}/>
                <Footer/>
            </LayoutDefault>
        </Fragment>
    );
};

export default PortfolioGridBoxed;

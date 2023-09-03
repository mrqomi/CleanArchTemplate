import React, { createContext, useState } from 'react'
import Wrapper from '../hoc/Wrapper'
import Toolbar from "./Toolbar";

export const ProfileContext=createContext();

const Layout = ({ children }) => {

    const[headerClass,setHeaderClass]=useState("")
    const[title,settitle]=useState("")
  

    return (
        <Wrapper>
            <div className="main-header">

                <div className="logo-header" data-background-color="blue">

                    <a href="/" className="logo">

                        <span className="text-white">سامانه مدیریت</span>
                    </a>
                    <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <i className="icon-menu"></i>
                        </span>
                    </button>
                    <button className="topbar-toggler more"><i className="icon-options-vertical"></i></button>
                    <div className="nav-toggle">
                        <button className="btn btn-toggle toggle-sidebar">
                            <i className="icon-menu"></i>
                        </button>
                    </div>
                </div>

                <nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">

                    <div className="container-fluid">
                        <div className="collapse" id="search-nav">
                            <form className="navbar-left navbar-form nav-search mr-md-3">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <button type="submit" className="btn btn-search pr-1">
                                            <i className="fa fa-search search-icon"></i>
                                        </button>
                                    </div>
                                    <input type="text" placeholder="جستجو..." className="form-control rtl" />
                                </div>
                            </form>
                        </div>
                        <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                            <li className="nav-item toggle-nav-search hidden-caret">
                                <a className="nav-link" data-toggle="collapse" href="#search-nav" role="button" aria-expanded="false" aria-controls="search-nav">
                                    <i className="fa fa-search"></i>
                                </a>
                            </li>
                            <li className="nav-item dropdown hidden-caret">
                                <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-bell"></i>
                                    <span className="notification">0</span>
                                </a>
                                <ul className="rtl dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
                                    <li>
                                        <div className="dropdown-title d-flex justify-content-between align-items-center">
                                            شکایات بررسی نشده
                                        </div>
                                    </li>
                                    <li>
                                        1
                                    </li>
                                    <li>
                                        <a className="see-all" href="#">مشاهده همه<i className="fa fa-angle-left"></i> </a>
                                    </li>
                                </ul>
                            </li>



                        </ul>
                    </div>
                </nav>

            </div>

         



            <div className="main-panel">
                <div className="content">
                    <div className="panel-header bg-primary-gradient">
                        <div className="page-inner py-5">
                            <div className="d-flex align-items-right align-items-md-center flex-column flex-md-row">
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <ProfileContext.Provider value={{
                        headerClass,
                        setHeaderClass,
                        title,
                        settitle
                        }}>
                    <div className="page-inner mt--5">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className={"card-header " + headerClass}>
                                        <div className="card-title">{title}</div>
                                    </div>
                                    <div className="card-body">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </ProfileContext.Provider>
                </div>
                <footer className="footer">
                    <div className="container-fluid">

                        <div className="copyright ml-auto">
                            <a href="#">MR Qomi</a> &copy; 2023
                        </div>
                    </div>
                </footer>
            </div>





        
           
        </Wrapper>
    )

}

export default Layout
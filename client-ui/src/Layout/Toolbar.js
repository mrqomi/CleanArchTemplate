import { Link } from "react-router-dom"
import Wrapper from "../hoc/Wrapper"
import ToolbarItem from "./ToolbarItem"
import { useState } from "react"

export const initialData=[
    {
    index:1,
    id: "عملیات",
    icon: "fa-home",
    submenu: [{
        index:1,
        link: "/asd",
        title: "صفحه اصلی"
    },
    {
        index:2,
        link: "/",
        title: "2 صفحه اصلی"
    }]
},
{
    index:2,
    id: "عملیات اصلی",
    icon: "fa-home",
    submenu: [{
        index:1,
        link: "/asd",
        title: "صفحه اصلی"
    },
    {
        index:2,
        link: "/",
        title: "2 صفحه اصلی"
    }]
}
]



const Toolbar = () => {

    const[userMenu,setShowUserMenu]=useState(false)
    const handleUserMenuShow=()=>{
        setShowUserMenu(!userMenu)
    }


    let _toolbarItem = initialData.map(item =>
        <Wrapper key={item.index}>
            <ToolbarItem menuItem={item} />
        </Wrapper>
    )
    return (
        <Wrapper>
            <div className="sidebar sidebar-style-2">

                <div className="sidebar-wrapper scrollbar scrollbar-inner">
                    <div className="sidebar-content">
                        <div style={{ background: "#1C82AD !important" }}>
                            <div className="user">

                                <div className="avatar-sm float-right mr-2">
                                    <img src="/assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                                </div>
                                <div className="info">
                                    <a onClick={()=>handleUserMenuShow()} className={userMenu?"":"collapsed"} data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                                        <span>
                                            ممد
                                            <span className="user-level">سلام</span>
                                            <span className="caret"></span>
                                        </span>
                                    </a>
                                    <div className="clearfix"></div>

                                    <div className={userMenu?"collapse show":"collapsing"} id="collapseExample">
                                        <ul className="nav">
                                            <li>
                                                <a href="#profile">
                                                    <span className="link-collapse">اطلاعات کاربری</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/Users/ChangePass">
                                                    <span className="link-collapse">تغییر رمز عبور</span>
                                                </a>
                                            </li>
                                            <li>
                                                <Link to="/">
                                                    <span className="link-collapse">خروج</span>
                                                </Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="nav nav-primary">
                            {_toolbarItem}

                        </ul>




                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Toolbar
import {React,  useState } from 'react'
import { Link } from 'react-router-dom'



export default function ToolbarItem({menuItem}) {

    const [IsShow, setIsShow] = useState(false)
    
    const handelCollapseItem = () => {
        setIsShow(!IsShow)
    }


    const _links = menuItem?.submenu?.map(item => (
        <li key={item.index}>
            <Link to={item.link} >
                <span className="sub-item">{item.title}</span>
            </Link>
        </li>)
    )
    return (
            <li className={ IsShow?"nav-item submenu":"nav-item"} >
                <a onClick={() => handelCollapseItem()}   href={"#" + menuItem.index} className={IsShow?"":"Collapsed"}>
                    <i className={"fas " + menuItem.icon}></i>
                    <p>{menuItem.id}</p>
                    <span className="caret"></span>
                </a>
                <div className= {IsShow?"collapse show":"collapse"} id={menuItem.id}>
                    <ul className="nav nav-collapse">
                        {_links}
                    </ul>
                </div>
            </li>
    )
}

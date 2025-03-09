import React, { useState } from 'react'
import styles from './SideMenu.module.css';
import { PiCashRegisterFill } from "react-icons/pi";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { IoFastFoodSharp } from "react-icons/io5";
import { TbCashRegister } from "react-icons/tb";
import { LuSettings2 } from "react-icons/lu";
import { Link, useNavigate } from 'react-router-dom';
import { RiUser5Fill } from "react-icons/ri";





export default function SideMenu() {

    const navigate = useNavigate();
    const handleLogOut = ()=>{
        navigate("/login");
    }

    const [activeTab, setActiveTab] = useState(0);

    const [links,setLinks] = useState([
        {name : "Dashboard" , icon : <RiDashboardHorizontalFill />, path : "/"},
        {name : "Foods & Drinks" , icon : <IoFastFoodSharp />, path : "/order"},
        {name : "Bills" , icon : <TbCashRegister />, path : "/bills"},
        {name : "Settings" , icon : <LuSettings2 /> , path : "/settings"},
    ]);
  return (
    <div className="d-flex flex-column border-end pt-3 pb-5 px-3 justify-content-between" id={styles.SideMenu}>
        <div>
        <div className="col-12 d-flex justify-content-center align-items-center gap-2 py-3">
            <PiCashRegisterFill className={styles.icon} />
            <h5 className={styles.title}>Smart<span>POS</span></h5>
        </div>
       {
        links.map((el,index) => {
            return (
                <Link onClick={()=>{ setActiveTab(index)}} key={index} to={el.path} className={"col-12 ps-3 pe-3 d-flex gap-2 align-items-center nav-link " + styles.link + "  " + (activeTab === index ? styles.activeLink : null) }>
                    {el.icon}
                    <h6 className="m-0">{el.name}</h6>
                 </Link>
            )
        })
       }
        </div>
        
       <div className='col-12 d-flex flex-column align-items-center'>
            <RiUser5Fill className='fs-3' />
            {/* <img src="" alt="" id={styles.userImg} /> */}
            <h5>Username</h5>
            <p>Position</p>
            <button className='btn btn-danger' onClick={handleLogOut}>Log out</button>
       </div>
    </div>
  )
}

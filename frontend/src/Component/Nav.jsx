import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { MdWhatshot } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa"; 
import { GiTreehouse } from "react-icons/gi"; 
import { GiWaves } from "react-icons/gi"; 
import { FaBuilding } from "react-icons/fa"; 
import { FaCity } from "react-icons/fa"; 
import { FaBed } from "react-icons/fa"; 
import { GiWoodCabin } from "react-icons/gi"; 
import { FaStore } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../Context/AuthContext";
function Nav() {
  let [showpopup, setShowpopup] = useState(false);
  let navigate = useNavigate();
  let serverUrl = useContext(authDataContext);
  const handleLogOut = async () => {
    try {
      let result = await axios.post(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div>
      <div className="w-[100vw] min-h-[80px] border-b-[1px] border-[#dcdcdc] px-[40px] flex items-center justify-between">
        <div>
          <img src={logo} alt="" className="w-[136px]" />
        </div>
        <div className="w-[35%] relative md:block hidden">
          <input
            type="text"
            className="w-[100%] px-[30px] py-[10px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-[30px] text-[17px]"
            placeholder="Any Where |Any Location | Any City"
          />
          <button className="absolute p-[10px] rounded-[50px] bg-[red] right-[3%] top-[5px]">
            <FaSearch className="w-[20px] h-[20px] text-[white]" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-[10px] relative">
          <span className="text-[18px] cursor-pointer rounded-[50px] hover:bg-[#ded9d9] px-[8px] py-[5px] md:block hidden">
            List your home
          </span>
          <button
            className="px-[20px] py-[10px] flex items-center justify-center gap-[5px] border-[1px] border-[#8d8c8c] rounded-[50px] hover:shadow-lg"
            onClick={() => setShowpopup((prev) => !prev)}
          >
            <span>
              <GiHamburgerMenu className="w-[20px] h-[20px]" />
            </span>
            <span>
              <CgProfile className="w-[23px] h-[23px]" />
            </span>
          </button>
          {showpopup && (
            <div className="w-[220px] h-[250px] absolute bg-slate-50 top-[110%] right-[3%] border-[1px] border-[#aaa9a9] z-10 rounded-lg md:right-[10%] ">
              <ul className="w-[100%] h-[100%] text-[17px] flex items-start justify-around flex-col py-[10px]">
                <li
                  className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </li>
                <li
                  className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer"
                  onClick={() => handleLogOut()}
                >
                  Logout
                </li>
                <div className="w-[100%] h-[1px] bg-[#c1c0c0]"></div>
                <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">
                  List your Home
                </li>
                <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">
                  My Listing
                </li>
                <li className="w-[100%] px-[15px] py-[10px] hover:bg-[#f4f3f3] cursor-pointer">
                  Check Booking
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="w-[100%] h-[60px] flex items-center justify-center md:hidden block">
        <div className="w-[35%] relative ">
          <input
            type="text"
            className="w-[100%] px-[30px] py-[10px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-[30px] text-[17px]"
            placeholder="Any Where |Any Location | Any City"
          />
          <button className="absolute p-[10px] rounded-[50px] bg-[red] right-[3%] top-[5px]">
            <FaSearch className="w-[20px] h-[20px] text-[white]" />
          </button>
        </div>
      </div>
      <div className="w-[100vw] h-[85px] bg-white flex items-center overflow-auto justify-start cursor-pointer gap-[40px] md:justify-center px-[15px]  ">
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ">
          <MdWhatshot className="w-[30px] h-[30px] text-black" />
          <h3>Trending</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ">
          <FaHome className="w-[30px] h-[30px] text-black" />
          <h3> Villa </h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px]  text-nowrap">
          <GiTreehouse className="w-[30px] h-[30px] text-black" />
          <h3> FarmHouse </h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] text-nowrap ">
          <GiWaves className="w-[30px] h-[30px] text-black" />
          <h3> PoolHouse </h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ">
          <FaBuilding className="w-[30px] h-[30px] text-black" />
          <h3> Rooms </h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ">
          <FaCity className="w-[30px] h-[30px] text-black" />
          <h3> Flats</h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ">
          <FaBed className="w-[30px] h-[30px] text-black" />
          <h3> PG </h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ">
          <GiWoodCabin className="w-[30px] h-[30px] text-black" />
          <h3> Cabins </h3>
        </div>
        <div className="flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] ">
          <FaStore className="w-[30px] h-[30px] text-black" />
          <h3> Shops </h3>
        </div>
      </div>
    </div>
  );
}
export default Nav;

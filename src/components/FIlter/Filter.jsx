import { Link, NavLink } from "react-router-dom";
import React from 'react'

export default function () {
    return (
        <div className='w-full h-auto bg-gray-200'>
            <section className='flex items-center justify-between m-auto w-full'>
                <NavLink to={'/ALL'}
                    className={({ isActive }) =>
                        `border-[1px] border-black text-center w-[32%] mx-2 my-2 py-1  text-xl ${isActive ? "bg-gray-800 text-white" : " text-gray-700"}`
                    }
                >
                    ALL
                </NavLink>
                <NavLink to={'/MAINLINE'}
                    className={({ isActive }) =>
                        `border-[1px] border-black text-center w-[32%] mx-2 my-2 py-1 text-xl ${isActive ? "bg-gray-800 text-white" : " text-gray-700"}`
                    }
                >
                    MAINLINE
                </NavLink>
                <NavLink to={'/SME'}
                    className={({ isActive }) =>
                        `border-[1px] border-black text-center w-[32%] mx-2 my-2 py-1 text-xl ${isActive ? "bg-gray-800 text-white" : " text-gray-700"}`
                    }
                >
                    SME
                </NavLink>
     
            </section>
        </div>
    )
}

import React from 'react'
import { Link, NavLink } from "react-router-dom";
export default function Tabs() {
    return (
        <>
            <div className=' w-full h-auto  bg-blue-500'>
                <main className='h-auto grid grid-cols-3 items-center mx-auto'>
                    <NavLink to={'/CURRENT'}
                        className={({ isActive }) =>
                            `${isActive ? " border-b-8 border-white" : " text-gray-700"} text-xl px-3 py-2 text-white text-center`
                        }
                    >
                        CURRENT
                    </NavLink>
                    <NavLink to={'/UPCOMING'}
                        className={({ isActive }) =>
                            `${isActive ? " border-b-8 border-white" : " text-gray-700"} text-xl px-3 py-2 text-white text-center`
                        }
                    >
                        UPCOMING
                    </NavLink>
                    <NavLink to={'/CLOSED'}
                        className={({ isActive }) =>
                            `${isActive ? " border-b-8 border-white" : " text-gray-700"} text-xl px-3 py-2 text-white text-center`
                        }
                    >
                        CLOSED
                    </NavLink>

                </main>
            </div>
        </>
    )
}

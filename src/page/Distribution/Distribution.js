import React from 'react';
import { Link } from "react-router-dom";
const numbers = [...Array(4).keys()];
const Distribution = () =>{
    return (
        <div className = "pt-[286px]">
                <div className = 'flex justify-center'>
                    {numbers.map((item, index) =>
                        <div className='flex '>
                            <div className={`w-24 mx-[30px] pt-[10px] h-24 bg-transparent  rounded-full border-[5px] text-black text-[40px] text-slate-700 ${index === 2 ? "border-slate-300": "border-slate-700"}`}><p className =''>{item+1}</p></div>
                            { index !==3 ? <div className='w-24 mt-[50px] border-t-4 border-slate-700'></div> : <></> }
                        </div>    
                    )}
                </div>
                <div>
                    <div className='mt-[120px] mb-[60px] text-[40px]  text-slate-300'>Token Distribution</div>
                    <div className='mx-auto w-[680px]'>
                        <div className='flex justify-center'>
                            <div className='mr-[30px]' >
                                <div className='text-slate-300 text-[40px] mb-[10px]'>Name</div>   
                                <input className='w-[325px] h-[40px] rounded-[20px]  border-[1px] border-slate-300 bg-slate-700'></input>
                            </div>
                            <div >
                                <div className='text-slate-300 text-[40px] mb-[10px]'>Symbol</div>   
                                <input className='w-[325px] h-[40px] rounded-[20px]  border-[1px] border-slate-300 bg-slate-700'></input>
                            </div>
                        </div>
                        <div className='mt-[40px]'><button className='w-[680px] h-[40px] rounded-[20px]   border-slate-300 text-slate-500 bg-slate-900'> Add more</button></div>
                        <div className ="mt-[30px] text-slate-700 flex justify-end text-[24px]"><Link to="/Chain">Next ></Link></div>
                        <div className ='text-start text-slate-700'>Token distribution relates to how you share your assets between different players, such as your developmen team, marketing and community. In this slide you must add as much players as you like and the amount of tokens each one is entiteled with.</div>
                    </div>
                </div>
            </div>
    )
}
export default Distribution;
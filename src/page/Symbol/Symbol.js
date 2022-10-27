import React from 'react';
import { Link } from "react-router-dom";
const numbers = [...Array(4).keys()];
const Symbol = () =>{
    return (
        <div className = "pt-[286px]">
                <div className = 'flex justify-center'>
                    {numbers.map((item, index) =>
                        <div className='flex '>
                            <div className={`w-24 mx-[30px] pt-[10px] h-24 bg-transparent  rounded-full border-[5px] text-black text-[40px] text-slate-700 ${index === 1 ? "border-slate-300": "border-slate-700"}`}><p className =''>{item+1}</p></div>
                            { index !==3 ? <div className='w-24 mt-[50px] border-t-4 border-slate-700'></div> : <></> }
                        </div>    
                    )}
                </div>
                <div>
                    <div className='mt-[120px] mb-[60px] text-[40px]  text-slate-300'>Token Symbol</div>
                    <div className='mx-auto w-[680px]'>
                        <input className='w-[680px] h-[40px] rounded-[20px]  border-[1px] border-slate-300 bg-slate-700'></input>
                        <div className ="mt-[30px] text-slate-700 flex justify-end text-[24px]"><Link to="/Distribution">Next ></Link></div>
                        <div className ='text-slate-700 text-start'>The token Symbol is a short name to your asset, usually it is about 3 to 5 capital letters, as USD stands for US Dollar</div>
                    </div>
                </div>
            </div>
    )
}
export default Symbol;
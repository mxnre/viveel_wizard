

import React from 'react';
import { Link } from "react-router-dom";
const numbers = [...Array(4).keys()];
const numberspicture = [...Array(8).keys()];
const Chain = () =>{
    return (
        <div className = "pt-[286px]">
                <div className = 'flex justify-center'>
                    {numbers.map((item, index) =>
                        <div className='flex '>
                            <div className={`w-24 mx-[30px] pt-[10px] h-24 bg-transparent  rounded-full border-[5px] text-black text-[40px] text-slate-700 ${index === 3 ? "border-slate-300": "border-slate-700"}`}><p className =''>{item+1}</p></div>
                            { index !==3 ? <div className='w-24 mt-[50px] border-t-4 border-slate-700'></div> : <></> }
                        </div>    
                    )}
                </div>
                <div>
                    <div className='mt-[120px] mb-[60px] text-[40px]  text-slate-300'>Select Chain</div>
                    <div className='mx-auto w-[680px]'>
                        <div className='grid grid-cols-4'>
                            {numberspicture.map((item, index) =>
                            <div  className='mb-[30px]'>
                             <img src={require(`../../image/image_${index+1}.png`)}  className='' alt='chain'/>
                            </div>
                            )}
                        </div>
                        <div>
                            <div className ="mt-[30px] text-slate-700 flex justify-end text-[24px]"><Link to="/Resume">Next ></Link></div>
                            <div className ='text-start text-slate-700'>Now it is time to select which Blockchain you want to use. Select as many as you want.</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Chain;
import React from 'react';
import { Link } from "react-router-dom";
const imagenum = [...Array(2).keys()];
const Resume = () =>{
    return (
        <div className = "pt-[228px]">
                <div className=' mb-[60px] text-[40px]  text-slate-300 '>Token Resume</div>
                <div className='flex justify-center'>
                    <div>

                    <div className='mr-[30px] mt-[10px] flex justify-end' >
                        <div className='text-slate-300 text-[20px] mr-[20px]'>Template :</div>   
                        <input className='w-[325px] h-[44px] rounded-[20px]  content-center bg-slate-700'></input>
                    </div>
                    <div className='mr-[30px] mt-[10px] flex justify-end' >
                        <div className='text-slate-300 text-[20px] mr-[20px]'>Name :</div>   
                        <input className='w-[325px] h-[44px] rounded-[20px]  content-center bg-slate-700'></input>
                    </div>
                    <div className='mr-[30px] mt-[10px] flex justify-end' >
                        <div className='text-slate-300 text-[20px] mr-[20px]'>Symbol :</div>   
                        <input className='w-[325px] h-[44px] rounded-[20px]  content-center bg-slate-700'></input>
                    </div>
                    <div className='mr-[30px] mt-[10px] flex justify-end' >
                        <div className='text-slate-300 text-[20px] mr-[20px]'>Distribution :</div>   
                        <div className='w-[325px] h-[210px] h-[44px] rounded-[20px] my-[10px] content-center bg-slate-700'></div>
                    </div>
                    <div className='mr-[30px] mt-[10px] flex justify-end' >
                        <div className='text-slate-300 text-[20px] mr-[20px]'>Blockchains :</div>
                        <div className='w-[325px] rounded-[20px] bg-slate-700 flex justify-center'>
                            {imagenum.map((item, index) => 
                            <div  className='mr-[20px]'>
                            <img src={require(`../../image/image_${index+1}.png`)}  className='' alt='chain'/>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className ="mt-[30px] text-slate-700 text-[24px] float-right"><Link to="/Resume">Build ></Link></div>
                    </div>
                </div>
                    
        </div>
    )
}
export default Resume;
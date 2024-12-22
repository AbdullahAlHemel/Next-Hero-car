'use client'
import SocialSignIn from '@/components/shared/socialSignIn';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
    const handleLogin = async(event) => {
        event.preventDefault();
        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        
        const resp = await fetch('http://localhost:3000/signup/api', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                "content-type":"application/json"
            }
        })
        console.log(resp);
        if(resp.status === 200){
           event.target.reset()
        }
    }
    return (
        <div className='container mx-auto py-24'>
            <h6 className='text-center text-2xl text-red-600'>SignUp</h6>
          <div className='grid grid-cols-2 gap-12'> 
             <div>
                <Image src={'/assets/images/login/login.svg'} height='540' width='540' alt='login image'/>
             </div>
            <div className='border-2 p-12 m-3 space-y-4'>
            <form onSubmit={handleLogin} action="">
                <div >
                 <label htmlFor="name">Name</label><br/>
                 <input type="text" placeholder="Your Name" name='name' className="input text-gray-800 input-bordered w-full " />
                </div>
                <div >
                 <label htmlFor="email">Email</label><br/>
                 <input type="text" placeholder="email here" name='email' className="input text-gray-800 input-bordered w-full " />
                </div>
                <div>
                 <label htmlFor="Password">Password</label><br/>
                 <input type="password" placeholder="password" name='password' className="input  text-gray-800 input-bordered w-full" />
                </div>
                <br/>
                <button type='submit' className='btn-primary btn w-full'>Log In </button>  
            </form>
            <div>
                    <h6>or sign in with</h6>
                    <SocialSignIn/>
                </div>
             <h6 className='my-12 text-center'>have a account? <Link href={'/login'}>SignUP</Link></h6>
             </div>
         </div>
        </div>
    );
};

export default SignUpPage;
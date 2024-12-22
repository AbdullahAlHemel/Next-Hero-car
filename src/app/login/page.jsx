'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {signIn} from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import SocialSignIn from '@/components/shared/socialSignIn';

const page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const path = searchParams.get('redirect');
    const handleLogin = async(event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const resp = await signIn("credentials", {
            email ,
            password, 
            redirect: true,
            callbackUrl: path ? path : '/'
        });
    }
    return (
        <div className='container mx-auto py-24'>
            <h6 className='text-center text-2xl text-red-600'>Log In</h6>
          <div className='grid grid-cols-2 gap-12'> 
             <div>
                <Image src={'/assets/images/login/login.svg'} height='540' width='540' alt='login image'/>
             </div>
            <div className='border-2 p-12 m-3 space-y-4'>
            <form onSubmit={handleLogin} action="">
                <div >
                 <label htmlFor="email">Email</label><br/>
                 <input type="text" placeholder="email here" name='email' className="input text-gray-800 input-bordered w-full " />
                </div>
                <div>
                 <label htmlFor="Password">Password</label><br/>
                 <input type="password" placeholder="email here" name='password' className="input  text-gray-800 input-bordered w-full" />
                </div>
                <br/>
                <button type='submit' className='btn-primary btn w-full'>Log In </button>  
            </form>
            <div>
                    <h6>or sign in with</h6>
                    <SocialSignIn/>
                </div>
             <h6 className='my-12 text-center'>not have account? <Link href={'/signup'}>SignUP</Link></h6>
             </div>
         </div>
        </div>
    );
};

export default page;
'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialSignIn = () => {
    const router = useRouter()
    const session = useSession()
    const searchParams = useSearchParams()
    const path = searchParams.get('redirect')
    const handleSocialLogin = async (provider) => {
        const resp = await signIn(provider,{
            redirect : true,
            callbackUrl: path ? path : '/'
        })
    }
    useEffect(()=>{
    if(session.status === 'authenticated'){
        router.replace('/')
    }},[session.status, router])

    return (
        <div>
            <div className=' justify-center gap-3  flex'>
              <button onClick={()=> handleSocialLogin('google')} className='btn text-4xl'>
                 <FaGoogle />
              </button>
              <button onClick={()=> handleSocialLogin('github')} className='btn text-4xl'>
                 <FaGithub />
              </button>
            </div>
        </div>
    );
};

export default SocialSignIn;



// 'use client'
// import { signIn, useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import React, { useEffect } from 'react';
// import { FaGithub, FaGoogle } from 'react-icons/fa';

// const SocialSignIn = () => {
//     const router = useRouter();
//     const session = useSession();

//     useEffect(() => {
//         // Navigate to '/' if the user is authenticated
//         if (session.status === 'authenticated') {
//             router.replace('/');
//         }
//     }, [session.status, router]); // Runs the effect when session status changes

//     const handleSocialLogin = async (provider) => {
//         await signIn(provider); // Initiate social sign-in
//     };

//     return (
//         <div>
//             <div className='justify-center gap-3 flex'>
//                 <button
//                     onClick={() => handleSocialLogin('google')}
//                     className='btn text-4xl'
//                 >
//                     <FaGoogle />
//                 </button>
//                 <button
//                     onClick={() => handleSocialLogin('github')}
//                     className='btn text-4xl'
//                 >
//                     <FaGithub />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SocialSignIn;

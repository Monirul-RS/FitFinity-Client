import React, { useContext } from 'react';
// import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                // setAuthToken(user);

            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <p className='text-center'>Social login</p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-error'> Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;
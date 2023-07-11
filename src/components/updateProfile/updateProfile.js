import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/actions/usersActions';

const UpdateProfile = () => {
    const dispatch  = useDispatch();
    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const changeHandler = (e)=>{
        e.preventDefault()
        const {value , name } = e.target;
        setSignupData({...signupData, [name]:value})
        console.log("event",signupData)
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(
            createUser({
                ...signupData
            })
        )
    }
    return (
        <div>
            <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to your account</h2>
                </div>

                <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form 
                        class="space-y-6"  
                        onSubmit={handleSubmit}
                        >
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700"> Full Name </label>
                                <div class="mt-1">
                                    <input id="name"
                                        onChange= {changeHandler}
                                        name="name"
                                        type="text"
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />

                                </div>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
                                <div class="mt-1">
                                    <input id="email"
                                        onChange={changeHandler}
                                        name="email"
                                        type="email"
                                        autocomplete="email"
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
                                <div class="mt-1">
                                    <input
                                    onChange= {changeHandler}
                                        id="password"
                                        name="password"
                                        type="password"
                                        autocomplete="current-password"
                                        required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UpdateProfile;

import { FcGoogle } from 'react-icons/fc';
import { ChangeEvent, useState } from 'react';

export const Form = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState();

  const getEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="w-1/2 p-8 border-2 border-indigo-600 mx-auto text-center">
      <h2>User </h2>
      <div className="flex flex-col">
        <input
          type="text"
          className="border border-indigo-600 w-96 mx-auto mt-8 p-4"
          placeholder="Email Address"
          onChange={getEmail}
          value={emailValue}
        />
        <input
          type="password"
          className="border border-indigo-600 w-96 mx-auto mt-8 p-4"
          placeholder="Enter Password"
        />
      </div>
      <button className="bg-blue-700 p-4 mt-8 w-96 text-white">
        Continue
        <span>
          <FcGoogle />
        </span>
      </button>

      <p className="mt-4">Or</p>
      <button className="border border-indigo-600 p-4 mt-8 w-96">
        Sign In with Google
      </button>
    </div>
  );
};

"use client"

import Image from 'next/image';
import { useState } from 'react';
import { ImCamera } from "react-icons/im";

const AvatarInput = () => {
  const [avatar, setAvatar] = useState(null);

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="relative ">
        <input
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className="sr-only"
          id="avatar-input"
        />
        <label htmlFor="avatar-input" className="cursor-pointer">
          {avatar ? (
            <Image
              src={avatar}
              alt="Avatar"
              width={200}
              height={200}
              className="w-24 h-24 rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 lg:w-32 lg:h-32 flex flex-col rounded-full outline outline-2 outline-indigo-500 outline-offset-4 text-center  bg-gray-400 hover:bg-gray-500  items-center justify-center ">
             <ImCamera className="text-xl text-white"/>
              <span className="text-xs mt-1 text-white">Upload Photo</span>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default AvatarInput;

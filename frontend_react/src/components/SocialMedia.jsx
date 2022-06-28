import React from 'react'
import { BsDisc, BsDiscord, BsTwitter } from 'react-icons/bs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <AiFillGithub />
      </div>
      <div>
        <AiFillLinkedin />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsDiscord />
      </div>
    </div>
  )
}

export default SocialMedia
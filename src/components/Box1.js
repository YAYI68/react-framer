import React, { useState} from 'react';
import { motion } from "framer-motion"

export const Box1 = () => {
  const [ isAnimate, setIsAnimate] = useState(false);
  return (
    <div className='box-container'>
        <motion.div className='box' 
        whileHover={{ scale: 1.2 }}
        initial={{
          opacity:0.5,
          x:0
        }}
        animate={{
          x:isAnimate?1000:0,
          opacity: isAnimate?1:0.5,
          rotate:isAnimate?360:0,
        }}
        transition={{
          type:"spring",
          stiffness:60,
          damping:20
        }}
        onClick={()=>setIsAnimate(!isAnimate)}

        >
            
        </motion.div>
    </div>
  )
}

import React from 'react';
import { motion } from "framer-motion"

export const Box2 = () => {
  return (
    <div className='box-container'>
        <motion.div className='box' 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9}}
        drag
        dragConstraints={{
            right:30,
            top:-15,
            bottom:15,
            left:-20,
        }}


        >
            
        </motion.div>
    </div>
  )
}

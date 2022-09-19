import React from 'react';
import { motion } from "framer-motion"

export const Box1 = () => {
  return (
    <div className='box-container'>
        <motion.div className='box' 
        whileHover={{ scale: 1.2 }}
        >
            
        </motion.div>
    </div>
  )
}

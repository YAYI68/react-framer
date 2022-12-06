import React from 'react';
import { motion } from "framer-motion"

export const Box3 = () => {
 
    const boxVariant = {
        hidden:{
            x:"-100vw",
            opacity:0,
        },
        visible:{
            x:10,
            opacity:1,
            transition:{
                delay:1,
                when:"beforeChildren",
                staggerChildren: .5,
                delayChildren: 1
            }
        }
    }

    const listVariant={
        hidden:{
            y:-10,
            opacity:0,
        },
        visible:{
            y:0,
            opacity:1,
            transition:{
                repeat: Infinity,
                repeatDelay: 2,
                repeatType: "reverse",
            }
          
            // transition:{
            //     delay:1.5,
            // }
        }
    }

  return (
    <div className='box-container'>
    <motion.div className='box' 
     variants={boxVariant}
     animate="visible"
     initial="hidden" 
    >
        {[1,2,3].map((item)=>(
            <motion.li className='boxItem'
              variants={listVariant}
            //   animate="visible"
            //   initial="hidden" 
            ></motion.li>
        ))}
    </motion.div>
</div>
  )
}

"use client";
import {motion} from"framer-motion";
import { Rotate3D } from "lucide-react";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="relative w-full h-full">
        <motion.div initial={{opacity:0}} 
        animate={{opacity:1,transition:{delay:2,duration:0.4,ease:"easeIn"}}}>
                  <motion.div initial={{opacity:0}} 
        animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeInOut"}}}>
            <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
                <Image src="/assets/photo.png"
                priority
                quality={100}
                fill
                alt="not working"
                className="relative object-contain"/>
            </div>
            </motion.div>
        <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
        fill="transparent"
        viewBox = "0 0 506 506"
        xmlns = "http://www.w3.org/2000/svg"
        >
          <motion.circle 
          cx="253" 
          cy="253" 
          r="241" 
          stroke="#FF204E" 
          strokeWidth = "4" 
          strokeLinecap="round"
          stokeLinejoin="round"
          initial={{strokeDasharray:"24 10 0 0"}}
          animate={{
            strokeDasharray:["15 120 25 25", "16 25 92 72"," 4 250 22 22"],
            rotate:[120,160],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          />
        </motion.svg>
        </motion.div>
    </div>
  )
}

export default Photo
'use client'
import { motion } from 'framer-motion'
import { ComponentProps } from 'react'

type MotionDivProps = ComponentProps<typeof motion.div>

function MotionDiv(props: MotionDivProps) {
  return <motion.div {...props} />
}

export default MotionDiv

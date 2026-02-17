"use client";

import React from "react";
import { motion } from "framer-motion";
import { motionPresets } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      variants={motionPresets.fadeUp(12, 0.8)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

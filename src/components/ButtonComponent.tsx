"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function Component() {
  const [isHovered, setIsHovered] = useState(false)

  return (
      <Button
        variant="ghost"
        className={cn(
          "relative group h-14 px-8 rounded-full border-2 border-transparent",
          "bg-white/80 hover:bg-white/95",
          "transition-all duration-500 ease-out",
          "hover:border-sky-400/50",
          "before:absolute before:inset-0",
          "before:rounded-full before:bg-gradient-to-r",
          "before:from-sky-400/0 before:via-sky-400/10 before:to-sky-400/0",
          "before:animate-gradient-x",
          "after:absolute after:inset-[-2px]",
          "after:rounded-full after:bg-gradient-to-r",
          "after:from-sky-400/0 after:via-sky-400/30 after:to-sky-400/0",
          "after:blur-md after:opacity-0",
          "hover:after:opacity-100",
          "after:transition-opacity after:duration-500"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative z-10 text-gray-700 font-medium text-lg pr-2">
          Nossos Serviços
        </span>
        <ArrowRight 
          className={cn(
            "relative z-10 w-5 h-5 text-sky-500 inline-block ml-1",
            "transition-all duration-300 ease-out",
            isHovered ? "transform translate-x-1" : ""
          )}
        />
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-transparent via-sky-100/50 to-transparent",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            "rounded-full"
          )} 
        />
      </Button>
  )
}
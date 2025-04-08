
import * as React from "react"
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        // Google Material Design cards (slightly elevated with defined borders)
        theme === 'google' && "shadow-md rounded-[4px] border-0",
        // Apple style cards (subtle, rounded corners)
        theme === 'apple' && "rounded-2xl shadow-sm border-0 bg-white",
        // Kayak style cards (more prominent, bold borders)
        theme === 'kayak' && "rounded-md border-2 border-gray-200 shadow",
        className
      )}
      {...props}
    />
  )
})
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col space-y-1.5 p-6",
        theme === 'google' && "p-4",
        theme === 'apple' && "p-5 pb-0",
        theme === 'kayak' && "px-4 py-3 bg-gray-50",
        className
      )}
      {...props}
    />
  )
})
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  
  return (
    <h3
      ref={ref}
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        theme === 'google' && "text-xl font-medium text-gray-800",
        theme === 'apple' && "text-xl font-semibold tracking-tight",
        theme === 'kayak' && "text-lg font-bold uppercase tracking-wide",
        className
      )}
      {...props}
    />
  )
})
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  
  return (
    <p
      ref={ref}
      className={cn(
        "text-sm text-muted-foreground",
        theme === 'google' && "text-sm text-gray-600 mt-1",
        theme === 'apple' && "text-sm text-gray-500 mt-1",
        theme === 'kayak' && "text-xs text-gray-600 font-medium mt-1",
        className
      )}
      {...props}
    />
  )
})
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  
  return (
    <div 
      ref={ref} 
      className={cn(
        "p-6 pt-0",
        theme === 'google' && "p-4 pt-0",
        theme === 'apple' && "p-5 pt-4",
        theme === 'kayak' && "p-4",
        className
      )} 
      {...props} 
    />
  )
})
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { theme } = useTheme();
  
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center p-6 pt-0",
        theme === 'google' && "p-4 pt-0 gap-2 flex-wrap",
        theme === 'apple' && "p-5 pt-0",
        theme === 'kayak' && "p-4 pt-0 border-t border-gray-200 mt-2",
        className
      )}
      {...props}
    />
  )
})
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

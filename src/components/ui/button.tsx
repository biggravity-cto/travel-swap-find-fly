
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from "@/lib/utils"

const getButtonStyles = (theme: string) => {
  switch (theme) {
    case 'google':
      return {
        default: "bg-[#4285F4] text-white hover:bg-[#3367D6] shadow-sm",
        destructive: "bg-[#EA4335] text-white hover:bg-[#D93025] shadow-sm",
        outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-800",
        secondary: "bg-[#F1F3F4] text-gray-700 hover:bg-gray-200 border border-gray-200",
        ghost: "hover:bg-gray-100 text-gray-700",
        link: "text-[#4285F4] underline-offset-4 hover:underline p-0 h-auto font-medium",
        rounded: "rounded-[4px]"
      };
    case 'apple':
      return {
        default: "bg-[#000000] text-white hover:bg-gray-800",
        destructive: "bg-[#FF3B30] text-white hover:bg-[#E5352B]",
        outline: "border border-gray-300 bg-white hover:bg-gray-50 text-black",
        secondary: "bg-[#F5F5F7] text-black hover:bg-[#E8E8ED] border-0",
        ghost: "hover:bg-gray-100/70 text-black",
        link: "text-[#0071E3] underline-offset-4 hover:underline p-0 h-auto",
        rounded: "rounded-full"
      };
    case 'kayak':
      return {
        default: "bg-[#7CBB00] text-white hover:bg-[#6BA300] font-bold uppercase tracking-wide",
        destructive: "bg-[#D92800] text-white hover:bg-[#C52300] font-bold uppercase tracking-wide",
        outline: "border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-800 font-bold uppercase tracking-wide",
        secondary: "bg-[#1C6CCC] text-white hover:bg-[#18509B] font-bold uppercase tracking-wide",
        ghost: "hover:bg-gray-100 text-gray-800 font-bold uppercase tracking-wide",
        link: "text-[#7CBB00] underline-offset-4 hover:underline p-0 h-auto font-bold uppercase tracking-wide",
        rounded: "rounded-md"
      };
    default:
      return {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
        rounded: "rounded-md"
      };
  }
};

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        outline: "",
        secondary: "",
        ghost: "",
        link: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
      theme: {
        default: "",
        google: "",
        apple: "",
        kayak: "",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      theme: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size, asChild = false, ...props }, ref) => {
    const { theme } = useTheme();
    const themeStyles = getButtonStyles(theme);
    
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, theme, className }),
          themeStyles[variant as keyof typeof themeStyles] || "",
          themeStyles.rounded,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

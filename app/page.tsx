import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DatePickerDemo } from '@/components/DatePickerDemo'
import { CardWithForm } from '@/components/CardWithForm'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { DataTableDemo } from '@/components/DataTableDemo'


export default function Page() {
  return (
    <div>
      Home page
      <Button>Button</Button>
      <Dialog>
  <DialogTrigger className="bg-orange-500">Click here</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>


<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Click Here</TooltipTrigger>
    <TooltipContent>
      <p>Your information is here</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

<Sheet>
  <SheetTrigger className='cursor-pointer bg-red-500'>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptatibus.</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptatibus.</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>



<DatePickerDemo/>
<CardWithForm/>

<Carousel>
  <CarouselContent>
    <CarouselItem>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quia consequatur ducimus explicabo vitae ab neque alias impedit! Quasi placeat itaque quam officiis nisi fugiat, dolores nulla unde sapiente possimus totam saepe dignissimos hic nobis. Accusantium molestiae, fuga sunt ad nisi officiis neque incidunt cupiditate perferendis? Qui quidem et laboriosam itaque dolores, illo hic necessitatibus, deserunt explicabo sit quos. Quidem veritatis quaerat inventore, deserunt nisi rerum laudantium beatae quas, debitis sequi quos illum. Voluptate eaque, consequuntur totam ipsa tenetur ex repudiandae architecto corporis ut eum illo, aperiam veritatis libero repellendus, laudantium incidunt? Totam aut amet reiciendis quis illo unde ex.</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

<DataTableDemo/>

    </div>
  )
}



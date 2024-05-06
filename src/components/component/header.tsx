"use client"
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { JSX, SVGProps } from "react"

export default function header() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link className="mr-6 flex items-center" href="#">
        <DongfangLogo className="h-6 w-6" />
        <span className="sr-only">Dongfang</span>
      </Link>
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-red px-4 py-2 text-sm font-medium transition-colors bg-red-100 hover:bg-red-100 hover:text-red-900 focus:bg-red-100 focus:text-red-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-red-100/50 data-[state=open]:bg-red-100/50 dark:bg-red-950 dark:hover:bg-red-800 dark:hover:text-red-50 dark:focus:bg-red-800 dark:focus:text-red-50 dark:data-[active]:bg-red-800/50 dark:data-[state=open]:bg-red-800/50"
                href="#"
              >
                Menu
              </Link>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-red-50">Iconic Dishes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-red p-4 text-sm font-medium transition-colors hover:bg-red-100 hover:text-red-900 focus:bg-red-100 focus:text-red-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-red-100/50 data-[state=open]:bg-red-100/50 dark:bg-red-950 dark:hover:bg-red-800 dark:hover:text-red-50 dark:focus:bg-red-800 dark:focus:text-red-50 dark:data-[active]:bg-red-800/50 dark:data-[state=open]:bg-red-800/50"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">Signature Dish</div>
                      <div className="line-clamp-2 text-sm leading-snug text-red-500 dark:text-red-400">
                        Our famous signature dish.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-red p-4 text-sm font-medium transition-colors hover:bg-red-100 hover:text-red-900 focus:bg-red-100 focus:text-red-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-red-100/50 data-[state=open]:bg-red-100/50 dark:bg-red-950 dark:hover:bg-red-800 dark:hover:text-red-50 dark:focus:bg-red-800 dark:focus:text-red-50 dark:data-[active]:bg-red-800/50 dark:data-[state=open]:bg-red-800/50"
                      href="#"
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">Chef&apos;s Special</div>
                      <div className="line-clamp-2 text-sm leading-snug text-red-500 dark:text-red-400">
                        A unique dish created by our talented chefs.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-red-100 px-4 py-2 text-sm font-medium transition-colors hover:bg-red-300 hover:text-red-900 focus:bg-red-100 focus:text-red-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-red-100/50 data-[state=open]:bg-red-100/50 dark:bg-red-950 dark:hover:bg-red-800 dark:hover:text-red-50 dark:focus:bg-red-800 dark:focus:text-red-50 dark:data-[active]:bg-red-800/50 dark:data-[state=open]:bg-red-800/50"
                href="#"
              >
                Full Menu
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-md  bg-red-100  px-4 py-2 text-sm font-medium transition-colors hover:bg-red-300 hover:text-red-900 focus:bg-red-100 focus:text-red-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-red-100/50 data-[state=open]:bg-red-100/50 dark:bg-red-950 dark:hover:bg-red-800 dark:hover:text-red-50 dark:focus:bg-red-800 dark:focus:text-red-50 dark:data-[active]:bg-red-800/50 dark:data-[state=open]:bg-red-800/50"
                href="#"
              >
                Reservation
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <Select>
          <SelectTrigger className="text-sm font-medium text-red-300 dark:text-red-400 lg:ml-auto">
            <SelectValue defaultValue="en" placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="fr">Français</SelectItem>
            <SelectItem value="zh">中文</SelectItem>
          </SelectContent>
        </Select>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="#">
              <DongfangLogo className="h-6 w-6" />
              <span className="sr-only">Dongfang</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Menu
              </Link>
              <Collapsible className="grid gap-4">
                <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                  Iconic Dishes
                  <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="-mx-6 grid gap-6 bg-red-100 p-6 dark:bg-red-800">
                    <Link className="group grid h-auto w-full justify-start gap-1" href="#">
                      <div className="text-sm font-medium leading-none group-hover:underline">Signature Dish</div>
                      <div className="line-clamp-2 text-sm leading-snug text-red-500 dark:text-red-400">
                        Our famous signature dish.
                      </div>
                    </Link>
                    <Link className="group grid h-auto w-full justify-start gap-1" href="#">
                      <div className="text-sm font-medium leading-none group-hover:underline">Chef&apos;s Special</div>
                      <div className="line-clamp-2 text-sm leading-snug text-red-500 dark:text-red-400">
                        A unique dish created by our talented chefs.
                      </div>
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Full Menu
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Reservation
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function DongfangLogo(props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  return (
    <div className={props.className} style={{ position: 'relative', width: 'inherit', height: 'inherit' }}>
      <img
        src="/dongfangLogo.svg"
        alt="Mountain"
        style={{ objectFit: 'fill', width: 150, height: 150 }} // Adjust as needed: 'cover', 'contain', etc.
        {...props}
      />
    </div>

  )
}



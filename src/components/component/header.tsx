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
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 text-white bg-[#B73332]">
      <Link className=" flex items-center" href="/">
        <DongfangLogo className="h-36 w-36 " />
        <span className="sr-only">Dongfang</span>
      </Link>
      <h1 className=" text-center text-nowrap text-black text-2xl md:text-3xl hidden sm:block ">DONG FANG</h1>
      <div className="flex w-full justify-end pr-8">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-xl bg-slate px-4 py-2 text-sm font-medium transition-colors  hover:bg-black hover:text-white focus:bg-black focus:text-white"
                href="/"
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-xl bg-slate px-4 py-2 text-sm font-medium transition-colors  hover:bg-black hover:text-white focus:bg-black focus:text-white"
                href="/about"
              >
                About Us
              </Link>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-xl  px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white focus:focus:bg-black focus:text-white"
                href="/menu"
              >
                Special Menu
              </Link>
            </NavigationMenuLink>

            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white focus:focus:bg-black focus:text-white"
                href="/menu"
              >
                Main Menu
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="group inline-flex h-9 w-max items-center justify-center rounded-xl  px-4 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white focus:focus:bg-black focus:text-white"
                href="/reservation"
              >
                Reservation
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <Select>
          <SelectTrigger className="text-sm font-semibold bg-[#FAF3EB] text-red-700 dark:text-slate-400 lg:ml-auto">
            <SelectValue defaultValue="en" placeholder="English" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="fr">Français</SelectItem>
            <SelectItem value="zh">中文</SelectItem>
          </SelectContent>
        </Select>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden text-black bg-[#FAF3EB]" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#FAF3EB]" side="left">
            <Link href="#">
              <DongfangLogo className="h-6 w-6" />
              <span className="sr-only">Dongfang</span>
            </Link>
            <div className="grid gap-2 py-6">
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/">
                Home
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/about">
                About Us
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/menu">
                Special Menu
              </Link>

              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/menu">
                Main Menu
              </Link>
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="/reservation">
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



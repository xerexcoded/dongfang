import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { SVGProps } from "react"
import Image from "next/image"

export default function menupage() {
  return (
    <div key="1" className="flex h-screen w-full flex-col bg-gradient-to-br from-amber-400 to-yellow-400">

      <header className="flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center justify-center my-auto mx-auto"><span className="text-2xl font-bold">Our Menu</span></div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="rounded-2xl" size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gradient-to-br from-amber-400 to-yellow-400" side="left">
              <div className="flex flex-col gap-4 border-r border-amber-900/20 bg-amber-900/10 p-6">
                <h2 className="text-xl font-bold text-amber-900">Filter Menu</h2>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Checkbox id="vegetarian" />
                    <Label htmlFor="vegetarian">Vegetarian</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="non-vegetarian" />
                    <Label htmlFor="non-vegetarian">Non-Vegetarian</Label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-amber-900">Price Range</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-amber-900">Ingredients</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <Checkbox id="beef" />
                      <Label htmlFor="beef">Beef</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="pork" />
                      <Label htmlFor="pork">Pork</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="chicken" />
                      <Label htmlFor="chicken">Chicken</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="seafood" />
                      <Label htmlFor="seafood">Seafood</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="vegetable" />
                      <Label htmlFor="vegetable">Vegetable</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="tofu" />
                      <Label htmlFor="tofu">Tofu</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="lamb" />
                      <Label htmlFor="lamb">Lamb</Label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-amber-900">Type</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <Checkbox id="soups" />
                      <Label htmlFor="soups">Soups</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="starter" />
                      <Label htmlFor="starter">Starter</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="mains" />
                      <Label htmlFor="mains">Mains</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="noodles" />
                      <Label htmlFor="noodles">Noodles</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="desserts" />
                      <Label htmlFor="desserts">Desserts</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="drinks" />
                      <Label htmlFor="drinks">Drinks</Label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-amber-900">Region</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Checkbox id="anhui" />
                      <Label htmlFor="anhui">Anhui</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="fujian" />
                      <Label htmlFor="fujian">Fujian</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="guangdong" />
                      <Label htmlFor="guangdong">Guangdong</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="hunan" />
                      <Label htmlFor="hunan">Hunan</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="jiangsu" />
                      <Label htmlFor="jiangsu">Jiangsu</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="shandong" />
                      <Label htmlFor="shandong">Shandong</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="sichuan" />
                      <Label htmlFor="sichuan">Sichuan</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="zhejiang" />
                      <Label htmlFor="zhejiang">Zhejiang</Label>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden w-64 flex-col gap-4 border-r border-amber-900/20 bg-amber-900/10 p-6 md:flex">
          <h2 className="text-xl font-bold text-amber-900">Filter Menu</h2>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Checkbox id="vegetarian" />
              <Label htmlFor="vegetarian">Vegetarian</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="non-vegetarian" />
              <Label htmlFor="non-vegetarian">Non-Vegetarian</Label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-amber-900">Price Range</h3>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-amber-900">Ingredients</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="beef" />
                <Label htmlFor="beef">Beef</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="pork" />
                <Label htmlFor="pork">Pork</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="chicken" />
                <Label htmlFor="chicken">Chicken</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="seafood" />
                <Label htmlFor="seafood">Seafood</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="vegetable" />
                <Label htmlFor="vegetable">Vegetable</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="tofu" />
                <Label htmlFor="tofu">Tofu</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="lamb" />
                <Label htmlFor="lamb">Lamb</Label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-amber-900">Type</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="soups" />
                <Label htmlFor="soups">Soups</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="starter" />
                <Label htmlFor="starter">Starter</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="mains" />
                <Label htmlFor="mains">Mains</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="noodles" />
                <Label htmlFor="noodles">Noodles</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="desserts" />
                <Label htmlFor="desserts">Desserts</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="drinks" />
                <Label htmlFor="drinks">Drinks</Label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-amber-900">Region</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="anhui" />
                <Label htmlFor="anhui">Anhui</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="fujian" />
                <Label htmlFor="fujian">Fujian</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="guangdong" />
                <Label htmlFor="guangdong">Guangdong</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="hunan" />
                <Label htmlFor="hunan">Hunan</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="jiangsu" />
                <Label htmlFor="jiangsu">Jiangsu</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="shandong" />
                <Label htmlFor="shandong">Shandong</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="sichuan" />
                <Label htmlFor="sichuan">Sichuan</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="zhejiang" />
                <Label htmlFor="zhejiang">Zhejiang</Label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative flex flex-col items-start rounded-lg bg-white/80 p-4 backdrop-blur-lg transition-all hover:scale-105 hover:shadow-lg opacity-80">
              <Image
                alt="Dish Image"
                className="mb-4 w-full rounded-lg object-cover"
                height={200}
                src="https://images.unsplash.com/photo-1505253668822-42074d58a7c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpc2hlcyUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="flex items-center gap-2">
                <LeafIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-600">Vegetarian</span>
              </div>
              <h3 className="mt-2 text-lg font-bold">Vegetable Curry</h3>
              <p className="mt-2 text-gray-600">A delicious vegetable curry made with fresh seasonal produce.</p>
              <div className="mt-2 flex items-center gap-1">
                <CherryIcon className="h-4 w-4 text-red-500" />
                <CherryIcon className="h-4 w-4 text-red-500" />
              </div>
              <div className="mt-4 flex w-full justify-between">
                <span className="text-lg font-bold text-amber-900">$12.99</span>
              </div>
            </div>
            <div className="relative flex flex-col items-start rounded-lg bg-white/80 p-4 backdrop-blur-lg transition-all hover:scale-105 hover:shadow-lg opacity-80">
              <Image
                alt="Dish Image"
                className="mb-4 w-full rounded-lg object-cover"
                height={200}
                src="https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpc2hlcyUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="flex items-center gap-2">
                <BeefIcon className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium text-gray-600">Non-Vegetarian</span>
              </div>
              <h3 className="mt-2 text-lg font-bold">Grilled Steak</h3>
              <p className="mt-2 text-gray-600">A juicy grilled steak served with roasted potatoes and vegetables.</p>
              <div className="mt-2 flex items-center gap-1">
                <CherryIcon className="h-4 w-4 text-red-500" />
              </div>
              <div className="mt-4 flex w-full justify-between">
                <span className="text-lg font-bold text-amber-900">$24.99</span>
              </div>
            </div>
            <div className="relative flex flex-col items-start rounded-lg bg-white/80 p-4 backdrop-blur-lg transition-all hover:scale-105 hover:shadow-lg opacity-80">
              <Image
                alt="Dish Image"
                className="mb-4 w-full rounded-lg object-cover"
                height={200}
                src="https://images.unsplash.com/photo-1505253668822-42074d58a7c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlzaGVzJTIwZm9vZCUyMGNoaW5lc2V8ZW58MHx8MHx8fDA%3D"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="flex items-center gap-2">
                <LeafIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-600">Vegetarian</span>
              </div>
              <h3 className="mt-2 text-lg font-bold">Tofu Stir Fry</h3>
              <p className="mt-2 text-gray-600">A flavorful stir fry with crispy tofu and fresh vegetables.</p>
              <div className="mt-2 flex items-center gap-1">
                <CherryIcon className="h-4 w-4 text-red-500" />
                <CherryIcon className="h-4 w-4 text-red-500" />
                <CherryIcon className="h-4 w-4 text-red-500" />
              </div>
              <div className="mt-4 flex w-full justify-between">
                <span className="text-lg font-bold text-amber-900">$14.99</span>
              </div>
            </div>
            <div className="relative flex flex-col items-start rounded-lg bg-white/80 p-4 backdrop-blur-lg transition-all hover:scale-105 hover:shadow-lg opacity-80">
              <Image
                alt="Dish Image"
                className="mb-4 w-full rounded-lg object-cover"
                height={200}
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzaGVzJTIwZm9vZCUyMGNoaW5lc2V8ZW58MHx8MHx8fDA%3D"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="flex items-center gap-2">
                <BeefIcon className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium text-gray-600">Non-Vegetarian</span>
              </div>
              <h3 className="mt-2 text-lg font-bold">Beef Noodles</h3>
              <p className="mt-2 text-gray-600">Savory beef noodles in a rich broth, topped with fresh herbs.</p>
              <div className="mt-2 flex items-center gap-1">
                <SpadeIcon className="h-4 w-4 text-red-500" />
                <SpadeIcon className="h-4 w-4 text-red-500" />
              </div>
              <div className="mt-4 flex w-full justify-between">
                <span className="text-lg font-bold text-amber-900">$16.99</span>
              </div>
            </div>
            <div className="relative flex flex-col items-start rounded-lg bg-white/80 p-4 backdrop-blur-lg transition-all hover:scale-105 hover:shadow-lg opacity-80">
              <Image
                alt="Dish Image"
                className="mb-4 w-full rounded-lg object-cover"
                height={200}
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzaGVzJTIwZm9vZCUyMGNoaW5lc2V8ZW58MHx8MHx8fDA%3D"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="flex items-center gap-2">
                <BeefIcon className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium text-gray-600">Non-Vegetarian</span>
              </div>
              <h3 className="mt-2 text-lg font-bold">Beef Noodles</h3>
              <p className="mt-2 text-gray-600">Savory beef noodles in a rich broth, topped with fresh herbs.</p>
              <div className="mt-2 flex items-center gap-1">
                <SpadeIcon className="h-4 w-4 text-red-500" />
                <SpadeIcon className="h-4 w-4 text-red-500" />
              </div>
              <div className="mt-4 flex w-full justify-between">
                <span className="text-lg font-bold text-amber-900">$16.99</span>
              </div>
            </div>
            <div className="relative flex flex-col items-start rounded-lg bg-white/80 p-4 backdrop-blur-lg transition-all hover:scale-105 hover:shadow-lg opacity-80">
              <Image
                alt="Dish Image"
                className="mb-4 w-full rounded-lg object-cover"
                height={200}
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzaGVzJTIwZm9vZCUyMGNoaW5lc2V8ZW58MHx8MHx8fDA%3D"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="flex items-center gap-2">
                <BeefIcon className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium text-gray-600">Non-Vegetarian</span>
              </div>
              <h3 className="mt-2 text-lg font-bold">Beef Noodles</h3>
              <p className="mt-2 text-gray-600">Savory beef noodles in a rich broth, topped with fresh herbs.</p>
              <div className="mt-2 flex items-center gap-1">
                <SpadeIcon className="h-4 w-4 text-red-500" />
                <SpadeIcon className="h-4 w-4 text-red-500" />
              </div>
              <div className="mt-4 flex w-full justify-between">
                <span className="text-lg font-bold text-amber-900">$16.99</span>
              </div>
            </div>
            <div className="relative flex flex-col items-start rounded-lg bg-white/80 p-4 backdrop-blur-lg transition-all hover:scale-105 hover:shadow-lg opacity-80">
              <Image
                alt="Dish Image"
                className="mb-4 w-full rounded-lg object-cover"
                height={200}
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzaGVzJTIwZm9vZCUyMGNoaW5lc2V8ZW58MHx8MHx8fDA%3D"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="flex items-center gap-2">
                <BeefIcon className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium text-gray-600">Non-Vegetarian</span>
              </div>
              <h3 className="mt-2 text-lg font-bold">Beef Noodles</h3>
              <p className="mt-2 text-gray-600">Savory beef noodles in a rich broth, topped with fresh herbs.</p>
              <div className="mt-2 flex items-center gap-1">
                <SpadeIcon className="h-4 w-4 text-red-500" />
                <SpadeIcon className="h-4 w-4 text-red-500" />
              </div>
              <div className="mt-4 flex w-full justify-between">
                <span className="text-lg font-bold text-amber-900">$16.99</span>
              </div>
            </div>
            <div className="relative flex flex-col items-start rounded-lg bg-white/80 p-4 backdrop-blur-lg transition-all hover:scale-105 hover:shadow-lg opacity-80">
              <Image
                alt="Dish Image"
                className="mb-4 w-full rounded-lg object-cover"
                height={200}
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzaGVzJTIwZm9vZCUyMGNoaW5lc2V8ZW58MHx8MHx8fDA%3D"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width={300}
              />
              <div className="flex items-center gap-2">
                <BeefIcon className="h-5 w-5 text-red-500" />
                <span className="text-sm font-medium text-gray-600">Non-Vegetarian</span>
              </div>
              <h3 className="mt-2 text-lg font-bold">Beef Noodles</h3>
              <p className="mt-2 text-gray-600">Savory beef noodles in a rich broth, topped with fresh herbs.</p>
              <div className="mt-2 flex items-center gap-1">
                <SpadeIcon className="h-4 w-4 text-red-500" />
                <SpadeIcon className="h-4 w-4 text-red-500" />
              </div>
              <div className="mt-4 flex w-full justify-between">
                <span className="text-lg font-bold text-amber-900">$16.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BeefIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12.5" cy="8.5" r="2.5" />
      <path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" />
      <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
    </svg>
  )
}


function CherryIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
      <path d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" />
      <path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" />
      <path d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" />
    </svg>
  )
}


function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
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


function SpadeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z" />
      <path d="M12 18v4" />
    </svg>
  )
}

"use client";
import React, { FC, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { cn } from "@/lib/utils";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header className="container mx-auto py-8">
      <nav className="w-full flex items-center justify-between bg-white px-6 py-4 rounded-3xl border border-black border-b-4 border-r-4">
        <h1>Hello</h1>
        <NavigationMenu className="lg:flex hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onPointerEnter={(event) => event.preventDefault()}
                onPointerLeave={(event) => event.preventDefault()}
              >
                Item One
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid gap-3 md:p-6 w-20 md:w-[400px] lg:w-64">
                  <li>
                    <ListItem> Link 1 </ListItem>
                  </li>
                  <li className="">
                    <Menubar className="border-none w-full ">
                      <MenubarMenu>
                        <MenubarTrigger
                          onPointerEnter={(event) => event.preventDefault()}
                          onPointerLeave={(event) => event.preventDefault()}
                          className="w-full"
                        >
                          File
                        </MenubarTrigger>
                        <MenubarContent className="w-full">
                          <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                          </MenubarItem>
                          <MenubarItem>New Window</MenubarItem>
                          <MenubarSeparator />
                          <MenubarSub>
                            <MenubarSubTrigger>Share</MenubarSubTrigger>
                            <MenubarSubContent>
                              <MenubarItem>Email link</MenubarItem>
                              <MenubarItem>Messages</MenubarItem>
                              <MenubarItem>Notes</MenubarItem>
                            </MenubarSubContent>
                          </MenubarSub>
                          <MenubarSeparator />
                          <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  </li>
                  <li>
                    <ListItem> Link 3 </ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div></div>
        <div className="flex lg:hidden">
          <button onClick={() => setShowMenu(!showMenu)}>menu</button>
        </div>
        <div
          className={`${
            showMenu ? "translate-x-0" : "translate-x-full"
          } w-full h-screen fixed z-[1] top-0 left-0 duration-300 ease-in-out transform transition-all bg-white`}
        >
          <div className="flex w-full justify-end p-10">
            <button onClick={() => setShowMenu(!showMenu)}>menu</button>
          </div>
          <div className="container mx-auto">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col gap-5">
                <NavigationMenuItem className="flex px-4 py-2 w-full hover:bg-slate-50">
                  Test
                </NavigationMenuItem>
                <NavigationMenuItem className="text-left">
                  <NavigationMenuTrigger
                    onPointerEnter={(event) => event.preventDefault()}
                    onPointerLeave={(event) => event.preventDefault()}
                  >
                    Item One
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="">
                    <ul className="grid gap-3 md:p-6 w-20 md:w-[400px] lg:w-64">
                      <li>
                        <ListItem> Link 1 </ListItem>
                      </li>
                      <li className="">
                        <Menubar className="border-none w-full ">
                          <MenubarMenu>
                            <MenubarTrigger className="w-full">
                              File
                            </MenubarTrigger>
                            <MenubarContent className="w-full">
                              <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                              </MenubarItem>
                              <MenubarItem>New Window</MenubarItem>
                              <MenubarSeparator />
                              <MenubarSub>
                                <MenubarSubTrigger>Share</MenubarSubTrigger>
                                <MenubarSubContent>
                                  <MenubarItem>Email link</MenubarItem>
                                  <MenubarItem>Messages</MenubarItem>
                                  <MenubarItem>Notes</MenubarItem>
                                </MenubarSubContent>
                              </MenubarSub>
                              <MenubarSeparator />
                              <MenubarItem>Print</MenubarItem>
                            </MenubarContent>
                          </MenubarMenu>
                        </Menubar>
                      </li>
                      <li>
                        <ListItem> Link 3 </ListItem>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;

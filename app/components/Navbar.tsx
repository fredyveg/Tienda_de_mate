"use client";

// React
import React, {useState} from "react";

// Next UI
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

// Utils
import {useWindowSize} from "@/hooks/useWindowSize";
import {NAVBAR_ITEMS} from "../resources/constants";

// Navegacion
import {usePathname} from "next/navigation";

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Con esto podemos ver la url actual.
  const pathname = usePathname();

  // Hook personalizado para revisar el ancho y alto de la ventana
  const {width} = useWindowSize();

  return (
    <Navbar
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="py-2 flex flex-row bg-primario-500 font-normal"
    >
      <NavbarContent className="xl:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="xl:hidden pr-3" justify="start">
        <NavbarBrand className="flex flex-col">
          <p className="font-bold text-inherit text-3xl">TIENDA</p>
          <p className="font-medium text-inherit text-3xl">DE MATE</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden xl:block">
        <div className="flex flex-row items-center justify-between w-10/12 pl-20">
          <Link href={width > 1280 ? "/" : "#"}>
            <div className="flex flex-col cursor-pointer select-none text-blanco w-4 text-center">
              <p className="font-semibold text-inherit text-3xl">TIENDA</p>
              <p className="font-normal text-inherit text-2xl whitespace-nowrap">
                DE MATE
              </p>
            </div>
          </Link>

          <div className="flex flex-row gap-6 2xl:gap-11">
            {NAVBAR_ITEMS.map((item, index) => (
              <NavbarItem
                key={`${item}-${index}`}
                isActive={pathname === item.path}
              >
                <Link
                  className="w-full text-blanco"
                  color="foreground"
                  href={item.path}
                  size="lg"
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}
          </div>
        </div>
      </NavbarContent>

      <NavbarMenu>
        {NAVBAR_ITEMS.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            isActive={pathname === item.path}
          >
            <Link
              className="w-full"
              color={pathname === item.path ? "warning" : "foreground"}
              href={item.path}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

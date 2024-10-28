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
  const {width, height} = useWindowSize();

  return (
    <Navbar
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="py-2 flex flex-row bg-primario-500 font-normal text-blanco"
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
      <NavbarContent className="hidden xl:flex flex-row gap-96 pl-20">
        <div>
          <NavbarBrand
            className="flex flex-col cursor-pointer select-none text-blanco"
            as={Link}
            href={width > 1280 ? "/" : "#"}
          >
            <p className="font-semibold text-inherit text-3xl">TIENDA</p>
            <p className="font-normal text-inherit text-2xl">DE MATE</p>
          </NavbarBrand>
        </div>
        <div className="flex flex-row gap-11 self-center">
          {NAVBAR_ITEMS.map((item, index) => (
            <NavbarItem
              className="text-blanco"
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

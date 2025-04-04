"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownSection,
} from "@heroui/react";
import { Logo } from "./logo";
import { NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar";
import React from "react";
import { getAllSpotlightInfo } from "@/utils/spotlights-util";

export type NavigationProps = {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
  className?: string;
};

export type MenuItem = {
  title: string;
  key: string;
  subItems?: MenuItem[];
  href?: string;
  icon?: React.JSX.Element;
  description?: string;
};

export const ChevronDown = ({
  fill,
  size,
  height,
  width,
  ...props
}: NavigationProps) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Lock = ({
  fill,
  size,
  height,
  width,
  ...props
}: NavigationProps) => {
  const color = fill;

  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(3.5 2)">
        <path
          d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(3.85 0.75)"
        />
        <path
          d="M.5,0V2.221"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(7.91 12.156)"
        />
        <path
          d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(0.75 6.824)"
        />
      </g>
    </svg>
  );
};

export const Activity = ({
  fill,
  size,
  height,
  width,
  ...props
}: NavigationProps) => {
  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
        <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
        <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
      </g>
    </svg>
  );
};

export const Flash = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: NavigationProps) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Server = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: NavigationProps) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TagUser = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: NavigationProps) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Scale = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}: NavigationProps) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        d="M18 10V6h-4M6 14v4h4"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export default function Navigation() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  const getSpotlightMenu = () => {
    const menuItems: MenuItem[] = [];

    getAllSpotlightInfo().forEach((spotlight) => {
      if (spotlight.visible) {
        menuItems.push({
          title: spotlight.name,
          key: spotlight.id,
          href: `/spotlights/${spotlight.id}`,
        });
      }
    });

    return menuItems;
  };

  const menuItems2: MenuItem[] = [
    { title: "Home", key: "home", href: "/" },
    { title: "About Us", key: "about-us", href: "/about" },
    { title: "My Story", key: "story", href: "/story" },
    {
      title: "Events",
      key: "events",
      subItems: [
        {
          title: "Upcoming",
          key: "upcoming",
          subItems: [
            {
              title: "Resource Fair 2025",
              key: "resource-fair-2025",
              href: "/events/resource-fair-2025",
            },
          ],
        },
        {
          title: "Previous",
          key: "previous",
          subItems: [
            {
              title: "Sensitive Santa 2024",
              href: "/events/sensitive-santa-2024",
              key: "sensitive-santa-2024",
            },
          ],
        },
      ],
      icon: icons.chevron,
    },
    {
      title: "Spotlights",
      key: "spotlights",
      subItems: getSpotlightMenu(),
      icon: icons.chevron,
    },
    { title: "Contact Us", key: "contact", href: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const buildNavbarMenu = (
    navbarItems: MenuItem[],
    size: "lg" | "md" | "sm" | undefined = "lg"
  ): React.JSX.Element[] => {
    return navbarItems.map((item: MenuItem) => {
      const itemValue = item.href ? (
        <>
          <Link
            className="w-full"
            color="foreground"
            href={item.href}
            size={size}
          >
            {item.title}
          </Link>
        </>
      ) : (
        <>{item.title}</>
      );
      const subItems = item.subItems ? (
        buildNavbarMenu(item.subItems, size === "lg" ? "md" : "sm")
      ) : (
        <></>
      );

      return (
        <>
          <NavbarMenuItem key={item.key}>{itemValue}</NavbarMenuItem>
          {subItems}
        </>
      );
    });
  };

  const buildNavbarDropdownItem = (navbarItem: MenuItem, keyPrefix:string): React.JSX.Element => {
    console.log(`Building now: ${navbarItem.title} ${keyPrefix + "-" + navbarItem.key + "-item"}`);
    return (
      <>
        <DropdownItem
          key={keyPrefix + "-" + navbarItem.key + "-item"}
          description={navbarItem.description}
          href={navbarItem.href}
        >
          {navbarItem.title}
        </DropdownItem>
      </>
    );
  };

  const buildNavbarDropdownSection = (
    navbarItem: MenuItem, keyPrefix:string
  ): React.JSX.Element => {
    const subItems: React.JSX.Element[] = [];
    console.log(`Building ${navbarItem.title} ${keyPrefix + "-" + navbarItem.key + "-section"}`);
    navbarItem.subItems?.forEach((item: MenuItem) => {
      subItems.push(buildNavbarDropdownItem(item, navbarItem.key));
    });
    return (
      <>
        <DropdownSection
          key={keyPrefix + "-" + navbarItem.key + "-section"}
          showDivider
          title={navbarItem.title}
        >
          {subItems}
        </DropdownSection>
      </>
    );
  };

  const buildNavbarDropdown = (navbarItem: MenuItem): React.JSX.Element => {
    const subItems: React.JSX.Element[] = [];
    subItems.push();

    if (navbarItem.subItems) {
      navbarItem.subItems.forEach((item: MenuItem) => {
        if (item.subItems) {
          subItems.push(buildNavbarDropdownSection(item, navbarItem.key));
        } else {
          subItems.push(buildNavbarDropdownItem(item, navbarItem.key));
        }
      });
    }

    return (
      <>
        <Dropdown key={navbarItem.key + "-dropdown"}>
          <NavbarItem key={navbarItem.key + "-item"}>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={navbarItem.icon}
                radius="sm"
                variant="light"
              >
                {navbarItem.title}
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Events"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {subItems}
          </DropdownMenu>
        </Dropdown>
      </>
    );
  };

  const buildNavbarContent = (navbarItems: MenuItem[]): React.JSX.Element => {
    const subItems: React.JSX.Element[] = [];
    navbarItems.forEach((item: MenuItem) => {
      if (item.subItems) {
        const navDropDown = buildNavbarDropdown(item);
        subItems.push(<>{navDropDown}</>);
      } else {
        subItems.push(
          <>
            <NavbarItem>
              <Link color="foreground" href={item.href}>
                {item.title}
              </Link>
            </NavbarItem>
          </>
        );
      }
    });
    return (
      <>
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          {subItems}
        </NavbarContent>
      </>
    );
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" height={200}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Logo size={150} />
          {/* <div className="m-5">
            <p className="text-2xl font-bold text-inherit">Pacific Northwest</p>
            <p className="text-2xl font-bold text-inherit">Family Navigation</p>
          </div> */}
          {/* <p className="font-bold text-inherit ml-2">Pacific Northwest Family Navigation</p> */}
        </NavbarBrand>
      </NavbarContent>
      <div>
        <p className="font-bold text-inherit text-4xl">
          Pacific Northwest Family Navigation
        </p>
        {buildNavbarContent(menuItems2)}
      </div>

      <NavbarMenu>
        {buildNavbarMenu(menuItems2)}
      </NavbarMenu>
    </Navbar>
  );
}

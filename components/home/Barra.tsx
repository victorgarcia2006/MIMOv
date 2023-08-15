import { ActionIcon, Button, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Header } from "@mantine/core";

const BarraMenu = () => {
  const theme = useMantineTheme();
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const isActiveRoute = (path: string) => {
    console.log(router.pathname, path);

    return router.pathname === path;
  };
  const sections = [
    {
      sectionName: "Sobre MIMO",
      href: "/SobreMimo",
    },
    {
      sectionName: "Diseño",
      href: "/Diseno",
    },
    {
      sectionName: "Especificaciones",
      href: "/Especificaciones",
    },
    {
      sectionName: "Contacto",
      href: "/Contacto",
    },
  ];

  return (
    <Header height={80}>
      <div className="fixed w-full z-20 top-0 left-0 drop-shadow bg-[#95BCEC] h-20 lg:h-20 xl:px-52 lg:px-16 md:px-8 px-4">
        <div className="lg:flex lg:flex-wrap lg:items-center lg:justify-between h-full flex items-center">
          <div className="lg:hidden grow-0">
            <ActionIcon
              radius="xl"
              size="lg"
              variant="transparent"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <IconMenu2 size={24} color="black" />
            </ActionIcon>
          </div>
          <div className="flex items-center justify-center text-center mx-auto lg:mx-0 lg:grow-0 lg:text-left relative h-[25px] w-[20px]  lg:h-[50px] lg:w-[150px]">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                objectFit="contain"
                width={80}
                height={80}
                className=""
              />
            </Link>
          </div>
          <div className="hidden lg:flex lg:justify-between lg:items-center lg:flex-row">
            <ul
              style={{ listStyle: "none" }}
              className="lg:gap-14 hidden lg:flex"
            >
              {/* text-xl font-bold */}
              {sections.map((item) => (
                <li key={item.sectionName}>
                  <Link href={item.href} legacyBehavior>
                    <a
                      className={
                        isActiveRoute(item.href)
                          ? "text-[#234269] text-xl font-bold"
                          : "text-xl font-bold text-[#234269] no-underline"
                      }
                    >
                      {item.sectionName}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*    <div
        className={
          "lg:flex flex-grow items-center" +
          (navbarOpen ? " flex bg-primary" : " hidden")
        }
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#pablo"
            >
              <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Share</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#pablo"
            >
              <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Tweet</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              href="#pablo"
            >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
              <span className="ml-2">Pin</span>
            </a>
          </li>
        </ul>
      </div> */}
      </div>
      <div
        id="drawer-example"
        className={` fixed overflow-hidden z-50 bg-[#000000] bg-opacity-25 inset-y-0 transform ease-in-out ${
          isNavOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0 "
            : " transition-all delay-500 opacity-0 -translate-x-full "
        }`}
      >
        <section
          className={
            " w-52 left-0 absolute bg-[#fff] h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform p-8 space-y-4 " +
            (isNavOpen ? " translate-x-0 " : " -translate-x-full ")
          }         
        > 
             

          {sections.map((item, index) => (
            <Button className="w-full" size="xs" key={index} component="a" href={item.href}>
              {item.sectionName}
            </Button>
          ))}
        </section>
        <section
          className="w-screen h-full"
          onClick={() => {
            setIsNavOpen(false);
          }}
        ></section>
      </div>
    </Header>
  );

};

export default BarraMenu;

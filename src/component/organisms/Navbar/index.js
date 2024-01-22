import { Link } from "react-router-dom/cjs/react-router-dom";
import "./style.css";
import Container from "../../atoms/Container";
import Button from "../../atoms/Button";
import Dropdown from "../../atoms/Dropdown";
import { Fragment } from "react";
import { Icon } from "@iconify/react";
const menuList = [
  {
    name: "Electonics",
    url: "/",
    submenu: [],
  },
  {
    name: "Fashion",
    url: "/",
    submenu: [],
  },
  {
    name: "Personal Care",
    url: "/",
    submenu: [],
  },
  {
    name: "All Categories",
    url: "",
    submenu: [
      <Link className="block p-[10px]" to="/">
        Men
      </Link>,
      <Link className="block p-[10px]" to="/">
        Women
      </Link>,
    ],
  },
];

function Navbar() {
  return (
    <header className="navbar flex justify-between">
      <Container className="flex justify-between items-center py-5">
        <div className="flex items-center gap-5">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-[150px]" />
          </Link>
          <div className="hidden lg:flex items-center gap-4 text-[16px]">
            {menuList.map((item, index) =>
              item.submenu.length > 0 ? (
                <Dropdown
                  key={`navbar-${index}`}
                  id={`navbar-${index}`}
                  option={{
                    label: item.name,
                    type: "label-icon",
                  }}
                >
                  <div>
                    {item.submenu.map((subItem) => (
                      <Fragment key={`navbar-sub-${index}`}>subItem</Fragment>
                    ))}
                  </div>
                </Dropdown>
              ) : (
                <Link
                  key={`navbar-${index}`}
                  className="p-[10px]"
                  to={item.url}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
        <div className="hidden lg:flex gap-4">
          <Link to="/">
            <Button variant="primary-outlined">Jual</Button>
          </Link>
          <Link to="/">
            <Button>Masuk/Daftar</Button>
          </Link>
        </div>
        <div className="lg:hidden">
          <Dropdown
            id="menu-mobile"
            option={{
              customLabel: (
                <div className="w-[40px] aspect-square rounded border flex items-center justify-center">
                  <Icon icon="mingcute:menu-fill" width={25} height={25} />
                </div>
              ),
              type: "custom",
            }}
            position="br"
          >
            <div className="min-w-[250px]">
              {menuList.map((item, index) => (
                <Link
                  key={`menu-mobile-${index}`}
                  className="block px-4 py-2 hover:bg-gray-200 duration-150"
                  to={item.url}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 border-t mt-2 p-3 ">
                <Link to="/">
                  <Button className="w-full" variant="primary-outlined">
                    Jual
                  </Button>
                </Link>
                <Link to="/">
                  <Button className="w-full">Masuk/Daftar</Button>
                </Link>
              </div>
            </div>
          </Dropdown>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;

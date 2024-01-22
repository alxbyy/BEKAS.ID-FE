import { Link } from "react-router-dom/cjs/react-router-dom";
import Container from "../../atoms/Container";

const menuList = [
  {
    title: "Produk",
    menu: [
      {
        name: "Pakaian",
        url: "/",
      },
      {
        name: "Kendaraan",
        url: "/",
      },
      {
        name: "Elektronik",
        url: "/",
      },
      {
        name: "Rumah",
        url: "/",
      },
    ],
  },
  {
    title: "Perusahaan",
    menu: [
      {
        name: "Tentang Kami",
        url: "/",
      },
      {
        name: "Contact Us",
        url: "/",
      },
      {
        name: "Term",
        url: "/",
      },
      {
        name: "Privacy",
        url: "/",
      },
    ],
  },
  {
    title: "Dukungan",
    menu: [
      {
        name: "Help Center",
        url: "/",
      },
      {
        name: "Kontak Kami",
        url: "/",
      },
      {
        name: "Ketentuan",
        url: "/",
      },
    ],
  },
];

function Footer() {
  return (
    <footer className="mt-[100px]">
      <Container>
        <div className="block xl:hidden mb-[32px]">
          <img src="/logo.png" alt="logo" className="w-[200px] mb-[14px]" />
          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <div className="grid grid-cols-2 lg:flex gap-[15px]">
          <div className="w-full hidden xl:block max-w-[446px]">
            <img src="/logo.png" alt="logo" className="mb-[44px]" />
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </div>
          {menuList.map((item, index) => (
            <div key={`footer-${index}`} className="lg:flex-1">
              <h6 className="text-[20px] mb-4">{item.title}</h6>
              {item.menu.map((subMenu, subIndex) => (
                <Link
                  key={`footer-subMenu-${item.title}-${subIndex}`}
                  className="py-[5px] block mb-[10px]"
                  to={subMenu.url}
                >
                  {subMenu.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t-[1px] border-[#2E2E2E] pt-[40px] mt-[32px] pb-[40px]">
          <p className="text-center">
            Copyright © bekas.id | All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

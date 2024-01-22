import _ from "lodash";

export const categoryMenu = [
  {
    id: "following",
    img: "/images/category/category1.png",
    title: "Following",
  },
  {
    id: "women-fashion",
    img: "/images/category/category2.png",
    title: "Women’s Fashion",
  },
  {
    id: "men-fashion",
    img: "/images/category/category3.png",
    title: "Men’s Fashion",
  },
  {
    id: "health",
    img: "/images/category/category4.png",
    title: "Health & Beauty",
  },
  {
    id: "electonics",
    img: "/images/category/category5.png",
    title: "Electronics",
  },
  {
    id: "mobile",
    img: "/images/category/category6.png",
    title: "Mobile Phones & Tablets",
  },
  {
    id: "books",
    img: "/images/category/category7.png",
    title: "Books & Stationery",
  },
  {
    id: "babies",
    img: "/images/category/category8.png",
    title: "Babies & Kids",
  },
  {
    id: "olshop",
    img: "/images/category/category9.png",
    title: "Olshop Fashion",
  },
  {
    id: "luxury",
    img: "/images/category/category10.png",
    title: "Luxury",
  },
  {
    id: "photography",
    img: "/images/category/category11.png",
    title: "Photography",
  },
];

export const sortMenu = [
  {
    id: "new",
    title: "Terbaru",
    sort: (list) => {
      return _.orderBy(list, ["created_at"], ["asc"]);
    },
  },
  {
    id: "low",
    title: "Harga - Rendah ke Tinggi",
    sort: (list) => {
      return _.orderBy(list, ["price"], ["asc"]);
    },
  },
  {
    id: "high",
    title: "Harga - Tinggi ke Rendah",
    sort: (list) => {
      return _.orderBy(list, ["price"], ["desc"]);
    },
  },
  {
    id: "nearest",
    title: "Terdekat",
    sort: (list) => {
      return _.orderBy(list, ["radius"], ["asc"]);
    },
  },
];

export const sizeMenu = [
  {
    id: "xxs",
    title: "XXS / EU 32 / UK 4 / US 0",
  },
  {
    id: "xs",
    title: "XS / EU 34 / UK 6 / US 2",
  },
  {
    id: "s",
    title: "S / EU 36 / UK 8 / US 4",
  },
  {
    id: "m",
    title: "M / EU 38 / UK 10 / US 6",
  },
  {
    id: "l",
    title: "L / EU 40 / UK 12 / US 8",
  },
  {
    id: "xl",
    title: "XL / EU 42 / UK 14 / US 10",
  },
  {
    id: "xxl",
    title: "XXL / EU 44 / UK 16 / US 12",
  },
  {
    id: "random",
    title: "Ukuran bebas",
  },
  {
    id: "other",
    title: "Lainnya",
  },
];

export const conditionMenu = [
  {
    id: "new",
    title: "Barang Baru",
  },
  {
    id: "like-new",
    title: "Seperti Baru",
  },
  {
    id: "well",
    title: "Sangat Baik",
  },
  {
    id: "good",
    title: "Baik",
  },
  {
    id: "enough",
    title: "Cukup",
  },
];

export const dealMenu = [
  {
    id: "cod",
    title: "Bayar Ditempat",
  },
  {
    id: "delivery",
    title: "Pengiriman",
  },
];

export const REGEX_NUMBER = /^[0-9]/;

export const dataCard = [
  {
    id: "asd",
    radius: 1,
    condition: "good",
    size: "random",
    deal_option: ["cod"],
    category: ["electonics"],
    slug: "lenovo",
    title: "Lenovo Thinkbook 13s G2 ITL",
    img: "/images/product/product1.png",
    created_at: "2023-12-25",
    price: 10000000,
    favourite_count: 5,
    user: {
      img: "/images/avatar/avatar1.png",
      name: "Lapak Laptop",
    },
  },
  {
    id: "lls",
    radius: 4,
    condition: "enough",
    size: "other",
    deal_option: ["cod", "delivery"],
    category: ["men-fashion", "following", "luxury"],
    title: "Kameja Beverly Hills Polo Club Vintage ",
    img: "/images/product/product2.png",
    created_at: "2023-03-05",
    price: 180000,
    favourite_count: 5,
    user: {
      img: "/images/avatar/avatar2.png",
      name: "scndthrift",
    },
  },
  {
    id: "xxq",
    radius: 3,
    condition: "good",
    size: "other",
    deal_option: ["cod"],
    category: ["men-fashion", "following"],
    title: "Tissot PRX 80 Quartz Blue Murmer",
    img: "/images/product/product3.png",
    created_at: "2023-08-05",
    price: 3600000,
    favourite_count: 5,
    user: {
      img: "/images/avatar/avatar3.png",
      name: "raff03",
    },
  },
  {
    id: "wwd",
    radius: 10,
    condition: "like-new",
    size: "other",
    deal_option: ["delivery"],
    category: ["olshop"],
    title: "Tas Jansport Biru",
    img: "/images/product/product4.png",
    created_at: "2023-11-01",
    price: 250000,
    favourite_count: 5,
    user: {
      img: "/images/avatar/avatar4.png",
      name: "thrift.thrift",
    },
  },
  {
    id: "osc",
    radius: 11,
    condition: "new",
    size: "other",
    deal_option: ["delivery"],
    category: ["olshop"],
    title: "Dompet Kulit",
    img: "/images/product/product5.png",
    created_at: "2023-04-01",
    price: 250000,
    favourite_count: 0,
    user: {
      img: "/images/avatar/avatar5.png",
      name: "2nd Bandung",
    },
  },
  {
    id: "lls",
    radius: 21,
    condition: "like-new",
    size: "m",
    deal_option: ["cod"],
    category: ["olshop", "men-fashion", "following"],
    title: "Longchamp Bag Small Authentic",
    img: "/images/product/product6.png",
    created_at: "2023-04-31",
    price: 350000,
    favourite_count: 0,
    user: {
      img: "/images/avatar/avatar6.png",
      name: "Prelovedroom",
    },
  },
  {
    id: "asa",
    radius: 100,
    condition: "like-new",
    size: "l",
    deal_option: ["cod"],
    category: ["olshop", "women-fashion"],
    title: "White Lace V-Neck Top",
    img: "/images/product/product7.png",
    created_at: "2023-06-01",
    price: 50000,
    favourite_count: 0,
    user: {
      img: "/images/avatar/avatar7.png",
      name: "tinivers",
    },
  },
  {
    id: "llcx",
    radius: 321,
    condition: "like-new",
    size: "l",
    deal_option: ["cod"],
    category: ["olshop"],
    title: "Informa Lexi Set Meja Makan Lipat 2 Bangku",
    img: "/images/product/product8.png",
    created_at: "2023-11-21",
    price: 499000,
    favourite_count: 0,
    user: {
      img: "/images/avatar/avatar7.png",
      name: "satu kata saja",
    },
  },
  {
    id: "skd",
    radius: 99,
    condition: "good",
    size: "other",
    deal_option: ["cod", "delivery"],
    category: ["olshop"],
    title: "Fujifilm Kamera Instax Mini 90 Neo Classic Instant Camera",
    img: "/images/product/product9.png",
    created_at: "2023-01-11",
    price: 1500000,
    favourite_count: 0,
    user: {
      img: "/images/avatar/avatar7.png",
      name: "ALSUT JAKBAR",
    },
  },
  {
    id: "oer",
    radius: 68,
    condition: "enough",
    size: "other",
    deal_option: ["cod"],
    category: ["following"],
    title: "Meja Belajar Anak IKEA",
    img: "/images/product/product10.png",
    created_at: "2023-11-29",
    price: 1000000,
    favourite_count: 0,
    user: {
      img: "/images/avatar/avatar10.png",
      name: "satu kata saja",
    },
  },
  {
    id: "lsdck",
    radius: 8,
    condition: "well",
    size: "other",
    deal_option: ["cod"],
    category: ["following"],
    title: "Honda Crv 1.5 Turbo Prestige At 2019 Km 21 Ribu Ricord Antik Bergaransi",
    img: "/images/product/product11.png",
    created_at: "2023-05-22",
    price: 435000000,
    favourite_count: 1,
    user: {
      img: "/images/avatar/avatar10.png",
      name: "Itok Mobil",
    },
  },
  {
    id: "yyye",
    radius: 6,
    condition: "like-new",
    size: "other",
    deal_option: ["cod"],
    category: ["following"],
    title: "Meja Belajar Anak IKEA",
    img: "/images/product/product12.png",
    created_at: "2023-06-12",
    price: 84000,
    favourite_count: 0,
    user: {
      img: "/images/avatar/avatar12.png",
      name: "evan selma",
    },
  },
];

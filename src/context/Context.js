import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {

  const products = [{
    "id": 1,
    "name": "iPhone 13",
    "price": 1099.95,
    "description": "Our most advanced dual‐camera system ever. An even brighter Oled display. A lightning‐fast chip that leaves the competition behind. A huge leap in battery life.",
    "category": "mobile",
    "image": "https://images.ctfassets.net/8utyj17y1gom/ZR52UQkCuuxFOKxCR5k5T/0082e2a071c64e7ebee2a8a761319929/iPhone13-midnight-front.png",
    "ratings": 4,
    "inStock": 20,
    "fastDelivery": true,
  }, {
    "id": 2,
    "name": "Macbook Air M1 Chip",
    "price": 1122.99,
    "description": "MacBook Pro More power. More performance. More pro. 4-, 6-, and now 8-core Intel processors. Up to 32GB of memory for running multiple pro apps. Stunning Retina display with True Tone technology. Touch Bar for working more productively. Performance With great power comes great capability. MacBook Pro elevates the notebook to a whole new level of performance and portability.",
    "category": "laptop",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJMWENwFu69LM7-HcIqOAGvanq2qmsmK2-puN5IHiTZLs9RdX1kdZ9it33n1ngvaV4kNJZMVHMGrc1H2eKnUYjDZJsUzfx",
    "ratings": 5,
    "inStock": 20,
    "fastDelivery": false,
  }, {
    "id": 3,
    "name": "Google Pixel 6",
    "price": 355.99,
    "description": "Meet Pixel 6, the Google 5G phone that's completely reimagined, inside and out. 1 Powered by the custom-built Google Tensor processor, it's fast, smart and secure. And it adapts to you.",
    "category": "mobile",
    "image": "https://images.ctfassets.net/t00ajdlq0g9p/7CmbnHTywVZqE4qW6TcaZh/88c7fc4c409aab18b186fd411ed4a52d/Pixel6-Pro-stormyBlack-front-en.png",
    "ratings": 5,
    "inStock": 20,
    "fastDelivery": false,
  }, {
    "id": 4,
    "name": "Apple MacBook Pro (13', M1, 2020)",
    "price": 1159.99,
    "description": "The Apple M1 chip gives the 13-inch MacBook Pro speed and power beyond belief. With up to 2.8x CPU performance. Up to 5x the graphics speed. The advanced Neural Engine for up to 11x faster machine learning. And up to 20 hours of battery life.",
    "category": "laptop",
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ3kg8-s5EjrgCx5QBqBgQbChcmyYHaxeWLXzBVjpZH1xnIsdxlabryzQmggW_-1Ro44-CwftII1bc13ZBih6SQov4MZs9i6w",
    "ratings": 5,
    "inStock": 20,
    "fastDelivery": false,
  }, {
    "id": 5,
    "name": "ASUS ROG Zephyrus G14 GA401",
    "price": 1699.99,
    "description": "Dynamic and ready to travel, the ROG Zephyrus G14 is a powerful gaming laptop. Outclass the competition with a fast CPU and potent GPU that speed through everyday multitasking and gaming. Quad speakers pump out incredible Dolby Atmos sound for immersive movies, games, music, and more. Live life at Zephyrus speed with a light and portable gaming laptop, and be active anywhere.",
    "category": "laptop",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTndi5w8MpY1RAVmusdYWUx3jJjIABDUJawYkUgy3ItrcU5rmrw-3J3CnqvzU1jICc2VKm7IguybbeCIzZQ6dc0fu8ueb5RPQ",
    "ratings": 3,
    "inStock": 20,
    "fastDelivery": false,
  }, {
    "id": 6,
    "name": "Lenovo Legion 5 (15') HD Display",
    "price": 2049.99,
    "description": "Offering a plethora of performance features for any gamer in a clean, minimalist design, the Legion 5 pairs the 10th Generation Intel Core i7 processor with NVIDIA GeForce GTX graphics, 2933MHz DDR4 memory and M.2 NVMe PCIe SSD storage, all thermally tuned via Legion Coldfront 2.0. Enjoy maximum performance via Dual Burn Support, which pushes the CPU and GPU together for improved frame rates.",
    "category": "mobile",
    "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQqJ55wgfUXSPR4qayOHezHdpjNCSbGZpcLyV-rGrHkLj6D-b97L160Y6u86jw8FApWG0p4818hTGm3KzyuPkUE5hWNnyIrNA",
    "ratings": 2,
    "inStock": 20,
    "fastDelivery": false,
  }, {
    "id": 7,
    "name": "Dell XPS 13 9360",
    "price": 1299.99,
    "description": "Dell XPS 13 9360 13.3 Touchscreen LCD Notebook - Intel Core i7 (7th Gen) i7-7560U Dual-core (2 Core) 2.40 GHz - 8 GB LPDDR3 - 256 GB (XPS9360-7758SLV-PUS)",
    "category": "laptop",
    "image": "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/xps_13_9305/media-gallery/270-xps-13-italia-9305-hi-res-imagery-notebook-xps-13-9305-4000x4000.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402",
    "ratings": 5,
    "inStock": 20,
    "fastDelivery": false,
  }, {
    "id": 8,
    "name": "Surface Laptop Go",
    "price": 10.99,
    "description": "Surface Laptop Go - Platinum, Intel Core i5, 4GB RAM, 64GB eMMC, English Keyboard",
    "category": "laptop",
    "image": "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4Av4g?ver=be22&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    "ratings": 1,
    "inStock": 20,
    "fastDelivery": false,
  }, {
    "id": 9,
    "name": "WD 2TB Hard Drive",
    "price": 64.99,
    "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    "category": "laptop",
    "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "ratings": 2,
    "inStock": 20,
    "fastDelivery": false,
  }, {
    "id": 10,
    "name": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    "price": 109.99,
    "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    "category": "mobile",
    "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "ratings": 5,
    "inStock": 20,
    "fastDelivery": false,
  }, {
    "id": 11,
    "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    "price": 109.99,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "mobile",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "ratings": 4,
    "inStock": 20,
    "fastDelivery": true,
  }, {
    "id": 12,
    "name": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    "price": 114.99,
    "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    "category": "laptop",
    "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "ratings": 5,
    "inStock": 20,
    "fastDelivery": false,
  }, {
    "id": 13,
    "name": "Acer SB220Q bi 21.5",
    "price": 599.99,
    "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    "category": "laptop",
    "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "ratings": 4,
    "inStock": 20,
    "fastDelivery": true,
  }, {
    "id": 14,
    "name": "Samsung 49-Inch Monitor",
    "price": 999.99,
    "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    "category": "mobile",
    "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "rating": {
      "rate": 2.2,
      "count": 140
    }
  }]

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byLaptop: "",
    byMobile: "",
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;

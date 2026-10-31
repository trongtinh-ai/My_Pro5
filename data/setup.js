/* GAMING SETUP & GEARS: bảng thông số, mỗi dòng { label, value } */
window.SETUP = [
  { label: "CPU", value: "[CPU]" }, { label: "GPU", value: "[GPU]" }, { label: "RAM", value: "[RAM]" },
  { label: "Monitor", value: "[MONITOR]" }, { label: "Keyboard", value: "[KEYBOARD]" }, { label: "Mouse", value: "[MOUSE]" },
  { label: "Headset", value: "[HEADSET]" }, { label: "Software", value: "[SOFTWARE]" }
];

/* DANH SÁCH GAME: mỗi item là 1 game, hiển thị thành 1 card riêng.
   - title   : tên game (bắt buộc)
   - tag     : nhãn trạng thái, vd "Active", "Casual", "Retired" — để "" nếu không cần
   - desc    : mô tả ngắn
   - cover   : đường dẫn ảnh bìa (./assets/gaming/<tên-game>/cover.jpg) — để "" nếu chưa có
   - shots   : mảng tối đa 3 ảnh chụp màn hình { title, src, hover }
               src rỗng thì bỏ qua tile đó; hover để trống nếu không có ảnh động */
window.GAMES = [
  {
    title: "Delta Force",
    tag: "Active",
    desc: "711丶Godwyn ID:81513257847031145822\n Chuột là Bất Tử",
    meta: ["FPS", "PC", "TACTICAL"],
    cover: "./assets/gaming/delta-force/cover.jpg",
    icon: "./assets/gaming/delta-force/logo.jpg",
    shots: [
      { title: "Pro5", src: "./assets/gaming/delta-force/short/1.jpg", hover: "" },
      { title: "Yah hú", src: "./assets/gaming/delta-force/short/4.jpg", hover: "" },
      { title: "Screenshot 3", src: "", hover: "" }
    ]
  },
  {
    title: "League Of Legends",
    tag: "Active",
    desc: "Giáo Hoàng ID:Giáo Hoàng#good \n FAKERRRRRRRRRRRRRR",
    meta: ["MOBA", "PC", "TEAM-BASED"],
    cover: "./assets/gaming/lmht/cover.jpg",
    icon: "./assets/gaming/lmht/logo.jpg",
    shots: [
      { title: "Screenshot 1", src: "", hover: "" },
      { title: "Screenshot 2", src: "", hover: "" },
      { title: "Screenshot 3", src: "", hover: "" }
    ]
  },
  {
    title: "Minecraft",
    tag: "Active",
    desc: "Mấy con gà biết gì",
    meta: ["SANDBOX", "SURVIVAL", "OPEN WORLD"],
    cover: "./assets/gaming/minecraft/cover.jpg",
    icon: "./assets/gaming/minecraft/logo.jpg",
    shots: [
      { title: "Screenshot 1", src: "", hover: "" },
      { title: "Screenshot 2", src: "", hover: "" },
      { title: "Screenshot 3", src: "", hover: "" }
    ]
  }
];

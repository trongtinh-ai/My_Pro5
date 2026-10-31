/* ẢNH + BỐ CỤC + MÀU SẮC của cả trang */
window.SITE = {
  images: {
    bg: "./assets/images/bg.jpg",          // ảnh nền
    bgVideo: "./assets/video/bg.mp4",       // nền video động (mp4 H.264). Để trống "" = chỉ dùng ảnh nền
    powerVideos: {                          // video nền khi Super Saiyan: base + ssj-1 giữ video gốc; bỏ dòng nào = cấp đó giữ video hiện tại
      2: "",          // ssj-2
      3: "./assets/video/god.mp4"           // ssj-3 (God)
    },
    avatar: "./assets/images/avatar.png",
    avatarGod: "./assets/images/avtgod.jpg",   // avatar tròn góc dưới phải khi lên ssj-3 (God)
    quoteArt: "./assets/images/quote.jpg"  // ảnh trong thẻ quote
  },
  layout: {
    cardSide: "right",              // thẻ profile nằm "right" hoặc "left"
    bgPosition: "center center",    // vị trí ảnh nền, vd "70% center"
    hide: ["projects", "skills"],   // ẩn mục khỏi trang + thanh nav (xóa tên khỏi danh sách để hiện lại)
    projectInfo: false,             // false = ẩn thông tin project (vẫn giữ nút/chức năng), true = hiện
    show: { header: true, hero: true, projects: false, quickLinks: false, quoteCard: false }   // ẩn/hiện từng khối
  },
  theme: {
    "--accent": "#38bdf8",          // màu chủ đạo (Electric Cyan)
    "--accent2": "#818cf8",         // màu phụ (Indigo Neon)
    "--card-w": "380px",            // chiều rộng thẻ profile
    "--hero-h": "660px",            // chiều cao khu hero
    "--radius": "8px"               // độ bo góc hiện đại
  }
};

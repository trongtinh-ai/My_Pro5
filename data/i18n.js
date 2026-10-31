/* SONG NGỮ EN / VI: chữ giao diện cố định + bản VI của About.
   Hero, bubble, quote, nav, roles, location nằm trong PROFILE.i18n (data/profile.js). */
window.I18N = {
  en: {
    profile: "PROFILE", avTitle: "Click for Super Saiyan!", location: "Location", localTime: "Local time",
    viewProjects: "View Projects", downloadCV: "Download CV",
    aboutTitle: "About", journey: "Education & Journey", interests: "Interests",
    getInTouch: "Get In Touch",
    contactSub: "Want to chat about games, anime, or anything else? Drop me a message.",
    openToChat: "Open to chat", directEmail: "DIRECT EMAIL", copyEmail: "Copy Email", sendMail: "Send Mail",
    copyHandle: "Copy handle", copyDiscord: "Copy Discord handle",
    gaming: "Gaming", mySetup: "My Setup", allGames: "All Games", filterGames: "Filter games",
    viewGame: "View", ingameName: "In-game name", playerId: "Player ID", copyId: "Copy ID",
    gallery: "Gallery", galleryEmptyTitle: "Your gallery is waiting",
    galleryEmptyText: "The archive is quiet for now. Your next favorite moment belongs here.",
    noArtwork: "No artwork yet", noArtworkSub: "Your screenshots and favorite moments will appear here.",
    personalArchive: "Personal Archive", items: "items",
    langLabel: "Language"
  },
  vi: {
    profile: "HỒ SƠ", avTitle: "Bấm để biến hình Super Saiyan!", location: "Vị trí", localTime: "Giờ địa phương",
    viewProjects: "Xem dự án", downloadCV: "Tải CV",
    aboutTitle: "Giới thiệu", journey: "Học vấn & Hành trình", interests: "Sở thích",
    getInTouch: "Liên hệ",
    contactSub: "Muốn trò chuyện về game, anime hay bất cứ điều gì? Cứ nhắn cho mình nhé.",
    openToChat: "Sẵn sàng trò chuyện", directEmail: "EMAIL TRỰC TIẾP", copyEmail: "Sao chép Email", sendMail: "Gửi Mail",
    copyHandle: "Sao chép tên", copyDiscord: "Sao chép tên Discord",
    gaming: "Game", mySetup: "Cấu hình của mình", allGames: "Tất cả game", filterGames: "Lọc game",
    viewGame: "Xem", ingameName: "Tên trong game", playerId: "ID người chơi", copyId: "Sao chép ID",
    gallery: "Thư viện", galleryEmptyTitle: "Thư viện đang chờ bạn",
    galleryEmptyText: "Kho lưu trữ hiện đang trống. Khoảnh khắc yêu thích tiếp theo sẽ ở đây.",
    noArtwork: "Chưa có ảnh nào", noArtworkSub: "Ảnh chụp màn hình và khoảnh khắc yêu thích sẽ xuất hiện ở đây.",
    personalArchive: "Kho cá nhân", items: "mục",
    langLabel: "Ngôn ngữ"
  }
};

/* Bản VI của các hàng liên kết trong thẻ profile (khóa theo action trong data/links.js).
   Không có khóa thì main.js dùng title/sub gốc ở links.js. */
window.I18N.vi.links = {
  "scroll:projects": { title: "DỰ ÁN AI", sub: "ML · CV · Deep Learning" },
  "scroll:about": { title: "GIỚI THIỆU", sub: "Sinh viên · Hồ sơ nhân vật" },
  "scroll:gaming": { title: "GAME", sub: "Thể loại · Cấu hình" },
  "scroll:gallery": { title: "THƯ VIỆN", sub: "Ảnh · Tác phẩm" },
  "scroll:skills": { title: "KỸ NĂNG & CÔNG NGHỆ", sub: "Python · PyTorch · Web" },
  "scroll:contact": { title: "LIÊN HỆ", sub: "Email · Discord · GitHub" }
};

/* Bản VI của About (main.js dùng T.about nếu có, không thì dùng data/about.js) */
window.I18N.vi.about = {
  bio: [
    "Chào bạn, mình là sinh viên năm ba tại Đại học FPT. Mình thích đắm chìm trong một câu chuyện hay, dù là trên trang sách, trên màn hình hay trong một tựa game xịn.",
    "Hiện tại mục tiêu của mình rất đơn giản: học chăm chỉ và tốt nghiệp. Khi cần nghỉ giữa các giờ học, bạn thường sẽ thấy mình team up trong Delta Force để làm mới đầu óc trước buổi học tiếp theo."
  ],
  info: [
    { k: "TRẠNG THÁI", v: "Sinh viên" },
    { k: "TRƯỜNG", v: "Đại học FPT" },
    { k: "ĐỊA ĐIỂM", v: "Việt Nam" },
    { k: "TỐT NGHIỆP", v: "Sinh viên năm ba" }
  ],
  hobbies: ["Chơi game", "Những câu chuyện hay", "Anime"],
  quests: [
    { t: "Đại học FPT", s: "Chuyên ngành Trí tuệ nhân tạo" },
    { t: "Trọng tâm hiện tại", s: "Học chăm chỉ & tốt nghiệp" }
  ]
};

/* THÔNG TIN CÁ NHÂN: tên, handle, bio, câu quote, Discord, múi giờ */
window.PROFILE = {
  brand: { title: "MY PROFILE", sub: "AI · DEVELOPER · GAMER" },   // logo góc trên trái
  name: "Tran Trong Tinh",
  handle: "@_trongtinh2802",
  role: "SUPER SAIYAN",
  discordId: "1442052725214023720",               // dãy số ID Discord để hiện trạng thái thật
  location: "VIETNAM",
  timeZone: "Asia/Ho_Chi_Minh",
  tzLabel: "GMT+7",

  contactInfo: {
    email: "trongtinh280206@gmail.com",
    phone: "+84 90 123 4567",
    discord: "itrongtinhh",
    school: "FPT University",
    location: "Vietnam"
  },

  // Cấu hình song ngữ VI / EN
  i18n: {
    vi: {
      hello: "HELLO, I'M",
      location: "VIỆT NAM",
      roles: ["Sinh viên", "Game thủ"],
      heroQuote: ["\u201cKhông phải là người giỏi nhất,", "nhưng luôn cố gắng trở thành phiên bản tốt hơn mỗi ngày.\u201d"],
      bubble: ["\u201cTrở thành phiên bản tốt hơn,", "từng ngày một.\u201d"],
      quote: { text: "\u201cTừng bước nhỏ mỗi ngày sẽ tạo nên kết quả lớn.\u201d", sign: "Tinh" },
      godMessage: [
        "Hello! Chào cậu, tớ là Tình. Rất vui được gặp cậu. ^^",
        "Dù là thân hay lạ quen biết hoặc chưa quen nhau, nhưng đến được tới đây có thể cậu tò mò về tớ?",
        "Cảm ơn cậu đã nán lại và bấm trúng góc ẩn này. Chúc cậu một ngày vui vẻ và tràn đầy năng lượng nhé!",
        "Đây là không gian ẩn mình vẫn đang thiết kế, nếu cậu có ý tưởng gì thì cho tớ biết nhé!",
        "Muốn quay về thì bấm vào avatar ở góc dưới bên phải nha."
      ],
      buttons: [
        { label: "View Projects", icon: "code", action: "scroll:projects", primary: true },
        { label: "Download CV", icon: "download", action: "link:./assets/docs/cv.pdf" }
      ],
      nav: {
        Home: "Trang chủ",
        About: "Giới thiệu",
        Gaming: "Game",
        Gallery: "Thư viện",
        Projects: "Dự án",
        Skills: "Kỹ năng",
        Contact: "Liên hệ"
      }
    },
    en: {
      hello: "HELLO, I'M",
      location: "VIETNAM",
      roles: ["Student", "Gamer"],
      heroQuote: ["\u201cNot the smartest in the room,", "but striving to become a better version every day.\u201d"],
      bubble: ["\u201cBetter version of myself,", "one day at a time.\u201d"],
      godMessage: [
        "Hello! I'm Tinh. So glad to meet you. ^^",
        "Whether we already know each other or not, you made it all the way here. Maybe you're curious about me?",
        "Thanks for sticking around and finding this hidden corner. Have a happy day, full of energy!",
        "This hidden space is still under construction. If you have any ideas, let me know!",
        "To go back, click the avatar in the bottom-right corner."
      ],
      quote: { text: "\u201cSmall steps every day lead to big results.\u201d", sign: "Tinh" },
      buttons: [
        { label: "View Projects", icon: "code", action: "scroll:projects", primary: true },
        { label: "Download CV", icon: "download", action: "link:./assets/docs/cv.pdf" }
      ],
      nav: {
        Home: "Home",
        About: "About",
        Gaming: "Gaming",
        Gallery: "Gallery",
        Projects: "Projects",
        Skills: "Skills",
        Contact: "Contact"
      }
    }
  },

  hello: "HELLO, I'M",
  heroSub: "AI ENGINEER IN PROGRESS",
  roles: ["Student", "Gamer"],
  heroQuote: ["\u201cNot the smartest in the room,", "but striving to become a better version every day.\u201d"],
  buttons: [   // 2 nút ở khu hero. action: scroll:<id> | modal:<gears|gallery|contact> | link:<url>
    { label: "View Projects", icon: "code", action: "scroll:projects", primary: true },
    { label: "Download CV", icon: "download", action: "link:./assets/docs/cv.pdf" }
  ],

  bubble: ["\u201cBetter version of myself,", "one day at a time.\u201d"],   // khung quote trong thẻ profile
  bio: [],
  quote: { text: "\u201cSmall steps every day lead to big results.\u201d", sign: "Tinh" }   // thẻ quote dưới cùng
};

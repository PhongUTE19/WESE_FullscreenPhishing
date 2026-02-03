const videos = [
    {
        id: 1,
        title: "Học JavaScript cơ bản trong 30 phút",
        channel: "Code Cùng Nova",
        views: "1.2M views",
        time: "2 hours ago",
        duration: "12:34",
        avatar: "",
        thumbnail: ""
    },
    {
        id: 2,
        title: "Flexbox & Grid – Layout chuẩn YouTube",
        channel: "Frontend Việt Nam",
        views: "845K views",
        time: "5 hours ago",
        duration: "18:02"
    },
    {
        id: 3,
        title: "Clone YouTube UI bằng HTML & CSS",
        channel: "Nova Dev",
        views: "2.3M views",
        time: "1 day ago",
        duration: "22:15"
    },
    {
        id: 4,
        title: "JavaScript DOM Manipulation Explained",
        channel: "JS Mastery",
        views: "670K views",
        time: "1 day ago",
        duration: "15:48"
    },
    {
        id: 5,
        title: "Tại sao Flexbox quan trọng với Frontend?",
        channel: "Web Đơn Giản",
        views: "410K views",
        time: "2 days ago",
        duration: "9:27"
    },
    {
        id: 6,
        title: "Xây dựng Grid Video giống YouTube",
        channel: "Frontend Tips",
        views: "980K views",
        time: "2 days ago",
        duration: "14:10"
    },
    {
        id: 7,
        title: "CSS Hover Effects mượt mà",
        channel: "UI Motion",
        views: "1.5M views",
        time: "3 days ago",
        duration: "11:05"
    },
    {
        id: 8,
        title: "Responsive Web Design từ A đến Z",
        channel: "Web Pro",
        views: "3.1M views",
        time: "3 days ago",
        duration: "25:40"
    },
    {
        id: 9,
        title: "JavaScript Template & CloneNode",
        channel: "Code Academy VN",
        views: "520K views",
        time: "4 days ago",
        duration: "13:56"
    },
    {
        id: 10,
        title: "Tư duy Frontend Engineer",
        channel: "Nova Talks",
        views: "760K views",
        time: "4 days ago",
        duration: "19:44"
    },
    {
        id: 11,
        title: "CSS Animation Performance Tips",
        channel: "Motion Lab",
        views: "330K views",
        time: "5 days ago",
        duration: "10:21"
    },
    {
        id: 12,
        title: "Clone YouTube mà không dùng Framework",
        channel: "Pure Web",
        views: "1.8M views",
        time: "5 days ago",
        duration: "27:09"
    },
    {
        id: 13,
        title: "DocumentFragment là gì?",
        channel: "JS Việt",
        views: "290K views",
        time: "6 days ago",
        duration: "8:43"
    },
    {
        id: 14,
        title: "Cách tổ chức project Frontend chuẩn",
        channel: "Dev Roadmap",
        views: "640K views",
        time: "6 days ago",
        duration: "16:55"
    },
    {
        id: 15,
        title: "CSS Grid vs Flexbox – Khi nào dùng?",
        channel: "Layout School",
        views: "2.7M views",
        time: "1 week ago",
        duration: "21:33"
    },
    {
        id: 16,
        title: "Hover Card giống YouTube",
        channel: "UI Clone",
        views: "880K views",
        time: "1 week ago",
        duration: "12:18"
    },
    {
        id: 17,
        title: "JavaScript cho người mới bắt đầu",
        channel: "Learn JS",
        views: "5.4M views",
        time: "1 week ago",
        duration: "30:00"
    },
    {
        id: 18,
        title: "Clean Code trong Frontend",
        channel: "Code Sạch",
        views: "410K views",
        time: "1 week ago",
        duration: "14:59"
    },
    {
        id: 19,
        title: "YouTube UI – Phân tích chi tiết",
        channel: "UX Breakdown",
        views: "1.1M views",
        time: "2 weeks ago",
        duration: "26:12"
    },
    {
        id: 20,
        title: "Tối ưu hiệu năng khi render list",
        channel: "Performance Lab",
        views: "350K views",
        time: "2 weeks ago",
        duration: "17:06"
    },
    {
        id: 21,
        title: "Infinite Scroll hoạt động thế nào?",
        channel: "Web Internals",
        views: "900K views",
        time: "2 weeks ago",
        duration: "20:41"
    },
    {
        id: 22,
        title: "Frontend không dùng React có ổn không?",
        channel: "Dev Debate",
        views: "1.6M views",
        time: "3 weeks ago",
        duration: "23:58"
    },
    {
        id: 23,
        title: "CSS Tips giúp code đẹp hơn",
        channel: "Design Better",
        views: "480K views",
        time: "3 weeks ago",
        duration: "11:49"
    },
    {
        id: 24,
        title: "Lộ trình Frontend Developer 2025",
        channel: "Career Path",
        views: "3.9M views",
        time: "1 month ago",
        duration: "35:20"
    }
];

const grid = document.getElementById('grid');
const tpl = document.getElementById('video-card');

// Render
const frag = document.createDocumentFragment();


videos.forEach((v, i) => {
    const node = tpl.content.cloneNode(true);
    node.querySelector('.thumb-img').src = `https://picsum.photos/seed/${i}/320/180`;
    node.querySelector('.avatar').src =
        `https://picsum.photos/seed/avatar-${i}/36/36`;
    node.querySelector('.title').textContent = v.title;
    node.querySelector('.channel').textContent = v.channel;
    node.querySelector('.stats').textContent = `${v.views} • ${v.time}`;
    node.querySelector('.duration').textContent = v.duration;
    frag.appendChild(node);
});


grid.appendChild(frag);
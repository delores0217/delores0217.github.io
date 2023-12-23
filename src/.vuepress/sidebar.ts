import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "年记",
      icon: "calendar",
      prefix: "year-to-end/",
      link: "year-to-end/",
      children: "structure",
    },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // "slides",
  ],
});

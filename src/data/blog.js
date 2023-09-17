import logo from "../assets/logo";
// import devLogo from "../assets/dev_logo";


const blogData = {
  name: "Underreacted",
  image: logo,
  about: "A blog about learning React",
  posts: [
    {
      id: 1,
      title: "Manipulating DOM events",
      date: "September 3, 2023",
      url: 'https://dev.to/bookmdan/manipulating-the-dom-events-3dno',
      preview: "What is DOM manipulation?",
      minutes: 5,
    },
    {
      id: 2,
      title: "React Data Flow",
      date: "December 11, 2020",
      preview: "Passing props is never passé",
      minutes: 15,
    },
    {
      id: 3,
      title: "Function vs Class Components",
      preview: "React, meet OOJS.",
      minutes: 47,
    },
  ],
};

export default blogData;

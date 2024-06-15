import img1 from "../assets/images/web-dev.png";
import img2 from "../assets/images/mobile-app.png";
import img3 from "../assets/images/searchengine.png";
import img4 from "../assets/images/video.png";
import img5 from "../assets/images/logo-design.png";

import WebDesign from "../assets/images/web-design.png";
import Mobile from "../assets/images/mobile.png";
import Maintenance from "../assets/images/maintainance.png";
import CMS from "../assets/images/cms.png";
import Solutions from "../assets/images/solutions.png";

import Android from "../assets/images/android.png";
import IOS from "../assets/images/app-settings.png";
import AppSetting from "../assets/images/app-store.png";
import UIUX from "../assets/images/programming.png";

const ServicesData = [
  {
    path: img1,
    title: "Web Development",
    desc: "Transforming your digital vision into reality with expert web development services. Empower your online presence with cutting-edge design and functionality.",
    route: "/webPlans",
  },
  {
    path: img2,
    title: "Mobile App Development",
    desc: "Crafting seamless and intuitive mobile experiences tailored to your unique vision. From concept to launch, trust our team to bring your app idea to life with precision and innovation.",
    route: "/appPlans",
  },
  {
    path: img3,
    title: "Search Engine Optimization",
    desc: "Maximize your online visibility and drive organic traffic to your website with our strategic SEO solutions. Dominate search engine rankings and connect with your target audience effectively.",
    route: "/seo",
  },
  {
    path: img4,
    title: "Digital Marketing",
    desc: "Amplify your brand's reach and engagement through strategic digital marketing campaigns. From social media management to content creation, let us elevate your online presence and drive measurable results",
    route: "/digitalMarketing",
  },
  {
    path: img5,
    title: "Logo Design",
    desc: "Unlock the power of visual identity with our bespoke logo designs. Let us bring your brand's story to life through creativity and precision. Elevate your online presence with our professional logo design services.",
    route: "/logoPlans",
  },
];

export const Webdata = [
  {
    path: WebDesign,
    title: "Custom Website Design",
    desc: "Tailored designs that reflect your brand identity and engage your target audience",
  },
  {
    path: Mobile,
    title: "Responsive Web Design",
    desc: " Ensuring your website looks great and functions flawlessly on all devices",
  },
  {
    path: Solutions,
    title: "E-commerce Solutions",
    desc: "Building secure, scalable online stores to boost your sales and enhance customer experience",
  },
  {
    path: CMS,
    title: "Content Management Systems (CMS)",
    desc: "Empowering you to manage and update your website content with ease",
  },
  {
    path: Maintenance,
    title: "Website Maintenance & Support",
    desc: "Providing ongoing support to keep your website up-to-date and running smoothly",
  },
];

export const AppData = [
  {
    path: IOS,
    title: "iOS App Development",
    desc: "Crafting sleek and functional apps for Apple's ecosystem, ensuring optimal performance on all iOS devices.",
  },
  {
    path: Android,
    title: "Android App Development",
    desc: "Building dynamic and user-friendly apps for Android devices, tailored to your business objectives.",
  },
  {
    path: AppSetting,
    title: "Cross-Platform App Development",
    desc: "Creating versatile apps that provide a consistent experience across both iOS and Android platforms.",
  },
  {
    path: UIUX,
    title: "UI/UX Design",
    desc: "Designing intuitive and engaging interfaces that enhance user satisfaction and retention.",
  },
  {
    path: Maintenance,
    title: "App Maintenance & Support",
    desc: "Offering continuous support and updates to keep your app running smoothly and efficiently.",
  },
];

export default ServicesData;

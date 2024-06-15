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

export default ServicesData;


export const Webdata = [
  {
    path: WebDesign,
    title: "Custom Website Design",
    desc: "Tailored designs that reflect your brand identity and engage your target audience. We focus on usability, accessibility, and responsiveness to ensure your website performs seamlessly on all devices. Contact us today for a consultation and let's create a standout web presence together!",
  },
  {
    path: Mobile,
    title: "Responsive Web Design",
    desc: "Ensuring your website looks great and functions flawlessly on all devices. We create flexible designs that adapt to your users' needs, enhancing user satisfaction and engagement. Reach out today to discuss how we can optimize your web experience!",
  },
  {
    path: Solutions,
    title: "E-commerce Solutions",
    desc: "Building secure, scalable online stores to boost sales and enhance customer experience. From seamless payment integration to advanced analytics, we provide comprehensive e-commerce solutions tailored to your business goals. Partner with us to achieve online success!",
  },
  {
    path: CMS,
    title: "Content Management Systems (CMS)",
    desc: "Empowering you to manage and update website content with ease. Our CMS solutions streamline operations, from content creation to publishing, ensuring efficiency and productivity. Get in touch for a personalized demo and discover how our CMS can benefit your business!",
  },
  {
    path: Maintenance,
    title: "Website Maintenance & Support",
    desc: "Providing ongoing support to keep your website running smoothly. We offer proactive maintenance services, including regular updates and security patches, to ensure your site remains secure and optimized. Focus on your core business while we take care of your web maintenance needs.",
  },
];

export const AppData = [
  {
    path: IOS,
    title: "iOS App Development",
    desc: "Crafting sleek and functional apps for Apple's ecosystem. Our expertise in intuitive UI/UX design and native iOS features ensures your app stands out in the App Store. Let's collaborate on delivering an exceptional app experience for your users!",
  },
  {
    path: Android,
    title: "Android App Development",
    desc: "Building dynamic apps for Android devices that drive user engagement. Whether it's for smartphones, tablets, or wearables, our team delivers robust solutions tailored to your business objectives. Elevate your mobile presence with our Android app development services!",
  },
  {
    path: AppSetting,
    title: "Cross-Platform App Development",
    desc: "Creating versatile apps that provide a consistent user experience across iOS and Android platforms. Using cutting-edge frameworks like React Native and Flutter, we ensure high performance and efficiency.",
  },
  {
    path: UIUX,
    title: "UI/UX Design",
    desc: "Designing intuitive interfaces that enhance user satisfaction and retention. Through meticulous user research and iterative design processes, we create captivating user experiences. Partner with us to design an interface that resonates with your audience!",
  },
  {
    path: Maintenance,
    title: "App Maintenance & Support",
    desc: "Offering continuous support to keep your app running efficiently. Our services include bug fixing, performance monitoring, and feature enhancements to ensure your app remains competitive. Stay ahead with our reliable app maintenance and support!",
  },
];

// export { ServicesData, Webdata, AppData };

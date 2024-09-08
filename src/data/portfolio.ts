import AndroidIcon from "@/components/common/AndroidIcon"
import CSSIcon from "@/components/common/CSSIcon"
import GithubIcon from "@/components/common/GithubIcon"
import HtmlIcon from "@/components/common/HtmlIcon"
import JavascriptIcon from "@/components/common/JavascriptIcon"
import LinkedInIcon from "@/components/common/LinkedInIcon"
import MongoIcon from "@/components/common/MongoIcon"
import MySQLIcon from "@/components/common/MySQLIcon"
import  NextIcon  from "@/components/common/NextIcon"
import NodeJsIcon from "@/components/common/NodeJsIcon"
import ReactIcon from "@/components/common/ReactIcon"
import SpringBootIcon from "@/components/common/SpringBootIcon"
import TSIcon from "@/components/common/TSIcon"
import ReduxIcon from "@/components/common/ReduxIcon"
import StripeIcon from "@/components/common/StripeIcon"
import WebSocket from "@/components/common/WebSocket"
import JQueryIcon from "@/components/common/JQueryIcon"
import JspIcon from "@/components/common/JspIcon"
import JavaIcon from "@/components/common/JavaIcon"
import FireBaseIcon from "@/components/common/FireBase"
import { link } from "fs"

export const navBarLink = [
    {
        "title": "About",
        "href": "#about"
    },
    {
        "title": "Projects",
        "href": "#projects"
    },
    {
        "title": "Skills",
        "href": "#skills"
    },
    {
        "title": "Contact",
        "href": "#contact"
    }
]
export const attachment ={
    "title": "Resume",
    "href":"/resume-path"
}

export const ABOUT_SECTION = {
    displayText:"Transforming code into seamless user experiences.",
    name:"Thang",
    title:"WEB DEVELOPER",
    description:"I specialize in end-to-end web and mobile development, combining front-end finesse with back-end prowess to build dynamic and responsive digital solutions.",
    greeting:'👋'
}
export const projects = [
    {
        title:"Food Delivery",
        description:"An online food ordering and delivery platform allowing users to browse category, select meals, and make secure payments using Stripe. The app integrates real-time order tracking and a responsive interface for a seamless user experience.",
        github_link:"https://github.com/passingByte/food-delivery",
        tech_stack:[ReactIcon,NodeJsIcon,HtmlIcon,CSSIcon,MongoIcon,ReduxIcon,StripeIcon],
        image:'/images/Project1.png'
    },
    {
        title:"Chat app real time",
        description:" A real-time messaging application built with WebSocket for instant communication. Users can create or join chat rooms, share text and media, and enjoy a smooth chat experience with Redux state management.",
        github_link:"https://github.com/Thang-123/app-chat",
        tech_stack:[ReactIcon,HtmlIcon,CSSIcon,NodeJsIcon,ReduxIcon,WebSocket,FireBaseIcon],
        image:'/images/Project2.png'
    },
    {
        title:"Patin shoe shop",
        description:"An e-commerce platform for selling shoes, implemented using JSP, Servlet and MySQL. It includes features like product browsing, cart management, and secure transactions with a dynamic and user-friendly interface.",
        github_link:"https://github.com/NguyenNgocKhanhDuy/patin-shop",
        tech_stack:[JavaIcon,JspIcon,MySQLIcon,HtmlIcon,CSSIcon,JQueryIcon],
        image:'/images/Project3.png'
    },
    
]

export const skills = [
    ReactIcon,TSIcon,HtmlIcon,CSSIcon,JavascriptIcon,JavaIcon,JspIcon,JQueryIcon,MongoIcon,FireBaseIcon,NodeJsIcon, MySQLIcon,NextIcon 
]

export const contact = {
    "title":"Contact",
    "description":"Need software solutions that streamline your business? Let's collaborate on innovative tech projects.",
    links:[
        {
            icon:GithubIcon,
            link:'https://github.com/passingByte/'
        },
        {
            icon:LinkedInIcon,
            link:'https://www.linkedin.com/in/passingByte/'
        }
    ]
}
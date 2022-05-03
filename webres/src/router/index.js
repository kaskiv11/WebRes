import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import ModalPostWindow from "../components/ModalPostWindow";
import postIdPage from "../pages/PostIdPage";
import Registartion from "../pages/Registration"


export const privateRoutes = [
    {path: '/contact', component: Contact, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: postIdPage, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/registration', component: Registartion, exact: true},
]
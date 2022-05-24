import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Registartion from "../pages/Registration";
import Profile from "../pages/Profile";
import CreatePost from "../pages/CreatePost";


export const privateRoutes = [
    {path: '/contact', component: Contact, exact: true},
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostIdPage, exact: true},
    {path: '/profile/:id', component: Profile, exact: true},
    {path: '/create', component: CreatePost, exact: true},

]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/registration', component: Registartion, exact: true},
]
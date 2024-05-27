import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import About from "../About/About";
import Courses from "../Courses/Courses";
import Projects from "../Projects/Projects";
import JammmingLink from "../JammmingLink/JammmingLink";
import Blog from "../Blog/Blog";
import BlogPost from "../BlogPost/BlogPost";
import Contact from "../Contact/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/projects/jammming" element={<JammmingLink />}></Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

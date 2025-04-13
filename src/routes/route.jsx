import { createBrowserRouter } from "react-router-dom";
import EnterName from "../pages/EnterName.jsx";
import Display from "../pages/Display..jsx";
import SentenceQuiz from "../pages/SentenceQuiz.jsx";
import NotFound from "../pages/NotFound.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Feedback from "../pages/Feedback.jsx";

const router = createBrowserRouter([
  {
    path:'/',
    element:<EnterName/>
  },
  {
    path:'display',
    element:<Display/>
  },
  {
    path:'quiz',
    element:<SentenceQuiz/>
  },
  {
    path:'dashboard',
    element:<Dashboard/>
  },
  {
    path:'feedback',
    element:<Feedback/>
  },
  {
    path:'*',
    element:<NotFound/>
  }
])

export default router;
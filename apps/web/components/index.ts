import Header from "./ui/Header";
import Footer from "./ui/Footer";
import GreetingPage from "./greeting/GreetingPage";
import { SignInBtn, SignUpBtn } from "./HOC/AuthBtn";
import AuthForm from "./auth/AuthForm";
import SignOutBtn from "./auth/SignOutBtn";
import TailwindIndicator from "./ui/TailwindIndicator";
import { ThemeProvider } from "./HOC/ThemeProvider";
import ThemeToggle from "./ui/ThemeToggle";
import SignedOut from "./HOC/SignedOut";
import SignedIn from "./HOC/SignedIn";
import LoadingScreen from "./ui/LoandingScreen";

export {
  Header,
  Footer,
  GreetingPage,
  AuthForm,
  SignInBtn,
  SignUpBtn,
  TailwindIndicator,
  ThemeProvider,
  SignOutBtn,
  ThemeToggle,
  SignedOut,
  SignedIn,
  LoadingScreen,
};

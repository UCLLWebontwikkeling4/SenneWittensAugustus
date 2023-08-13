import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Users from "./users";
import Trainings from "./trainings";
import Login from "../components/Login";
import LoginPhoto from "../public/social3.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<string>("");
  const [refreshed, setRefreshed] = useState(false);

  useEffect(() => {
    if (typeof sessionStorage !== "undefined") {
      const storedUser = sessionStorage.getItem("id");
      if (storedUser !== user) {
        setUser(storedUser);
        if (storedUser !== null && !refreshed) {
          setRefreshed(true);
        }
      }
    }
  }, [user, refreshed]);

  if (user == null) {
    return (
      <>
        <div className="d-flex justify-content-around align-items-center bg-white mx-5 mt-5 shadow-lg shadow-inset p-3 mb-5 bg-white rounded text-center ">
          <div>
            <h2 className="text-black">Welcome to our site!</h2>

            <h6 className="text-black">
              If you want to use all the functionalities of our site, please go
              to the login page!
            </h6>
            <Login />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div className="d-flex justify-content-around align-self-stretch">
          <Users />
          
        </div>
        <Footer />
      </>
    );
  }
}

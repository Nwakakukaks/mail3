import { useContext } from "react";
import "./Mail.css";
import { Web3ApiContext } from "../../context/Web3ApiContext";
import { ComposeButton } from "../../components/header/ComposeButton";
import { SpinnerDiamond } from "spinners-react";
import { LogoutButton } from "../../components/Logout";
import { Routes, Route, Link, useRoutes } from "react-router-dom";
import InboxSection from "./InboxSection/InboxSection";
import SentEmails from "./SentEmails/SentEmails";
import SpamSections from "./SpamSectio/SpamSections";

export default function Mail() {
  let element = useRoutes([
    {
      path: "/",
      element: <InboxSection />,
    },
    {
      path: "sentEmails",
      element: <SentEmails />,
    },
    {
      path: "SpamSection",
      element: <SpamSections />,
    },
  ]);
  const { connectedAccount } = useContext(Web3ApiContext);
  if (!connectedAccount) {
    return (
      <div className="loading">
        <SpinnerDiamond
          size={73}
          thickness={143}
          speed={80}
          color="rgba(113, 57, 172, 1)"
          secondaryColor="rgba(57, 128, 172, 0.92)"
        />
      </div>
    );
  }

  const short_String = (str) => {
    return str.slice(0, 6) + "..." + str.slice(str.length - 5, str.length);
  };

  return (
    <>
      <div className="mail">
        <div style={{ height: "100vh", background: "white" }} className="row">
          <div className="col-2 sidebar " style={{ background: "7E7E7E" }}>
            
            <h4 className="logo">Mail3 </h4>
            <h3 className="m-3 mailaccount ">
              <strong>Account :</strong> {short_String(connectedAccount)}
            </h3>

            <ComposeButton />

            {/* <LogoutButton /> */}
            <Link to="" style={{ textDecoration: 'none' }}>
              <div  className="links  ">
                <span className="mx-auto">Inbox</span>
              </div>
              
            </Link>
            <Link to="sentEmails" style={{ textDecoration: 'none' }}>
              <div  className="links  ">
                <span className="mx-auto">Sent</span>
              </div>
            </Link>
            <Link to="SpamSection" style={{ textDecoration: 'none' }}>
              <div  className="links  ">
                <span className="mx-auto">Spam</span>
              </div>
            </Link>
            <Link to="SpamSection" style={{ textDecoration: 'none' }}>
              <div  className="links  ">
                <span className="mx-auto">Drafts</span>
              </div>
            </Link>
            <Link to="SpamSection" style={{ textDecoration: 'none' }}>
              <div  className="links  ">
                <span className="mx-auto">Starred</span>
              </div>
            </Link>
          </div>
          <div className="col-10 msg-box" style={{ background: "E2E5DE" }}>
            {element}
          </div>
        </div>
      </div>
    </>
  );
}

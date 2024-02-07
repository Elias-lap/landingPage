import "./Home.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
function Home() {
  return (
    <section className="Home-Page   ">
      <div className=" Home-Page-RightSide ">
        <h4 >
          PEACHY PUP
          <br /> BAKERY
        </h4>
        <div className="Home-Page-RightSide_content  ">
          <h2 >
            TASTY PASTRIES
          </h2>
          <p >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the
          </p>
          <button >
            SEE MORE
          </button>
        </div>
        <div className=" Home-Page-RightSide_container-icons     ">
          <div className="Home-Page-RightSide_container-icons-BoxIcons ">
            <span className=" Home-Page-RightSide_container-BoxIcons-item ">
              <FaFacebook />
            </span>
            <span className="Home-Page-RightSide_container-BoxIcons-item ">
              <FaInstagram />
            </span>
            <span className="Home-Page-RightSide_container-BoxIcons-item ">
              <FaTwitterSquare />
            </span>
            <span className="Home-Page-RightSide_container-BoxIcons-item">
              <FaFacebook />
            </span>
          </div>
          <div className="Home-Page-RightSide_container-icons_Telefon ">
            <p >Telephone: </p>
            <span >+7 700 000 00 00</span>
          </div>
        </div>
        <img
          className="  Home-Page_image"
          src="../../../public/193a314d247081af73c5061e38d7c33f.png"
          alt="bread"
        />
      </div>
      <div className="Home-Page_LeftSide "></div>
    </section>
  );
}

export default Home;

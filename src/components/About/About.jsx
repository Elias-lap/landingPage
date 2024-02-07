import "./About.scss";
function About() {
  return (
    <section className="About">
      <div className="About_LeftSide ">
        <h2>About <br/>us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="About_RightSide ">
        <img className="About_RightSide_ChefImage" src="./public/45564e95653121db1a2ec1cdbe0f67c4.jpeg" alt="Chef" />


      </div>
    </section>
  );
}

export default About;

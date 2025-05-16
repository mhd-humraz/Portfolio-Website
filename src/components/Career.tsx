import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
  <div className="career-container">
    <h2>
      My career <span>&</span>
      <br /> experience
    </h2>
    <div className="career-info">
      <div className="career-timeline">
        <div className="career-dot"></div>
      </div>

      <div className="career-info-box">
        <div className="career-info-in">
          <div className="career-role">
            <h4>SPC Commander</h4>
            <h5>Lajanathul Muhammadiya HSS, Alappuzha</h5>
          </div>
          <h3>2019 – 2021</h3>
        </div>
        <p>
          Led the Student Police Cadet team as commander, developing strong leadership,
          discipline, and public service values. Organized community programs and
          coordinated student initiatives.
        </p>
      </div>

      <div className="career-info-box">
        <div className="career-info-in">
          <div className="career-role">
            <h4>Founder & Designer</h4>
            <h5>Origin Media</h5>
          </div>
          <h3>2023 – Present</h3>
        </div>
        <p>
          Launched a creative brand focused on designing and selling wall posters. Designed the
          logo and branding, managed social media marketing, and developed the business website
          for digital presence.
        </p>
      </div>

      <div className="career-info-box">
        <div className="career-info-in">
          <div className="career-role">
            <h4>Event Planner</h4>
            <h5>BYTE BEGIN – CS Dept. Association</h5>
          </div>
          <h3>2024 – Present</h3>
        </div>
        <p>
          Planning and organizing departmental events such as esports tournaments, treasure hunts,
          and cultural programs during college fest Nexora. Collaborating with team members and
          faculty for smooth execution of events.
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Career;

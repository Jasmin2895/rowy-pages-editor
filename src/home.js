import './home.css';

function Home() {
  return (
    <>
      <div className="header">
        <h1 id="headerTitle">My Website</h1>
        <p>Resize the browser window to see the effect.</p>
      </div>
      <div className="topnav">
        <a id="navbar-option-1" href="#">Link</a>
        <a id="navbar-option-2" href="#">Link</a>
        <a id="navbar-option-3" href="#">Link</a>
        <a id="navbar-option-4" href="#" style={{ float: "right" }}>Link</a>
      </div>
      <div className="row">
        <div className="leftcolumn">
          <div id="card1" className="card">
            <h2 id="card1-h2">TITLE HEADING</h2>
            <h5 id="card1-h5">Title description, Dec 7, 2017</h5>
            <div className="fakeimg" style={{ height: "200px" }}>Image</div>
            <p id="card1-p1">Some text..</p>
            <p id="card1-p2">Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className="fakeimg" style={{ height: "200px" }}>Image</div>
            <p id="p1">Some text..</p>
            <p id="p2">Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
        <div className="rightcolumn">
          <div id="card3" className="card">
            <h2>About Me</h2>
            <div className="fakeimg" style={{ height: "100px" }}>Image</div>
            <p id="p1"></p>
          </div>
          <div id="card4" className="card">
            <h3 id="card4-h3">Popular Post</h3>
            <div id="card4-img1" className="fakeimg"><p>Image</p></div>
            <div id="card4-img2" className="fakeimg"><p>Image</p></div>
            <div id="card4-img3" className="fakeimg"><p>Image</p></div>
          </div>
          <div id="card5" className="card">
            <h3 id="card5-h3">Follow Me</h3>
            <p id="card5-p">Some text..</p>
          </div>
        </div>
      </div>

      <div id="footer-h2" class="footer">
        <h2>Footer</h2>
      </div>

    </>
  );
}

export default Home;

import { useEffect, useState } from 'react';
import { findAll } from './services/homeComponentProperties';
import './home.css';

function Home() {
  const [elementProperties, setElementProperties] = useState({})

  const fetchData = async () => {
    const res = await findAll();
    setElementProperties({ ...res })
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      {elementProperties ? <>
        <div className="header">
          {elementProperties['headerTitle'] && (
            <h1 id="headerTitle" style={elementProperties['headerTitle'].style} dangerouslySetInnerHTML={{ __html: elementProperties['headerTitle'].text }} />
          )}

          {elementProperties['headerParagraph'] && (
            <p id="headerParagraph" style={elementProperties['headerParagraph'].style} dangerouslySetInnerHTML={{ __html: elementProperties['headerParagraph'].text }} />
          )}

        </div>
        <div className="topnav">
          {elementProperties['navbar-option-1'] && (
            <a id="navbar-option-1" style={elementProperties['navbar-option-1'].style} dangerouslySetInnerHTML={{ __html: elementProperties['navbar-option-1'].text }} href="#" />
          )}

          {elementProperties['navbar-option-2'] && (
            <a id="navbar-option-2" style={elementProperties['navbar-option-2'].style} dangerouslySetInnerHTML={{ __html: elementProperties['navbar-option-2'].text }} href="#" />
          )}

          {elementProperties['navbar-option-3'] && (
            <a id="navbar-option-3" style={elementProperties['navbar-option-3'].style} dangerouslySetInnerHTML={{ __html: elementProperties['navbar-option-3'].text }} href="#" />
          )}

          {elementProperties['navbar-option-4'] && (
            <a id="navbar-option-4" style={elementProperties['navbar-option-4'].style} dangerouslySetInnerHTML={{ __html: elementProperties['navbar-option-4'].text }} href="#" />
          )}

        </div>
        <div className="row">
          <div className="leftcolumn">
            <div id="card1" className="card">
              {elementProperties['card1-h2'] && (
                <h2 id="card1-h2" style={elementProperties['card1-h2'].style} dangerouslySetInnerHTML={{ __html: elementProperties['card1-h2'].text }} />
              )}

              {elementProperties['card1-h5'] && (
                <h2 id="card1-h5" style={elementProperties['card1-h5'].style} dangerouslySetInnerHTML={{ __html: elementProperties['card1-h5'].text }} />
              )}

              <div id="card1-img1" className="fakeimg">
                <p>
                  {
                    elementProperties['card1-img1'] && elementProperties['card1-img1'].imageUrl && elementProperties['card1-img1'].imageUrl[0] && (
                      <img style={{ ...elementProperties['card1-img1'].style, height: "200px", width: "100%" }} src={elementProperties['card1-img1'].imageUrl[0].downloadURL} alt="Image" />
                    )
                  }
                </p>
              </div>

              {elementProperties['card1-p1'] && (
                <p id="card1-p1" style={elementProperties['card1-p1'].style} dangerouslySetInnerHTML={{ __html: elementProperties['card1-p1'].text }} />
              )}

              {elementProperties['card1-p2'] && (
                <p id="card1-p2" style={elementProperties['card1-p2'].style} dangerouslySetInnerHTML={{ __html: elementProperties['card1-p2'].text }} />
              )}
            </div>
            <div className="card">
              {elementProperties['card2-h2'] && (
                <h2 id="card2-h2" style={elementProperties['card2-h2'].style} dangerouslySetInnerHTML={{ __html: elementProperties['card2-h2'].text }} />
              )}

              {elementProperties['card2-h5'] && (
                <h2 id="card2-h5" style={elementProperties['card2-h5'].style} dangerouslySetInnerHTML={{ __html: elementProperties['card2-h5'].text }} />
              )}

              <div id="card2-img1" className="fakeimg" style={{ height: "200px" }}>
                <p>
                  {
                    elementProperties['card2-img1'] && elementProperties['card2-img1'].imageUrl && elementProperties['card2-img1'].imageUrl[0] && (
                      <img style={{ ...elementProperties['card2-img1'].style, height: "200px", width: "100%" }} src={elementProperties['card2-img1'].imageUrl[0].downloadURL} alt="Image" />
                    )
                  }
                </p>
              </div>

              {elementProperties['card2-p1'] && (
                <p id="card2-p1" style={elementProperties['card2-p1'].style} dangerouslySetInnerHTML={{ __html: elementProperties['card2-p1'].text }} />
              )}

              {elementProperties['card2-p2'] && (
                <p id="card2-p2" style={elementProperties['card2-p2'].style} dangerouslySetInnerHTML={{ __html: elementProperties['card2-p2'].text }} />
              )}
            </div>
          </div>
          <div className="rightcolumn">
            <div id="card3" className="card">
              {elementProperties['card3-h2'] && (
                <h2 id="card3-h2" style={elementProperties['card3-h2'].style} dangerouslySetInnerHTML={{ __html: elementProperties['card3-h2'].text }} />
              )}
              <div id="card3-img1">
                <p>
                  {
                    elementProperties['card3-img1'] && elementProperties['card3-img1'].imageUrl && elementProperties['card3-img1'].imageUrl[0] && (
                      <img className="fakeimg" style={{ ...elementProperties['card3-img1'].style }} src={elementProperties['card3-img1'].imageUrl[0].downloadURL} alt="Image" />
                    )
                  }
                </p>
              </div>

              {elementProperties['card3-p'] && (
                <p id="card3-p" style={elementProperties['card3-p'].style} dangerouslySetInnerHTML={{ __html: elementProperties['card3-p'].text }} />
              )}
            </div>
            <div id="card4" className="card">
              {elementProperties['card4-h3'] && (
                <h3 id="card4-h3" style={elementProperties['card4-h3'].style} dangerouslySetInnerHTML={{ __html: elementProperties['card4-h3'].text }} />
              )}
              <div id="card4-img1" >
                <p>
                  {
                    elementProperties['card4-img1'] && elementProperties['card4-img1'].imageUrl && elementProperties['card4-img1'].imageUrl[0] && (
                      <img className="fakeimg" style={elementProperties['card4-img1'].style} src={elementProperties['card4-img1'].imageUrl[0].downloadURL} alt="Image" />
                    )
                  }
                </p>
              </div>

              <div id="card4-img2" >
                <p>
                  {
                    elementProperties['card4-img2'] && elementProperties['card4-img2'].imageUrl && elementProperties['card4-img2'].imageUrl[0] && (
                      <img className="fakeimg" style={elementProperties['card4-img2'].style} src={elementProperties['card4-img2'].imageUrl[0].downloadURL} alt="Image" />
                    )
                  }

                </p>
              </div>

              <div id="card4-img3" >
                <p>
                  {
                    elementProperties['card4-img3'] && elementProperties['card4-img3'].imageUrl && elementProperties['card4-img3'].imageUrl[0] && (
                      <img className="fakeimg" style={elementProperties['card4-img3'].style} src={elementProperties['card4-img3'].imageUrl[0].downloadURL} alt="Image" />
                    )
                  }
                </p>
              </div>
            </div>
            <div id="card5" className="card">
              {elementProperties['card5-p'] && (
                <h3 id="card5-h3" style={elementProperties['card5-h3'].style} dangerouslySetInnerHTML={{ __html: elementProperties['card5-p'].text }} />
              )}
              {
                elementProperties['card5-p'] && (
                  <p id="card5-p" style={elementProperties['card5-p'].style} dangerouslySetInnerHTML={{ __html: elementProperties['card5-p'].text }} />
                )
              }
            </div>
          </div>
        </div>

        <div className="footer">
          {elementProperties['card5-p'] && (
            <h2 id="footer-h2" style={elementProperties['footer-h2'].style} dangerouslySetInnerHTML={{ __html: elementProperties['footer-h2'].text }} />
          )}
        </div>
      </> : null
      }
    </>
  );
}

export default Home;

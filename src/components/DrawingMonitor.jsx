import React from 'react';
import { Link } from 'react-router-dom';

export const DrawingMonitor = () => {
  return (
    <div className="outerMostFrame d-flex justify-content-center align-items-center">
    <div className="outerMostFrame2 d-flex justify-content-center align-items-center">
      <span className="topDot text-center"> &bull; </span>
      <span className="bottomName text-center"> MaeBook Pro <span className="rMark">&reg;</span> </span>
      <div className="screenFrame img-fluid">
        <div className="screenFrameInnerBorder">
          <ul className="screenTopUl">
            <li className="screenTopList">Html</li>
            <li className="screenTopList screenTopListActive">Css</li>
            <li className="screenTopList">JS</li>
            <li className="screenTopList">NodeJs</li>
            <li className="screenTopList">Express</li>
            <li className="screenTopList">MySql</li>
            <li className="screenTopList">Sequelize</li>
            <li className="screenTopList">MongoDb</li>
            <li className="screenTopList REACT">React</li>
            <li className="screenTopList MVC">MVC</li>
            <li className="screenTopList CRUD">CRUD</li>
            <li className="screenTopList ORM">ORM</li>
          </ul>
          <div className="screenLightStrip urlBarWrapper">
            <ul className="urlBarUl">
              <li className="urlBarLi"> <i className="fas fa-arrow-left"></i></li>
              <li className="urlBarLi"> <i className="fas fa-arrow-right"></i> </li>
              <li className="urlBarLi"> <i className="fas fa-redo"></i> </li>
              <li className="urlBarLi"> <i className="fas fa-home"></i> </li>
              <li className="urlBarLi addressField"> http://Localhost:5500/computer-drawing-styles.css </li>
              <li className="urlBarLi"><i className="far fa-star"></i></li>
              <li className="urlBarLi"><i className="fas fa-caret-square-down"></i></li>
              {/* icons hidden in small devices */}
              <li className="urlBarLi icon544"><i className="fas fa-folder"></i></li>
              <li className="urlBarLi icon544"><i className="fas fa-user-alt"></i></li>
              {/* icons hidden before 769 */}
              <li className="urlBarLi icon769"><i className="fas fa-bars"></i></li>
              <li className="urlBarLi icon769"><i className="fas fa-pen"></i></li>
              {/* icons hidden before 1920 */}
              <li className="urlBarLi icon1920"><i className="fas fa-thumbtack"></i></li>
              <li className="urlBarLi icon1920"><i className="far fa-thumbs-up"></i></li>
              <li className="urlBarLi icon1920"><i className="fab fa-github"></i></li>
              <li className="urlBarLi icon1920"><i className="fab fa-facebook-square"></i></li>
              <li className="urlBarLi icon1920"><i className="fas fa-folder-open"></i></li>
              <li className="urlBarLi icon1920"><i className="fas fa-angle-double-right"></i></li>

            </ul>
          </div> {/* urlBarWrapper ends */}
          <div className="col-12 text-center imageWrapper">
            <img src="../../images/shiva-1.png" alt="Shiva Sharma portfolio" className="shivaImage" />
          </div> {/*  imageWrapper ends */}
          <div className="col-12 text-center nameWrapper">
            <h1 className="welcomeText font-weight-bold text-uppercase"> Welcome to <br /> my portfolio site </h1>
            <p>I build interactive and responsive web apps <br /> that run across different platforms and devices. </p>
          </div> {/*  nameWrapper ends */}

          {/* #####  screen thumb images #####  */}
          <div className="col-12 d-flex landingButtonsRow justify-content-center align-items-center">
            <Link className="nav-link" to="/">
              <div className="col homeButton"> <i className="fas fa-home"></i> Home </div>
            </Link>
            <Link className="nav-link" to="/portfolio">
              <div className="col portfolioButton"> <i className="fas fa-layer-group"> </i> Portfolio</div>
            </Link>
            <Link className="nav-link" to="/contact">
              <div className="col contactButton"> <i className="fas fa-id-card"> </i> Contact</div>
            </Link>
          </div> {/* landingButtonsRow ends  */}
        </div> {/*  screenFrameInnerBorder ends */}
      </div> {/*  screenFrame ends */}
    </div> {/*  outerMostFrame2 ends */}
  </div>

  )
}
// export default DrawingMonitor;
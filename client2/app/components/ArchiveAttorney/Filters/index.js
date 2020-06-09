import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Keyword from './keyword';
import Letter from './letter';
import Practices from './practices';
import Title from './title';
import Location from './location';
import MobileMenu from './mobile-menu';

export default function Filter(props) {
  const {
    practices,
    alphabet,
    locations,
    designation,
    userInput,
    handleChange,
    onSelect,
    letterClick,
    clearAll,
    onMobileSelect
  } = props;

  return (
    <>
      {
       (2 > 1) ? (
        <Navbar expand="lg" className="bckground-gray border p-2">
          <Keyword userInput={userInput} handleChange={handleChange} />          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="nav-fill w-100">
              <Practices practices={practices} onSelect={onSelect} />
              <Location locations={locations} onSelect={onSelect} />
              <Title designation={designation} onSelect={onSelect} />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       ) : (
         <div className="bckground-gray p-2">
           <Keyword userInput={userInput} handleChange={handleChange} />
           <MobileMenu title="Filter by practice" name="practices" content={practices} onMobileSelect={onMobileSelect} />
           <MobileMenu title="Filter by location" name="location" content={locations} onMobileSelect={onMobileSelect} />
           <MobileMenu title="Filter by title" name="designation" content={designation} onMobileSelect={onMobileSelect} />
         </div>
       )
     }
     {(2 > 1) ? (
        <div className="drkbckground-gray border h-57">
          <div className="row mt-2">
            <Letter alphabet={alphabet} letterClick={letterClick} />
            <div className="col-sm-12 col-md-2">
              <button
                type="button"
                className="btn btn-danger float-right mx-3"
                onClick={() => clearAll()}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="btn btn-danger w-100 mt-3 mb--2"
          onClick={() => clearAll()}
        >
          Clear All
        </button>    
      )}      
    </>
  )


}
import { Row, Col } from 'react-bootstrap'

import { artWorksArray } from '../artWorkStore'

import ArtWorkCard from '../components/ArtWorkCard'

import '../index.css';

function Store({ user }) {
  return (
    <>
      {user ? (
        <>
          <h1 align="center" className="p-3 font-class2">
            Welcome to the store!
          </h1>

          {/* Show one column in a small screen and 3 in a medium screen */}
          <Row xs={1} md={3} className="g-4">
            {/* Map through your artWork and then display */}
            {artWorksArray.map((artWork, index) => (
              <Col align="center" key={index}>
                {/* ArtWork on the left is defining the property, and the artWork on the right is the artWork we are mapping over */}
                <ArtWorkCard artWork={artWork} />
              </Col>
            ))}
          </Row>
        </>
      ) : (

   

        <>
          <div align="center" className="p-3">
            <h1>Please login or register to enter the store.</h1>
            <img src="/img/sistineLanding.png" alt="" className="img-fluid" />
          </div>
        </>


      )}
    </>
  );
}

export default Store;

import { Row, Col } from 'react-bootstrap'

import { artWorksArray } from '../artWorkStore'

import ArtWorkCard from '../components/ArtWorkCard'

function Store() {
  return (
    <>


      <h1 align="center" className="p-3">Welcome to the store!</h1>

      {/* show one column in a small screen and 3 in a medium screen */}
      <Row xs={1} md={3} className="g-4">
        {/* map through your artWork and then display */}
        {artWorksArray.map((artWork, index) => (
          <Col align="center" key={index}>
            {/* //artWork on the left is defining the property and the artWork on the right is the artWork we are mapping over */}
            <ArtWorkCard artWork={artWork} />
          </Col>
        ))}


      </Row>
    </>
  )
}
export default Store;

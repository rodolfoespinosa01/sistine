import { Row, Col } from 'react-bootstrap'

import { artWorkArray } from '../artStore'

import ArtCard from '../components/ArtCard'

function Store() {
  return (
    <>
      <h1 align="center" className="p-3">Welcome to the store!</h1>
      <Row xs={1} md={3} className="g-4">
        {artWorkArray.map((product, index) => (
          <Col align="center" key={index}>
            <ArtCard product={product} />
          </Col>
        ))}


      </Row>
    </>
  )
}
export default Store;

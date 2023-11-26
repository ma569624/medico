import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import imgsrc from './img/n95.png'

const Banner = () => {
  return (
    <section className='banner'>
      <Container>
        <Row>
          <Col className='m-auto'>
            <aside>
              <span>
                100% genuine Products
              </span>
              <h2>Get 20% Discount <br /> Of N95 Mask</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button>Shop Now</button>
            </aside>
          </Col>
          <Col>
            <article>
              <img src={imgsrc}  alt='mask'/>
              <span>N95</span>
            </article>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default Banner

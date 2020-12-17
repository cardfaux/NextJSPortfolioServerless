import BaseLayout from '@/components/layouts/BaseLayout';
import { Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';
import Image from 'next/image';

const ROLES = [
  'BackEnd',
  'FrontEnd',
  'NodeJS',
  'React.js',
  'FullStack',
  'Engineer',
  'Developer',
];
const Index = () => {
  return (
    <BaseLayout className='cover'>
      <div className='main-section'>
        <div className='background-image'>
          <Image
            src='/images/background-index.png'
            alt='portfolio placeholder image'
            width={1548}
            height={500}
          />
        </div>
        <Container>
          <Row>
            <Col md='6'>
              <div className='hero-section'>
                <div className={`flipper`}>
                  <div className='back'>
                    <div className='hero-section-content'>
                      <h2> Full Stack Software Engineer </h2>
                      <div className='hero-section-content-intro'>
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <Image
                      className='image'
                      src='/images/section-1.png'
                      alt='portfolio image second'
                      width={400}
                      height={500}
                    />
                    <div className='shadow-custom'>
                      <div className='shadow-inner'> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md='6' className='hero-welcome-wrapper'>
              <div className='hero-welcome-text'>
                <h1>
                  Welcome to the portfolio website of James Hagood. Get informed,
                  collaborate and discover projects I was working on through the
                  years!
                </h1>
              </div>
              <Typed
                loop
                typeSpeed={70}
                backSpeed={70}
                strings={ROLES}
                backDelay={1000}
                loopCount={0}
                showCursor
                className='self-typed'
                cursorChar='|'
              />
              <div className='hero-welcome-bio'>
                <h1>Let's take a look on my work.</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
};

export default Index;

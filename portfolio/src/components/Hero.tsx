import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Type from './Type';
import Particle from './Particle';
import Tilt from 'react-parallax-tilt';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen" style={{
      background: 'linear-gradient(to bottom right, rgb(0 0 80), rgb(0 0 42))',
      paddingTop: '130px',
      paddingBottom: '80px'
    }}>
      {/* Particles Background */}
      <div className="absolute inset-0">
        <Particle />
      </div>

      {/* Main Content */}
      <Container className="relative z-10">
        <Row className="items-center">
          <Col md={7} className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Xin chào! {" "}
              <span className="wave" role="img" aria-label="wave">
                👋🏻
              </span>
            </h1>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tôi là{" "}
              <strong className="purple" style={{color: '#5555FF'}}>
                NGUYEN BA THIEN
              </strong>
            </h1>

            <div className="text-3xl md:text-4xl font-semibold mb-8" style={{color: '#5555FF'}}>
              <Type />
            </div>
          </Col>

          <Col md={5} className="flex justify-center">
            <Tilt>
              <div className="w-full max-w-md">
                <div className="bg-gradient-to-br from-blue-600 to-primary rounded-full w-64 h-64 mx-auto flex items-center justify-center text-white">
                  <span className="text-8xl font-bold">NBT</span>
                </div>
              </div>
            </Tilt>
          </Col>
        </Row>
      </Container>

      {/* About Section */}
      <Container className="relative z-10 mt-24">
        <Row>
          <Col md={8} className="text-white mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              HÃY ĐỂ TÔI <span className="purple" style={{color: '#5555FF'}}>GIỚI THIỆU</span> BẢN THÂN
            </h1>
            <div className="text-lg leading-relaxed" style={{textAlign: 'left'}}>
              <p className="mb-4">
                Tôi yêu thích lập trình và luôn học hỏi những điều mới mỗi ngày 🤷‍♂️
              </p>
              <p className="mb-4">
                Tôi thành thạo các ngôn ngữ như{" "}
                <i>
                  <strong className="purple" style={{color: '#5555FF'}}>
                    JavaScript, TypeScript và Node.js
                  </strong>
                </i>
              </p>
              <p className="mb-4">
                Lĩnh vực chuyên môn của tôi là xây dựng{" "}
                <i>
                  <strong className="purple" style={{color: '#5555FF'}}>
                    Backend APIs và Microservices
                  </strong>
                </i>{" "}
                với các công nghệ hiện đại
              </p>
              <p className="mb-4">
                Khi có thể, tôi cũng đam mê phát triển sản phẩm với{" "}
                <strong className="purple" style={{color: '#5555FF'}}>Node.js</strong> và{" "}
                <i>
                  <strong className="purple" style={{color: '#5555FF'}}>
                    Express.js
                  </strong>
                </i>
              </p>
            </div>
          </Col>

          <Col md={4} className="flex justify-center items-center">
            <Tilt>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold mb-2">Backend Expert</h3>
                  <p className="text-blue-200">Node.js & Express.js</p>
                </div>
              </div>
            </Tilt>
          </Col>
        </Row>

        {/* Social Links */}
        <Row className="mt-16">
          <Col md={12} className="text-center text-white">
            <h1 className="text-3xl font-bold mb-4">KẾT NỐI VỚI TÔI</h1>
            <p className="mb-6">
              Đừng ngần ngại <span className="purple" style={{color: '#5555FF'}}>kết nối</span> với tôi
            </p>
            <ul className="flex justify-center gap-6 list-none">
              <li>
                <a
                  href="https://github.com/pathin33"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 transition-all transform hover:scale-110 border-2 border-white/20"
                  style={{position: 'relative'}}
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg">
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="mailto:nguyenbathien@example.com"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 transition-all transform hover:scale-110 border-2 border-white/20"
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg">
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 transition-all transform hover:scale-110 border-2 border-white/20"
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="2rem" width="2rem" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;

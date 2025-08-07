import React from 'react';

import {
  AboutContainer,
  Title,
  Highlight,
  BottomSection,
  Paragraph,
  Link,
  NameHighlight,
} from './about.styles';

const PortfolioIntro: React.FC = () => {
  return (
    <AboutContainer>
      <Title>
        ---- <NameHighlight>Welcome</NameHighlight> ----
      </Title>
      <BottomSection>
        <Paragraph>
          &emsp;Hi, I’m <strong>Serge Hall</strong>, a passionate full-stack developer with a
          creative edge. My journey in tech began with a strong drive to solve real-world problems
          through elegant and scalable software solutions.
        </Paragraph>

        <Paragraph>
          I’m currently sharpening my skills in front-end development using <strong>React</strong>,
          while also working extensively on the backend with technologies like{' '}
          <strong>Node.js</strong>, <strong>Express</strong>, <strong>NestJS</strong>,{' '}
          <strong>MongoDB</strong>, and <strong>PostgreSQL</strong>. I am also studying modern
          architectural principles such as <strong>SOLID</strong>,{' '}
          <strong>Hexagonal Architecture</strong>, and <strong>SAGA</strong>.
        </Paragraph>

        <Paragraph>
          My learning extends to distributed systems and DevOps fundamentals, including{' '}
          <strong>Microservices</strong>, <strong>WebSocket</strong>, <strong>RabbitMQ</strong>,{' '}
          <strong>Docker</strong>, <strong>Kubernetes</strong>, and <strong>Jenkins</strong>. I’m
          currently a participant in the{' '}
          <Highlight>
            <Link href="https://it-incubator.io/en" target="_blank" rel="noopener noreferrer">
              <strong>IT-Incubator</strong>
            </Link>
          </Highlight>
          , a program dedicated to developing strong, industry-ready engineers through hands-on
          experience and mentorship.
        </Paragraph>

        <Paragraph>
          I’ve built several projects from scratch, applying best practices taught by seasoned
          professionals. You can check out my work on{' '}
          <Highlight>
            <Link href="https://github.com/sergehall" target="_blank" rel="noopener noreferrer">
              <strong>GitHub</strong>
            </Link>
          </Highlight>{' '}
          and follow my progress on{' '}
          <Highlight>
            <Link
              href="https://www.codewars.com/users/SergeHall"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Codewars</strong>
            </Link>
          </Highlight>
          .
        </Paragraph>

        <Paragraph>
          Alongside coding, I’m a <strong>professional photographer</strong>, passionate about
          capturing stories through visuals. My creative lens influences the way I approach UI/UX
          and problem-solving in development. You can explore my visual work at{' '}
          <Highlight>
            <Link href="https://www.sergioartg.com" target="_blank" rel="noopener noreferrer">
              <strong>sergioartg.com</strong>
            </Link>
          </Highlight>{' '}
          or follow my journey on Instagram at{' '}
          <Highlight>
            <Link href="https://instagram.com/sergioartg" target="_blank" rel="noopener noreferrer">
              <strong>@sergioartg</strong>
            </Link>
          </Highlight>
          .
        </Paragraph>

        <Paragraph>
          I’m always excited to contribute to impactful real-world projects — whether as part of a
          team or through independent collaboration. My mission is to keep growing through
          continuous learning, strong teamwork, and creative innovation.
        </Paragraph>

        <Paragraph>
          If you’d like to connect, collaborate, or simply say hello, feel free to{' '}
          <Highlight>
            <Link href="mailto:sergioartg@gmail.com" target="_blank" rel="noopener noreferrer">
              reach out
            </Link>
          </Highlight>
          !
        </Paragraph>
      </BottomSection>
    </AboutContainer>
  );
};

export default PortfolioIntro;

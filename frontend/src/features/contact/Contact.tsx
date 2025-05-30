import React from 'react';

import {
  ContactContainer,
  Title,
  Form,
  Input,
  TextArea,
  Button,
  Description,
} from './contact.styles';

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <Title>Contact Me</Title>
      <Description>
        Have a project idea, a question, or just want to say hi? Feel free to reach out! I’d love to
        connect and explore opportunities to work together.
      </Description>
      <Form action="https://formsubmit.co/example-email" method="POST">
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <TextArea name="message" placeholder="Your Message" rows={5} required />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;

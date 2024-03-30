import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Form, Header } from "./styles";
import { ArrowRight } from "phosphor-react";

const Register = () => {
  return (
    <Container>
      <Header>
        <Heading as="strong">Welcome to the Ignite call</Heading>
        <Text>
          We will need few information about you in order to create your
          profile. No worries you can edit it later.
        </Text>
        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <label>
          <Text size="sm">Username</Text>
          <TextInput
            size="sm"
            prefix="ignite.com/"
            placeholder="your-username"
          />
        </label>
        <label>
          <Text size="sm">Full name</Text>
          <TextInput placeholder="Insert your full name" />
        </label>

        <Button size="sm" type="submit">
          Next step
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  );
};

export default Register;

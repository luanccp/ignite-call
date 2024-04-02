import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ArrowRight } from "phosphor-react";
import { ConnectBox, ConnectItem } from "./styles";
import { signIn } from "next-auth/react";

const ConnectCalendar = () => {
  const handleRegister = async (data: any) => {};

  return (
    <Container>
      <Header>
        <Heading as="strong">Connect your agenda</Heading>
        <Text>
          We will need few information about you in order to create your
          profile. No worries you can edit it later.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn("google")}
          >
            Connect
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button size="sm" type="submit">
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
};

export default ConnectCalendar;

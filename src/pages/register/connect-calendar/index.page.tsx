import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ArrowRight, Check } from "phosphor-react";
import { AuthError, ConnectBox, ConnectItem } from "./styles";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const ConnectCalendar = () => {
  const session = useSession();
  const router = useRouter();

  const hasAuthError = router.query.error;
  const isSignedIn = session.status === "authenticated";

  const handleConnectCalendar = async () => {
    await signIn("google");
  };

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
          {isSignedIn ? (
            <Button size="sm" disabled>
              Connected
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Connect
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>
        {hasAuthError && (
          <AuthError size="sm">
            Google integration has failed. Please make sure to allow Google
            Calendar permissions.
          </AuthError>
        )}
        <Button size="sm" type="submit" disabled={!isSignedIn}>
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  );
};

export default ConnectCalendar;

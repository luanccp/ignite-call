import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";

import previewImage from "@/assets/app-preview.png";
import Image from "next/image";
import { ClaimUsernameForm } from "./components/ClaimUsernameForm";

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Easy scheduling
        </Heading>
        <Text size="xl">
          Connect your calendar and allow that someone schedule an appointment
        </Text>
        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          alt="app preview"
          src={previewImage}
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  );
}

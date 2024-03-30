import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Form, FormError, Header } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "it must have at least 3 characters" })
    .regex(/^([a-z\\-]+)$/i, { message: "only letters or dashes" })
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: "it must have at least 3 characters" }),
});

type TRegisterFormData = z.infer<typeof registerFormSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TRegisterFormData>({ resolver: zodResolver(registerFormSchema) });

  const handleRegister = (data: TRegisterFormData) => {
    console.log(data);
  };

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

      <Form as="form" onSubmit={handleSubmit(handleRegister)}>
        <label>
          <Text size="sm">Username</Text>
          <TextInput
            size="sm"
            prefix="ignite.com/"
            placeholder="your-username"
            {...register("username")}
          />
          {errors.username && (
            <FormError size="sm">{errors.username.message}</FormError>
          )}
        </label>
        <label>
          <Text size="sm">Full name</Text>
          <TextInput
            placeholder="Insert your full name"
            {...register("name")}
          />
          {errors.name && (
            <FormError size="sm">{errors.name.message}</FormError>
          )}
        </label>

        <Button size="sm" type="submit" disabled={isSubmitting}>
          Next step
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  );
};

export default Register;

import { Button, Text, TextInput } from "@ignite-ui/react";
import { Form, FormAnnotation } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "must have at least 3 characters" })
    .regex(/^([a-z\\-]+)$/i, { message: "only letters or dashes" })
    .transform((username) => username.toLowerCase()),
});

type TClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>;

export const ClaimUsernameForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  });

  const handleClaimUsername = async (data: TClaimUsernameFormData) => {
    const { username } = data;
    await router.push(`/register?username=${username}`);
  };

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="your-username"
          {...register("username")}
        />
        <Button size="sm" type="submit" disabled={isSubmitting}>
          Schedule user
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username ? errors.username.message : "Insert your username"}
        </Text>
      </FormAnnotation>
    </>
  );
};

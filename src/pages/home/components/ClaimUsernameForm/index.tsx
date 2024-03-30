import { Button, Text, TextInput } from "@ignite-ui/react";
import { Form, FormAnnotation } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "must have at least 3 characters" })
    .regex(/^([a-z\\-]+)$/i, { message: "only letters or dashes" })
    .transform((username) => username.toLowerCase()),
});

type TClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>;

export const ClaimUsernameForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  });

  const handleClaimUsername = (data: TClaimUsernameFormData) => {
    console.log(data);
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
        <Button size="sm" type="submit">
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

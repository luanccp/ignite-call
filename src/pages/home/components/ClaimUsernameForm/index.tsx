import { Button, TextInput } from "@ignite-ui/react";
import { Form } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const claimUsernameFormSchema = z.object({
  username: z.string(),
});

type TClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>;

export const ClaimUsernameForm = () => {
  const { register, handleSubmit } = useForm<TClaimUsernameFormData>();

  const handleClaimUsername = (data: TClaimUsernameFormData) => {
    console.log(data);
  };

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="your username"
        {...register("username")}
      />
      <Button size="sm" type="submit">
        Schedule user
        <ArrowRight />
      </Button>
    </Form>
  );
};

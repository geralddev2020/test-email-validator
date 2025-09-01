import { isValidEmail } from "@/lib/utils";
import type {
  EmailDetails,
  UserCheckResponse,
  UserCheckSucess,
} from "@/types/usercheck";
import axios from "axios";
import { useState, type FormEvent } from "react";

const url = "http://localhost:3000/email-validator";

function isUserCheckSuccess(
  response: UserCheckResponse,
): response is UserCheckSucess {
  return (response as UserCheckSucess).email !== undefined;
}

function useEmailCheck() {
  const [isInvalid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailDetails, setEmailDetails] = useState<EmailDetails>();
  const [apiError, setApiError] = useState(false);

  const handleEmailValidate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");

    /**
     * Manual form validation
     * We can use zod for this
     */
    if (typeof email !== "string" || !isValidEmail(email)) {
      setIsValid(true);
      setIsLoading(false);
      setApiError(false);
      setEmailDetails(undefined);
      return;
    }

    setIsValid(false);

    /**
     * API Call for email verification
     */
    const apiResponse = await handleFormRequest(email);

    /**
     * Response handler
     */
    handleResponseData(apiResponse);
  };

  const handleFormRequest = async (
    email: string,
  ): Promise<UserCheckResponse> => {
    try {
      const response = await axios.post(url, { email });
      setIsLoading(false);
      setApiError(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      setApiError(true);
      throw error;
    }
  };

  const handleResponseData = (responseData: UserCheckResponse) => {
    if (isUserCheckSuccess(responseData)) {
      setEmailDetails(responseData);
    }

  };

  return {
    emailDetails,
    handleEmailValidate,
    isInvalid,
    isLoading,
    apiError,
  };
}

export { useEmailCheck };

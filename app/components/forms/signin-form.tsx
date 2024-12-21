"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { loginUserAction } from "@/data/actions/auth-actions";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ZodErrors from "@/app/components/custom/zod-errors";
import { StrapiErrors } from "@/app/components/custom/strapi-errors";
import { SubmitButton } from "@/app/components/custom/submit-button";
import { Eye, EyeClosed } from "lucide-react";

const INITIAL_STATE = {
  zodErrors: null,
  strapiErrors: null,
  data: null,
  message: null,
};

export default function SigninForm() {
  const [formState, formAction] = useActionState(
    loginUserAction,
    INITIAL_STATE
  );

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md">
      <form action={formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
            <CardDescription>
              Enter your details to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="username or email"
              />
              <ZodErrors error={formState?.zodErrors?.identifier} />
            </div>
            <div className="relative space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="pr-10" // Add padding to the right to make room for the icon
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700"
                  onClick={togglePasswordVisibility}
                  type="button"
                >
                  {showPassword ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeClosed className="w-5 h-5" />
                  )}
                </button>
              </div>
              <ZodErrors error={formState?.zodErrors?.password} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <SubmitButton
              className="w-full"
              text="Sign In"
              loadingText="Loading"
            />
            <StrapiErrors error={formState?.strapiErrors} />
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Don`t have an account?
          <Link className="underline ml-2" href="signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
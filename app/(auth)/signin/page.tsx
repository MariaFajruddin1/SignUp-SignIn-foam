import Link from "next/link";
import SignIN from '@/app/components/forms/signin-form'

export default function SignInRoute() {
  return (
    <>
      <SignIN/>
      <Link href="/" className="text-3xl">Back</Link>
    </>
  );
}

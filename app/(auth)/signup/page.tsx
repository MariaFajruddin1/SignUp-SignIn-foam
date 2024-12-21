import Link from "next/link";
import SignUp from '@/app/components/forms/signup-form'

export default function SingUpRoute() {
  return (
    <>
      <SignUp/>
      <Link href="/" className="text-3xl">Back</Link>
    </>
  );
}

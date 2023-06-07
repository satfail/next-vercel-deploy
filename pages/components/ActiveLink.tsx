import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  color: "#0070f3",
  textDecoration: "underline",
};

export function ActiveLink(props: { text: string; href: string }) {
  const { asPath } = useRouter();
  return (
    <Link style={asPath === props.href ? style : {}} href={props.href}>
      {props.text}
    </Link>
  );
}

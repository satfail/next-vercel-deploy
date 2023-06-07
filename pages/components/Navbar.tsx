import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const navbar_items = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/About",
    text: "About",
  },
  {
    href: "/Contact",
    text: "Contact",
  },
  {
    href: "/Pricing",
    text: "Princing",
  },
];
export function Navbar() {
  return (
    <nav className={styles.menu}>
      {/* <ActiveLink href="/" text="Inicio" />
      <ActiveLink href="/About" text="About" />
      <ActiveLink href="/Contact" text="Contact" /> */}
      {navbar_items.map((item) => (
        <ActiveLink key={item.href} href={item.href} text={item.text} />
      ))}
    </nav>
  );
}

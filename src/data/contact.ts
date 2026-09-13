export type ContactLink = {
  label: string;
  href: string;
};

export const contact = {
  email: {
    label: "Email",
    href: "mailto:muah48157@gmail.com",
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-ahmad5556/" },
    { label: "GitHub", href: "https://github.com/muah48157" },
  ] satisfies ContactLink[],
  portfolio: {
    label: "engrahmad.com",
    href: "https://engrahmad.com",
  },
  resume: "/resume.pdf",
};

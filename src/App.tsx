
import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Download,
  ExternalLink,
  Flag,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Moon,
  Phone,
  Printer,
  ShieldCheck,
  Sun,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Progress } from "./components/ui/progress";
import { Separator } from "./components/ui/separator";
import profileImage from "./assets/foto.jpg";

const resume = {
  name: "João Augusto Cintra Duarte",
  headline: "João Augusto Cintra Duarte",
  tagline:
    "Graduando em Sistemas de Informação focado em segurança, análise de dados e entrega confiável.",
  focus: "Segurança da Informação",
  birthDate: "2003-08-08",
  phone: "+55 19 98348-4323",
  email: "joaocintraduarte@gmail.com",
  location: "Hortolândia/SP, Brasil",
  linkedin: "https://www.linkedin.com/in/jo%C3%A3o-duarte-7553072b8/",
  introduction:
    "Sou estudante de Sistemas de Informação no UNASP (Hortolândia) com interesse especial em segurança da informação, arquitetura de sistemas e experiência do usuário. Minha trajetória combina disciplina acadêmica, liderança voluntária e experiência prática em logística, reforçando visão operacional e foco em resultados.",
  objective:
    "Atuar em estágio ou programa trainee de tecnologia/SI, contribuindo com segurança da informação, integração de dados e boas práticas enquanto evoluo com times multidisciplinares.",
  highlights: [
    {
      metric: "3+ anos",
      label: "Liderança voluntária",
      description:
        "Coordenação estratégica no Clube de Desbravadores com foco em desenvolvimento de equipes.",
    },
    {
      metric: "Disponível",
      label: "Para estágio/trainee",
      description:
        "Pronto para integrar times de tecnologia e aprender com alta velocidade.",
    },
    {
      metric: "Segurança",
      label: "Área de maior interesse",
      description:
        "Foco em cibersegurança, governança e boas práticas em TI.",
    },
  ],
  summary: [
    "Minha trajetória combina valores cristãos, disciplina acadêmica, atuação em logística e liderança voluntária, formando uma visão sistêmica sobre pessoas, processos e tecnologia.",
    "Tenho facilidade em aprender novas ferramentas, organizar rotinas e traduzir informações técnicas para públicos distintos, sempre buscando eficiência e confiabilidade.",
  ],
  values: [
    {
      title: "Liderança com propósito",
      subtitle: "Clube de Desbravadores",
      description:
        "Planejamento de atividades, formação de líderes jovens e fortalecimento de cultura de cuidado e segurança em eventos.",
    },
    {
      title: "Mentalidade analítica",
      subtitle: "Estudos em SI e projetos",
      description:
        "Aplicação de métricas, dashboards e APIs para transformar dados em decisões práticas durante projetos acadêmicos.",
    },
  ],
  experience: [
    {
      company: "Patrus Transportes",
      role: "Auxiliar de Entrega",
      period: "2020 - atual",
      environment: "Logística e atendimento ao cliente",
      achievements: [
        "Executo conferências, separação e entrega de mercadorias garantindo cumprimento de metas e integridade dos pedidos.",
        "Desenvolvo comunicação direta com clientes e parceiros, mantendo postura ética, pontualidade e foco em resultados.",
      ],
    },
    {
      company: "Clube de Desbravadores (voluntariado)",
      role: "Diretor de Clube",
      period: "2022 - atual",
      environment: "Gestão de equipes e eventos educacionais",
      achievements: [
        "Coordeno equipe multidisciplinar na criação de atividades educacionais, sociais e espirituais para adolescentes.",
        "Lidero planejamento estratégico, delegação de tarefas, avaliação de riscos e feedback contínuo para fortalecimento do time.",
      ],
    },
  ],
  education: [
    {
      institution: "UNASP — Hortolândia (UNASP-HT)",
      course: "Bacharelado em Sistemas de Informação",
      period: "2025 - atual (2º semestre)",
      focus:
        "Ênfase em arquitetura de software, banco de dados, segurança da informação e integração de sistemas.",
      activities: [
        "Participação em comunidades acadêmicas de tecnologia e inovação.",
        "Desenvolvimento de projetos orientados a dados e API.",
      ],
    },
    {
      institution: "UNASP — Hortolândia (UNASP-HT)",
      course: "Ensino Médio",
      period: "Concluído em 2020",
      focus:
        "Formação com ênfase em exatas, liderança estudantil e projetos interdisciplinares.",
    },
  ],
  projects: [
    {
      name: "SaNa — Sistema de Acompanhamento dos 8 Remédios Naturais",
      context: "Hackathon UNASP 2025",
      year: "2025",
      description:
        "Aplicação web gamificada que incentiva hábitos saudáveis por meio de dashboards, alertas personalizados e integração com API de clima. Responsável por estruturar fluxos de dados, comunicação com a API e visualização com gráficos.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "PHP 8",
        "MySQL/PostgreSQL",
        "Chart.js",
        "Axios",
        "OpenWeatherMap API",
      ],
      links: [
        { label: "Ver demo", href: "https://juanmmendes.github.io/8remedios/" },
      ],
    },
  ],
  courses: [
    {
      name: "Segurança em Tecnologia da Informação",
      institution: "UNASP",
      details:
        "Princípios de confidencialidade, integridade e disponibilidade, análise de riscos e políticas de proteção de dados.",
    },
    {
      name: "Desenvolvimento Back-End com C#",
      institution: "UNASP",
      details:
        "Fundamentos de APIs REST, orientação a objetos e acesso a dados utilizando .NET.",
    },
  ],
  skills: [
    {
      title: "Linguagens & Desenvolvimento",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Python",
        "C# (noções)",
        "PHP",
        "SQL (MySQL/PostgreSQL)",
      ],
    },
    {
      title: "Ferramentas & Frameworks",
      items: [
        "Chart.js",
        "Axios",
        "OpenWeatherMap API",
        "Pacote Office",
        "Git & GitHub",
      ],
    },
    {
      title: "Competências Comportamentais",
      items: [
        "Comunicação clara",
        "Proatividade",
        "Ética profissional",
        "Aprendizado rápido",
        "Trabalho em equipe",
      ],
    },
  ],
  languages: [
    {
      name: "Espanhol",
      level: "Fluente",
      percent: 95,
      description:
        "Comunicação interpessoal, condução de dinâmicas e apresentações com fluência escrita e oral.",
    },
    {
      name: "Inglês",
      level: "Intermediário",
      percent: 60,
      description:
        "Leitura técnica, escrita de documentação e conversação em ambientes acadêmicos e de trabalho.",
    },
  ],
};
const navLinks = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "formacao", label: "Formação" },
  { id: "projetos", label: "Projetos" },
  { id: "cursos", label: "Cursos" },
  { id: "habilidades", label: "Competências" },
  { id: "idiomas", label: "Idiomas" },
  { id: "contato", label: "Contato" },
];

const fadeInOnMount = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInOnView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme } as const;
}

function calculateAge(dateString: string) {
  const birthDate = new Date(dateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

function formatPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

type SectionProps = {
  id: string;
  title: string;
  icon: ReactNode;
  description?: string;
  children: ReactNode;
};

function Section({ id, title, icon, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 space-y-6">
      <motion.div {...fadeInOnMount}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              {icon}
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
              {description && (
                <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                  {description}
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
      <div>{children}</div>
    </section>
  );
}

function InfoChip({
  icon,
  children,
}: {
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      {icon}
      <span className="text-xs sm:text-sm">{children}</span>
    </span>
  );
}

function HighlightCard({
  metric,
  label,
  description,
}: {
  metric: string;
  label: string;
  description: string;
}) {
  return (
    <Card className="border border-primary/20 bg-background/70 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
      <CardContent className="space-y-1 p-4 sm:p-5">
        <p className="text-2xl font-semibold text-primary">{metric}</p>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

type ExperienceItem = (typeof resume.experience)[number];

function TimelineItem({
  item,
  index,
  total,
}: {
  item: ExperienceItem;
  index: number;
  total: number;
}) {
  const isLast = index === total - 1;
  return (
    <motion.div {...fadeInOnView} className="relative pl-8 sm:pl-14">
      <span
        aria-hidden
        className="absolute left-1 top-3 flex h-4 w-4 items-center justify-center rounded-full border border-primary/50 bg-background text-primary"
      >
        <span className="h-2 w-2 rounded-full bg-primary" />
      </span>
      {!isLast && (
        <span
          aria-hidden
          className="absolute left-[0.78rem] top-6 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent"
        />
      )}
      <Card className="border border-primary/20 bg-background/85 shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl">
        <CardHeader className="pb-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <CardTitle className="text-lg">{item.role}</CardTitle>
              <CardDescription>{item.company}</CardDescription>
            </div>
            <Badge variant="outline" className="border-primary/40 text-primary">
              {item.period}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          {item.environment && (
            <p className="font-medium text-foreground">{item.environment}</p>
          )}
          <ul className="list-disc space-y-2 pl-5">
            {item.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="border border-primary/10 bg-background/80 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="bg-muted text-foreground hover:bg-primary/10"
          >
            {item}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}

function LanguageCard({
  language,
}: {
  language: (typeof resume.languages)[number];
}) {
  return (
    <Card className="border border-primary/15 bg-background/80 shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{language.name}</CardTitle>
        <CardDescription>{language.level}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm text-muted-foreground">
        <Progress value={language.percent} className="h-2" />
        <p>{language.description}</p>
      </CardContent>
    </Card>
  );
}

function KeyValue({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,110px)_1fr] gap-2">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {k}
      </span>
      <span className="text-sm font-semibold text-foreground">{v}</span>
    </div>
  );
}
export default function App() {
  const { theme, setTheme } = useTheme();
  const age = useMemo(() => calculateAge(resume.birthDate), []);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-[120rem] -translate-x-1/2 bg-[radial-gradient(circle_at_top,_rgba(80,155,255,0.18),transparent_65%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,130,246,0.22),transparent_65%)]" />
        <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-[120px] opacity-70 dark:bg-primary/20" />
      </div>

      <header className="sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-inner">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
                Currículo de
              </p>
              <p className="text-xl font-semibold leading-tight">
                {resume.name}
              </p>
            </div>
          </div>

          <div className="no-print flex items-center gap-2 sm:justify-end">
            <div className="flex flex-1 items-center gap-2 overflow-x-auto sm:flex-none">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="whitespace-nowrap rounded-full border border-transparent px-3 py-1 text-xs font-medium text-muted-foreground transition hover:border-primary/20 hover:bg-primary/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Alternar tema"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
              onClick={() => window.print()}
              aria-label="Imprimir currículo"
            >
              <Printer className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10 sm:py-14 lg:py-16">
        <section
          id="inicio"
          className="relative overflow-hidden rounded-3xl border bg-card/80 p-6 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.45)] sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-start">
            <motion.div {...fadeInOnMount} className="space-y-6">
              <Badge className="bg-primary/15 text-primary hover:bg-primary/20">
                Em evolução constante
              </Badge>
              <div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  {resume.headline}
                </h1>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
                  {resume.tagline}
                </p>
              </div>
              <div className="grid gap-4 sm:flex sm:flex-wrap">
                <InfoChip icon={<Flag className="h-3.5 w-3.5" />}>
                  {resume.focus}
                </InfoChip>
                <InfoChip>{resume.location}</InfoChip>
                <InfoChip>{age} anos</InfoChip>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {resume.introduction}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${resume.email}`}>
                  <Button size="lg" className="w-full sm:w-auto">
                    <Mail className="mr-2 h-4 w-4" />
                    Falar por e-mail
                  </Button>
                </a>
                <a href={formatPhoneHref(resume.phone)}>
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    <Phone className="mr-2 h-4 w-4" />
                    Ligar
                  </Button>
                </a>
                <a href={resume.linkedin} target="_blank" rel="noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="ghost"
                  className="no-print flex items-center gap-2"
                  onClick={() => window.print()}
                >
                  <Download className="h-4 w-4" />
                  Salvar em PDF
                </Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {resume.highlights.map((item) => (
                  <HighlightCard key={item.label} {...item} />
                ))}
              </div>
            </motion.div>

            <motion.aside {...fadeInOnMount} className="space-y-6">
              <div className="relative mx-auto max-w-xs overflow-hidden rounded-[2rem] border border-primary/30 bg-gradient-to-b from-primary/10 via-transparent to-background p-5 shadow-xl">
                <div className="absolute left-2 top-4 h-20 w-20 rounded-full border border-primary/30 bg-primary/15 blur-3xl" />
                <img
                  src={profileImage}
                  alt={`Foto de ${resume.name}`}
                  className="relative z-10 aspect-[3/4] w-full rounded-[1.5rem] object-cover"
                  loading="eager"
                />
              </div>
              <Card className="border border-primary/20 bg-background/70 backdrop-blur">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Perfil em resumo</CardTitle>
                  <CardDescription>
                    Disponível para estágio/trainee em tecnologia.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 text-sm text-muted-foreground">
                  <KeyValue k="Objetivo" v={resume.objective} />
                  <KeyValue k="Contato" v={resume.email} />
                  <KeyValue k="Telefone" v={resume.phone} />
                  <KeyValue k="Localização" v={resume.location} />
                </CardContent>
              </Card>
            </motion.aside>
          </div>
        </section>
        <Section
          id="sobre"
          title="Sobre mim"
          icon={<ShieldCheck className="h-6 w-6" />}
          description="Valores, atuação voluntária e visão profissional."
        >
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <Card className="border-0 bg-muted/20 backdrop-blur">
              <CardContent className="space-y-4 p-6 text-muted-foreground sm:p-8">
                {resume.summary.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-relaxed sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </CardContent>
            </Card>
            <div className="grid gap-4">
              {resume.values.map((value) => (
                <Card
                  key={value.title}
                  className="border border-primary/10 bg-background/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{value.title}</CardTitle>
                    <CardDescription>{value.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {value.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        <Separator />

        <Section
          id="experiencia"
          title="Experiência"
          icon={<Briefcase className="h-6 w-6" />}
          description="Vivências profissionais e voluntárias que consolidam postura responsável e colaborativa."
        >
          <div className="grid gap-6">
            {resume.experience.map((item, index) => (
              <TimelineItem
                key={item.company}
                item={item}
                index={index}
                total={resume.experience.length}
              />
            ))}
          </div>
        </Section>

        <Separator />

        <Section
          id="formacao"
          title="Formação"
          icon={<GraduationCap className="h-6 w-6" />}
          description="Bases acadêmicas e formação complementar."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {resume.education.map((item) => (
              <Card
                key={item.course}
                className="border border-primary/15 bg-background/80 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{item.course}</CardTitle>
                  <CardDescription>{item.institution}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  <div className="font-medium text-foreground">{item.period}</div>
                  {item.focus && <p>{item.focus}</p>}
                  {item.activities && (
                    <ul className="list-disc space-y-1 pl-5">
                      {item.activities.map((activity) => (
                        <li key={activity}>{activity}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Separator />

        <Section
          id="projetos"
          title="Projetos em destaque"
          icon={<Award className="h-6 w-6" />}
          description="Iniciativas onde a combinação de tecnologia e propósito gerou impacto real."
        >
          <div className="grid gap-6">
            {resume.projects.map((project) => (
              <Card
                key={project.name}
                className="border border-primary/10 bg-background/80 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl"
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <CardDescription>{project.context}</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="whitespace-nowrap border-primary/40 text-primary"
                    >
                      {project.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.links?.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        <Button variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {link.label}
                        </Button>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Separator />
        <Section
          id="cursos"
          title="Cursos & Certificados"
          icon={<GraduationCap className="h-6 w-6" />}
          description="Aprendizados extras que fortalecem fundamentos técnicos."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {resume.courses.map((course) => (
              <Card
                key={course.name}
                className="border border-primary/10 bg-muted/20 transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{course.name}</CardTitle>
                  {course.institution && (
                    <CardDescription>{course.institution}</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {course.details}
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Separator />

        <Section
          id="habilidades"
          title="Competências"
          icon={<ShieldCheck className="h-6 w-6" />}
          description="Conjunto de conhecimentos técnicos, ferramentas e habilidades humanas."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {resume.skills.map((group) => (
              <SkillGroup key={group.title} title={group.title} items={group.items} />
            ))}
          </div>
        </Section>

        <Separator />

        <Section
          id="idiomas"
          title="Idiomas"
          icon={<Globe className="h-6 w-6" />}
          description="Capacidades linguísticas alinhadas às necessidades de projetos globais."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {resume.languages.map((language) => (
              <LanguageCard key={language.name} language={language} />
            ))}
          </div>
        </Section>

        <Separator />

        <Section
          id="contato"
          title="Contato"
          icon={<Mail className="h-6 w-6" />}
          description="Vamos conversar sobre oportunidades, desafios e tecnologia."
        >
          <Card className="border border-primary/20 bg-background/80 shadow-lg">
            <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div>
                <p className="text-lg font-semibold text-foreground">
                  Pronto para somar ao seu time
                </p>
                <p className="text-sm text-muted-foreground">
                  Disponível para entrevistas presenciais ou remotas, com
                  dedicação e aprendizado contínuo.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${resume.email}`}>
                  <Button size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar e-mail
                  </Button>
                </a>
                <a href={formatPhoneHref(resume.phone)}>
                  <Button size="lg" variant="secondary">
                    <Phone className="mr-2 h-4 w-4" />
                    Chamar no telefone
                  </Button>
                </a>
                <a href={resume.linkedin} target="_blank" rel="noreferrer">
                  <Button size="lg" variant="outline">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Perfil completo
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </Section>
      </main>

      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-center text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {resume.name}. Construído com React, animações
            framer-motion e estilo Tailwind.
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {resume.location}
          </p>
        </div>
      </footer>

      <style>
        {`
        @media print {
          .no-print { display: none !important; }
          header { position: static !important; border: none !important; box-shadow: none !important; }
          body { background: white !important; }
          main { padding-top: 0 !important; }
          section { page-break-inside: avoid; }
          footer { display: none !important; }
        }
      `}
      </style>
    </div>
  );
}

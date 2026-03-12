import { motion } from "framer-motion";
import { Star, Shield, Clock, Scale, MessageCircle, ChevronRight, Award, Users, BookOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import nayaraImg from "@/assets/nayara-profile.jpg";

const WHATSAPP_URL = "https://wa.me/message/S7QZE2JZQLP2O1";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  }),
};

const reviews = [
  {
    name: "Patrícia Trazzi",
    text: "Advogada competente, atua no caso explicando cada detalhe de uma forma bem clara. Super indico!!",
    stars: 5,
    time: "1 mês atrás",
  },
  {
    name: "Vagner Rodrigues",
    text: "A Dr. demonstra respeito, empatia e domínio técnico. Recomendo de olhos fechados!",
    stars: 5,
    time: "1 mês atrás",
  },
  {
    name: "Bruna Stéfany",
    text: "Excelente profissional, é realista com a situação e com as possibilidades que podem ser trabalhadas. Recomendo.",
    stars: 5,
    time: "5 meses atrás",
  },
  {
    name: "Mariane Augusto dos Santos",
    text: "A doutora Nayara apareceu na minha vida no momento mais difícil. Ela é maravilhosa, entra na causa pra ganhar e se ver que não vai dar certo, já fala. Me dá atenção todas as vezes que preciso. Uma excelente profissional, um exemplo de ser humano. A palavra certa é Gratidão ❤",
    stars: 5,
    time: "2 anos atrás",
  },
];

const services = [
  {
    icon: Scale,
    title: "Progressão de Regime",
    desc: "Análise técnica para garantir a passagem do fechado ao semiaberto e aberto no tempo exato.",
  },
  {
    icon: Clock,
    title: "Remição de Pena",
    desc: "Transformação de dias de trabalho e estudo em liberdade antecipada.",
  },
  {
    icon: Shield,
    title: "Falta Disciplinar",
    desc: "Proteção contra suspensões indevidas e procedimentos abusivos.",
  },
  {
    icon: BookOpen,
    title: "Retificação de Cálculos",
    desc: "Corrigir distorções que mantém o sentenciado em regime mais gravoso.",
  },
];

const stats = [
  { value: "+1.000", label: "Presos atendidos" },
  { value: "6 anos", label: "De experiência" },
  { value: "24h", label: "Suporte à família" },
  { value: "Todo Brasil", label: "Atendimento nacional" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif text-lg font-semibold tracking-wide text-foreground">
            Nayara <span className="text-primary">Fernandes</span>
          </span>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-1" />
              Fale Conosco
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" className="space-y-6">
            <motion.p variants={fadeUp} custom={0} className="text-primary font-medium tracking-widest text-sm uppercase">
              Advocacia Criminal Especializada
            </motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-serif">
              Não deixe o tempo passar sem a devida{" "}
              <span className="text-primary italic">assistência jurídica.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg max-w-lg leading-relaxed">
              A condenação não é o fim. Resguardo a dignidade e os direitos durante o cumprimento de pena com acompanhamento especializado.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 text-base">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com o Suporte
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-transparent rounded-2xl blur-xl" />
              <img
                src={nayaraImg}
                alt="Dra. Nayara Fernandes - Advogada Criminal Especialista em Execução Penal"
                className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl border border-border"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews - Second Section */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} custom={0} className="text-primary font-medium tracking-widest text-sm uppercase mb-3">
              Depoimentos
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold font-serif">
              A confiança de quem já teve seus{" "}
              <span className="text-primary italic">direitos restabelecidos</span>
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="bg-card border-border h-full hover:border-primary/30 transition-colors duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: review.stars }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-foreground font-semibold text-sm">{review.name}</p>
                      <p className="text-muted-foreground text-xs">{review.time}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold font-serif text-primary">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} custom={0} className="text-primary font-medium tracking-widest text-sm uppercase mb-3">
              Áreas de Atuação
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold font-serif">
              Porque contratar um{" "}
              <span className="text-primary italic">especialista?</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Monitoramos o processo em tempo real para que nenhum direito seja esquecido.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Card className="bg-card border-border h-full group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-foreground font-semibold text-lg mb-2 font-serif">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} custom={0} className="text-primary font-medium tracking-widest text-sm uppercase">
              Sobre
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold font-serif">
              Nayara <span className="text-primary italic">Fernandes</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground leading-relaxed">
              Com mais de 6 anos de experiência e mais de 1.000 presos atendidos, atuo exclusivamente na área de execução penal, 
              garantindo que cada sentenciado tenha seus direitos respeitados durante o cumprimento de pena.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="space-y-3">
              {[
                "Atendimento mensal ao preso e suporte à família 24h",
                "Ensino outros advogados sobre execução penal",
                "Atendimento em todo o Brasil",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} custom={4}>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 mt-2">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Award, label: "Especialista em Execução Penal" },
              { icon: Users, label: "+1.000 Clientes Atendidos" },
              { icon: Clock, label: "6 Anos de Experiência" },
              { icon: Phone, label: "Suporte 24 horas" },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/30 transition-colors">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-foreground text-sm font-medium">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold font-serif">
            Fale agora mesmo com minha equipe e{" "}
            <span className="text-primary italic">tire suas dúvidas</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-muted-foreground max-w-lg mx-auto">
            Não deixe seus direitos serem esquecidos. Entre em contato para uma análise personalizada do seu caso.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 text-base">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com o Suporte
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-foreground">
            Nayara <span className="text-primary">Fernandes</span> Advocacia
          </span>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Nayara Fernandes - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

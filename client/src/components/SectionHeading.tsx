import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
        <span className="relative z-10">{title}</span>
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-70" />
      </h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

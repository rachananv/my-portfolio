import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: ReactNode;
  delay: number;
}

export default function SkillCard({ title, skills, icon, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors group h-full"
    >
      <div className="mb-4 p-3 rounded-xl bg-primary/5 w-fit group-hover:bg-primary/10 transition-colors">
        <div className="text-primary">{icon}</div>
      </div>
      
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-white/5 group-hover:border-primary/20 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

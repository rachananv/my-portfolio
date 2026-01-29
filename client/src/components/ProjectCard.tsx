import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  links?: {
    github?: string;
    demo?: string;
  };
  delay?: number;
}

export default function ProjectCard({ title, description, tags, links, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full flex flex-col glass-card border-white/10 overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
        <div className="h-2 bg-gradient-to-r from-primary to-blue-600 w-full" />
        <CardHeader>
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-2xl font-bold text-foreground">{title}</h3>
            <Layers className="text-muted-foreground w-6 h-6" />
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        {links && (
          <CardFooter className="pt-2 gap-3">
            {links.github && (
              <Button size="sm" variant="outline" className="gap-2" asChild>
                <a href={links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" /> Code
                </a>
              </Button>
            )}
            {links.demo && (
              <Button size="sm" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href={links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}

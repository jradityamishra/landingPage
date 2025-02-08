import { Copy, Layers, MessageCircle, MousePointer, X, MessageSquare, Snowflake, MailCheck, Workflow } from 'lucide-react';
interface Feature {
    name: string;
    icon: JSX.Element;
    title: string;
    description: string;
  }
export const features: Feature[] = [
    {
      name: "Feature 1",
      icon: <Copy className="w-12 h-12 text-white" />,
      title: "Fully Customizable",
      description: "A good design is not only aesthetically pleasing but also functional. It should be able to solve the problem"
    },
    {
      name: "Feature 2",
      icon: <Layers className="w-12 h-12 text-white" />,
      title: "Fully Customizable",
      description: "A good design is not only aesthetically pleasing but also functional. It should be able to solve the problem"
    },
    {
      name: "Feature 3",
      icon: <MessageCircle className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl p-2" />,
      title: "Fully Customizable",
      description: "A good design is not only aesthetically pleasing but also functional. It should be able to solve the problem"
    },
    {
      name: "Feature 4",
      icon: <MousePointer className="w-12 h-12 text-white" />,
      title: "Fully Customizable",
      description: "A good design is not only aesthetically pleasing but also functional. It should be able to solve the problem"
    },
    {
      name: "Feature 5",
      icon: <X className="w-12 h-12 text-white" />,
      title: "Fully Customizable",
      description: "A good design is not only aesthetically pleasing but also functional. It should be able to solve the problem"
    },
    {
      name: "Feature 6",
      icon: <MessageSquare className="w-12 h-12 text-white" />,
      title: "Fully Customizable",
      description: "A good design is not only aesthetically pleasing but also functional. It should be able to solve the problem"
    }
  ];
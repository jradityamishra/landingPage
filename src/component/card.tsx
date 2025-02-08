import { Copy, Layers, MessageCircle, MousePointer, X, MessageSquare, Snowflake, MailCheck, Workflow } from 'lucide-react';
interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  name: string;
}

const Card: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div 
      className="bg-zinc-900 rounded-3xl p-8 transition-transform duration-300 hover:transform hover:-translate-y-2"
    >
      <div className="mb-6">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  )
}

export default Card
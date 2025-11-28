import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Target,
  Zap,
  ArrowLeft,
  Sparkles,
  Activity,
  Brain,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  const metrics = [
    {
      title: "AI Conversations",
      value: "2,847",
      change: "+23%",
      icon: Brain,
      gradient: "from-trust-start to-trust-end",
    },
    {
      title: "Active Users",
      value: "1,423",
      change: "+18%",
      icon: Users,
      gradient: "from-ignition-start to-ignition-end",
    },
    {
      title: "Conversion Rate",
      value: "4.8%",
      change: "+12%",
      icon: Target,
      gradient: "from-wisdom-start to-wisdom-end",
    },
    {
      title: "Revenue",
      value: "$12,847",
      change: "+31%",
      icon: DollarSign,
      gradient: "from-aurora-start to-aurora-end",
    },
  ];

  const insights = [
    {
      title: "Peak Engagement Hours",
      description: "Your users are most active between 9 AM - 11 AM EST",
      icon: Activity,
      color: "text-trust-start",
    },
    {
      title: "Top Feature",
      description: "Strategic Planning tools have 89% engagement rate",
      icon: Zap,
      color: "text-ignition-start",
    },
    {
      title: "Growth Opportunity",
      description: "AI suggests focusing on automation features next",
      icon: Sparkles,
      color: "text-wisdom-start",
    },
  ];

  const activities = [
    { action: "New user signup", time: "2 minutes ago", type: "user" },
    { action: "AI strategy session completed", time: "15 minutes ago", type: "ai" },
    { action: "Premium upgrade", time: "1 hour ago", type: "revenue" },
    { action: "Feature request submitted", time: "3 hours ago", type: "feedback" },
    { action: "Integration connected", time: "5 hours ago", type: "system" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-wisdom-gradient opacity-20 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-trust-gradient opacity-10 blur-3xl rounded-full" />
      </div>

      {/* Header */}
      <header className="relative border-b border-border/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back to Synapse</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-full bg-trust-gradient/10 border border-trust-start/20 text-sm font-medium">
                Pro Plan
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-6 py-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${metric.gradient} opacity-10`}>
                    <metric.icon className={`w-6 h-6 bg-gradient-to-br ${metric.gradient} bg-clip-text text-transparent`} />
                  </div>
                  <span className="text-sm font-medium text-green-500">{metric.change}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{metric.title}</p>
                <p className="text-3xl font-bold">{metric.value}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* AI Insights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-2 mb-6">
                <Brain className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">AI Insights</h2>
              </div>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <motion.div
                    key={insight.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="p-4 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-background">
                        <insight.icon className={`w-5 h-5 ${insight.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{insight.title}</h3>
                        <p className="text-sm text-muted-foreground">{insight.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">Recent Activity</h2>
              </div>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    className="flex items-start gap-3 pb-4 border-b border-border/30 last:border-0"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

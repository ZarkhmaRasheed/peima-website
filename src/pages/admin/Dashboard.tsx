import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, FileText, MessageSquare, BarChart3, Settings,
  Menu, X, Bell, Search, ChevronDown, Home, File, MapPin, LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";

const sidebarItems = [
  { name: "Dashboard", icon: Home, path: "/admin" },
  { name: "Users", icon: Users, path: "/admin/users" },
  { name: "Content", icon: FileText, path: "/admin/content" },
  { name: "Messages", icon: MessageSquare, path: "/admin/messages" },
  { name: "Reports", icon: BarChart3, path: "/admin/reports" },
  { name: "Settings", icon: Settings, path: "/admin/settings" },
];

const statsCards = [
  { title: "Total Schools", value: "1,247", change: "+12%", color: "bg-gradient-to-r from-peima-gold to-peima-gold-dark" },
  { title: "Students", value: "567,892", change: "+8.5%", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
  { title: "Teachers", value: "18,543", change: "+5.2%", color: "bg-gradient-to-r from-green-500 to-green-600" },
  { title: "Satisfaction", value: "95%", change: "+2.1%", color: "bg-gradient-to-r from-pink-500 to-pink-600" },
];

const barData = [
  { month: "Jan", value: 30 }, { month: "Feb", value: 28 }, { month: "Mar", value: 35 },
  { month: "Apr", value: 32 }, { month: "May", value: 40 }, { month: "Jun", value: 45 },
  { month: "Jul", value: 38 }, { month: "Aug", value: 42 }, { month: "Sep", value: 48 },
];

const areaData = [
  { name: "Week 1", value: 400 }, { name: "Week 2", value: 300 }, { name: "Week 3", value: 500 },
  { name: "Week 4", value: 450 }, { name: "Week 5", value: 600 },
];

const pieData = [
  { name: "Completed", value: 45, color: "#1e3a5f" },
  { name: "In Progress", value: 30, color: "#f5a623" },
  { name: "Pending", value: 25, color: "#e5e7eb" },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-secondary/30 flex">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-primary text-primary-foreground transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"}`}>
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-peima-gold rounded-full flex items-center justify-center">
              <span className="text-primary font-bold">P</span>
            </div>
            {sidebarOpen && <span className="font-bold text-lg">PEIMA Admin</span>}
          </div>
        </div>
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${location.pathname === item.path ? "bg-peima-gold text-primary" : "hover:bg-white/10"}`}
            >
              <item.icon className="h-5 w-5" />
              {sidebarOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span>Exit to Website</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-card border-b border-border p-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="h-5 w-5" />
            </Button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10 w-64 bg-secondary border-0" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full text-[10px] text-white flex items-center justify-center">3</span>
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">A</div>
              <span className="hidden md:block font-medium">Admin User</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-2xl font-bold text-foreground mb-6">Dashboard Overview</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, i) => (
              <div key={i} className={`${stat.color} rounded-2xl p-6 text-white`}>
                <p className="text-white/80 text-sm mb-2">{stat.title}</p>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold">{stat.value}</span>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded-full">{stat.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 bg-card rounded-2xl p-6 shadow-peima-sm">
              <h3 className="font-bold text-foreground mb-4">Monthly Performance</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#1e3a5f" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-peima-sm">
              <h3 className="font-bold text-foreground mb-4">Task Status</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                    {pieData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-4">
                {pieData.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-muted-foreground">{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Area Chart */}
          <div className="bg-card rounded-2xl p-6 shadow-peima-sm">
            <h3 className="font-bold text-foreground mb-4">Weekly Trends</h3>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={areaData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#f5a623" fill="#f5a623" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
}

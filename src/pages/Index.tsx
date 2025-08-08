import { useState, useEffect } from "react";
import { LandingPage } from "@/components/LandingPage";
import { AuthModal } from "@/components/AuthModal";
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);
  const [showAuth, setShowAuth] = useState(false);

  // Check for saved user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("simplifyai-user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem("simplifyai-user");
      }
    }
  }, []);

  const handleAuth = (userData: { email: string; name: string }) => {
    setUser(userData);
    localStorage.setItem("simplifyai-user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("simplifyai-user");
    localStorage.removeItem("simplifyai-messages");
  };

  if (user) {
    return <ChatInterface user={user} onLogout={handleLogout} />;
  }

  return (
    <>
      <LandingPage onGetStarted={() => setShowAuth(true)} />
      <AuthModal 
        isOpen={showAuth} 
        onClose={() => setShowAuth(false)} 
        onAuth={handleAuth}
      />
    </>
  );
};

export default Index;

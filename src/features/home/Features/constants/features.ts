import { Activity, BarChart3, Clock, Lock, Users, Zap } from "lucide-react";
import type { FeatureItem } from "../types";

export const features: FeatureItem[] = [
  { id: "dashboard", icon: BarChart3 },
  { id: "analytics", icon: Activity },
  { id: "collaboration", icon: Users },
  { id: "automation", icon: Zap },
  { id: "storage", icon: Lock },
  { id: "support", icon: Clock },
];

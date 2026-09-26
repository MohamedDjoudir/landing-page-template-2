export interface Step {
  id: string;
  number: string;
  image: string;
}

export interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  driftX: number;
  driftY: number;
  duration: number;
}

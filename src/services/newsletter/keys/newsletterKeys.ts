export const newsletterKeys = {
  all: ["newsletter"] as const,
  subscribe: () => [...newsletterKeys.all, "subscribe"] as const,
};

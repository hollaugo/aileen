import type { NextConfig } from "next";
import { withWorkflow } from "workflow/next";

const nextConfig = {
  serverExternalPackages: ["@mastra/*"],
  reactCompiler: true,
  serverActions: {
    allowedOrigins: [
      "localhost:3000",
      "*.app.github.dev",
      "*.githubpreview.dev",
    ],
  },
} satisfies NextConfig & {
  serverActions?: {
    allowedOrigins?: string[];
  };
};

export default withWorkflow(nextConfig);

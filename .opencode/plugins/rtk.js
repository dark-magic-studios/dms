// RTK OpenCode plugin — rewrites commands to use rtk for token savings.
export const RtkOpenCodePlugin = async ({ $ }) => {
  try {
    await $`which rtk`.quiet();
  } catch {
    return {};
  }

  return {
    "tool.execute.before": async (input, output) => {
      const tool = String(input?.tool ?? "").toLowerCase();
      if (tool !== "bash" && tool !== "shell") return;
      const args = output?.args;
      if (!args || typeof args !== "object") return;

      const command = args.command;
      if (typeof command !== "string" || !command) return;

      try {
        const result = await $`rtk rewrite ${command}`.quiet().nothrow();
        const rewritten = String(result.stdout).trim();
        if (rewritten && rewritten !== command) {
          args.command = rewritten;
        }
      } catch {
        // pass through
      }
    },
  };
};

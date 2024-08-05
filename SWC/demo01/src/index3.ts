import { dev, build } from "./bundler";
import { program } from "commander";
import { getPackageInfo } from "@unicauldron/utils";
import type { UcdConfig } from "./types";
45;
async function main() {
  const pkg = getPackageInfo();
  program.name(pkg.name).version(pkg.version);
  const a = [...pkg];
  Object.hasOwn(a, "test");
  //解析命令行参数
  program
    .command("dev")
    .description("run development server")
    .action(() => {
      dev();
    });

  program
    .command("build")
    .description("build project")
    .action(() => {
      build();
    });

  program.parse();
}
function run() {
  main();
}
export function defineUcdConfig(config: UcdConfig): UcdConfig {
  return config;
}

export { run };
export * from "./types";
export * from "@rsbuild/core";
class Test {}

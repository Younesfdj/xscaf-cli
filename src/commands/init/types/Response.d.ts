interface IResponse {
  projectName: string;
  packageName: string;
  variant: "js" | "ts";
  src: boolean;
}

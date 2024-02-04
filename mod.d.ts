declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<>>;
  export default content;
}
declare module '*.jpg';
declare module '*.gif';
declare module '*.png' {
  const value: any;
  export default value;
}

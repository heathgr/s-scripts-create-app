declare type Step<T> = (...args: any[]) => Promise<T>;
declare const runStep: <T>(description: string, step: Step<T>, ...args: any[]) => Promise<void>;
export default runStep;
//# sourceMappingURL=runStep.d.ts.map
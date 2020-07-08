interface ExtendedError extends Error {
    stdout?: string;
    stderr?: string;
}
declare const logError: (e: ExtendedError) => void;
export default logError;
//# sourceMappingURL=logError.d.ts.map
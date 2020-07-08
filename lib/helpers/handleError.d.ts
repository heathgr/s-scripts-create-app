interface ExtendedError extends Error {
    stdout?: string;
    stderr?: string;
}
declare const handleError: (e: ExtendedError) => void;
export default handleError;
//# sourceMappingURL=handleError.d.ts.map
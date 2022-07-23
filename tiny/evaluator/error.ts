import {
    ParseError,
    Stdio,
    Options,
    LangObject,
    ObjectKind,
} from '../../index';
import colors from 'colors';

colors.enabled = true;

const error = (message: string, line: number, column: number): LangObject => ({
    kind: ObjectKind.ERROR,
    message,
    line,
    column,
});

const printError = (
    error: ParseError,
    file: string,
    stderr: Stdio,
    options: Options
) => {
    const { line, column, message } = error;

    stderr(
        `${
            options.stderrPrefix
                ? `${options.stderrColor ? `[Error]`.bgRed : `[Error]`} `
                : ''
        }${options.stderrColor ? message.red : message} (${
            options.stderrColor
                ? `${file} ${`${line}:${column}`.yellow}`
                : `${file} ${line}:${column}`
        })`
    );
};

export default error;
export { printError };

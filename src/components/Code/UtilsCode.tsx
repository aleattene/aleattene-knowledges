

export const removeTsxIndentation = (code: string) => {
    const lines = code.split('\n');
    const minIndent = Math.min(
        ...lines.filter(line => line.trim().length > 0)
            .map(line => line.search(/\S/)
            )
    );

    return lines.map(line => line.slice(minIndent)).join('\n').trim();
};
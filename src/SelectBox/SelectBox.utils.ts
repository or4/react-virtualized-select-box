export function classes(args: any[]): string {
    const classNames = args.reduce(function(acc, classNameValue) {
        if (!acc && classNameValue) {
            return classNameValue;
        }

        if (classNameValue) {
            return acc + ' ' + classNameValue;
        }

        return acc;
    });

    return classNames || '';
}

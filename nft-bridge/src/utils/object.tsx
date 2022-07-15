export const getPropertyPath = (obj: any, propertyPath: any) =>
    propertyPath
        .split('.')
        .reduce((o: any, x: any) => (typeof o === 'undefined' || o === null ? o : o[x]), obj);

export const toClasses = (...classes: any) => [...classes].join(' ');

export const evaluate = (template: any, model: any) => {
    try {
        let reg,
            res = template;
        for (const key in model) {
            let value = model[key] !== undefined && model[key] !== null ? model[key] : '';
            if (typeof value === 'string' && value.indexOf('"') > -1) {
                value = value.replace(/"/g, '\\"');
            }
            reg = new RegExp(`{{${key}}}`, 'g');
            res = res.replace(reg, value);
        }
        return res;
    } catch (ex) {
        return '';
    }
};

export const findIndexById = (array: any, id: any) => {
    const findId = (element: any) => element.id === id
    return array.findIndex(findId);
};

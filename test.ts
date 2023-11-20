interface I {
    [key: string]: number;
}

interface I_FUNC {
    [key: string]: () => number;
}

export function infc_obj_get_field() {
    const obj: I = {
        x: 1,
        y: 2,
    };
    for (const key in obj) {
        console.log(obj[key]);
    }
}

export function infc_obj_get_method() {
    const obj: I_FUNC = {
        x: () => 1,
        y: () => 2,
    };
    for (const key in obj) {
        const a = obj[key];
        console.log(a());
    }
}

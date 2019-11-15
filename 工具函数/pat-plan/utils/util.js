// 设置数组对象中某字段为空 
// [
//     0: { name: 'usergid', align: '用户gid', value: '123' },
//     1: {name: 'opgid', align: '操作人gid', value: '123'}
// ]
// 让第二个对象 的value为空
function setFieldNull(arr, condition, field) {
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        if (obj.name === condition) {
            obj[field] = null;
            return;
        }
    }
}

export class ObjectUtil {
    static objIsValid(obj) {
        if (obj && (typeof obj === 'object' && typeof obj !== 'undefined') && Object.keys(obj).length >= 0) {
            return true;
        } else {
            false;
        }
    }
    // 过滤对象中属性为空的属性
    static fillObjNull(obj) {
        let newObj = {};
        for (let key of Object.keys(obj)) {
            if (StringUtil.strIsValid(obj[key])) {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    }
}

export class ArrayObjectUtil {
    /**
     * 
     * @param {对象数组} objArray 
     * @param {匹配字段} field 
     * @param {匹配条件条件,可以是对象或数组} condition 
     * @param {类型，包括正向匹配，和反向匹配} type 
     */
    //  objArray = [{key: 'add', name: '添加'}, {key: 'delete', name: '删除'}， {key: 'update', name: '修改'}]
    // field: key
    // condition: [add, update]
    static getObjByCon(objArray, field, condition, type) {
        let newObjArray = [];
        if (type === 'contain') {
            newObjArray = objArray.field((elem) => {
                return objArray[field] === condition[field] || ArrayUtil.contain(condition, elem[field])
            })
        }
    }
}
export class ArrayUtil {
    static contain(arr, val) {
        for (let i = 0; i < arr.length; i++) {
            if (array[i] === val) {
                return true;
            }
        }
        return false;
    }
    /**
     * 将一串数组分割成 num为一组的二维数组
     * @param {元素数组} arr 
     * @param {num个 为一组} num 
     */
    static arrayToN(arr, num) {
        let newArray = [];
        if (!arr) {
            return [];
        }
        arr.forEach((item, index) => {
            let page = Math.floor(index / num);
            if (!newArray[page]) {
                nweArray[page] = [];
            }
            newArray[page].push(item);
        });
        return newArray;
    }
}
export class StringUtil {
    // 判断字符串是否为空
    static strIsValid(str) {
        if (str && (str != 'undefined' && typeof str === 'String') && str.length >= '0') {
            return true;
        } else {
            return false;
        }
    }
}
/**
 * Created by thejojo on 2017/4/25.
 */

// 观察者构造函数
function Observer(data) {
    this.data = data;
    this.walk(data)
}

let p = Observer.prototype;

// 此函数用于深层次遍历对象的各个属性
// 采用的是递归的思路
// 因为我们要为对象的每一个属性绑定getter和setter
p.walk = function (obj) {
    // console.log(obj);
    let val;
    for (let key in obj) {
        // 这里为什么要用hasOwnProperty进行过滤呢？
        // 因为for...in 循环会把对象原型链上的所有可枚举属性都循环出来
        // 而我们想要的仅仅是这个对象本身拥有的属性，所以要这么做。
        if (obj.hasOwnProperty(key)) {
            val = obj[key];

            // 这里进行判断，如果还没有遍历到最底层，继续new Observer
            if (typeof val === 'object') {
                new Observer(val);
            }

            this.convert(key, val);
        }
    }
};

p.convert = function (key, val) {
    Object.defineProperty(this.data, key, {
        enumerable: true,
        configurable: true,
        get: function () {
            console.log('你访问了' + key);
            return val
        },
        set: function (newVal) {
            console.log('你设置了' + key);
            console.log('新的' + key + ' = ' + newVal);

            val = newVal;
            if (typeof newVal === 'object') {
                console.log("aaa");
                new Observer(val);
                // p.walk(newVal);
            }

            // if (newVal === val) return;


        }
    })
};

let data = {
    user: {
        name: "liangshaofeng",
        age: "24"
    },
    address: {
        city: "beijing"
    },
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4
    }
};

// let app = new Observer(data);

let app1 = new Observer({
    name: 'youngwind',
    age: 25
});

app1.data.name = {
    lastName: 'liang',
    firstName: 'shaofeng'
};

app1.data.name.lastName;
// 这里还需要输出 '你访问了 lastName '
app1.data.name.firstName = 'lalala';
// 这里还需要输出 '你设置了firstName, 新的值为 lalala'


// let app2 = new Observer({
//     university: 'bupt',
//     major: 'computer'
// });
//
// let obj = {
//     a: 1,
//     b: 2,
//     c: {
//         d: 3,
//         e: 4
//     }
// };
//
// let app3 = new Observer({
//     a: 1,
//     b: 2,
//     c: {
//         d: 3,
//         e: 4
//     }
// });


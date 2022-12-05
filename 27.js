let primer = (a, b) => n => n ** 2 + a * n + b;
let solver = (a, b, c) => [
    (-b + (b ** 2 - 4 * a * c) ** 0.5) / 2 / a,
    (-b - (b ** 2 - 4 * a * c) ** 0.5) / 2 / a
];

lp = {};
lc = {};
isPrime = n => {
    if (lp[n]) return true;
    if (lc[n]) return false;
    for (let i = 2; i < n / 2; i++) {
        if (n % i == 0) {
            lc[n] = 1;
            return false;
        }
    }
    lp[n] = 1;
    return true;
}

let flag = true;
let i = 0;
let max = 0;
let mm = 0;

// [a1, a2] = [-999, -999];
[a1, a2] = [-1000, 1000];
// [b1, b2] = [61, 61];
[b1, b2] = [-1000, 1000];

amax = 0;
ans = [0, 0];

for (j = a1; j <= a2; j++) {
    for (k = b1; k <= b2; k++) {
        max = 0;
        let i = 0;
        flag = true;
        while (flag) {
            num = primer(j, k)(i);
            if (num < 0) break;
            isp = isPrime(num);
            // console.log(i, num, isp);
            if (!isp) {
                // console.log([j, k], i - 1);
                break;
            }
            if (max < num) {
                max = num;
                mm = j;
            }
            i++;
        }
        if (i > amax) {
            amax = i;
            ans = [j, k];
        }
    }
}

console.log(ans, amax);



function pascals_triangle(n){
    let triangle = [[1]];
    for (let i = 1; i < n; i++){
        let prev = triangle[i-1];
        let current = [1];
        for (let j = 1; j < prev.length; j++){
            current.push(prev[j-1] + prev[j]);
        }
        current.push(1);
        triangle.push(current);
    }
    return triangle;
}

console.log(pascals_triangle(5))